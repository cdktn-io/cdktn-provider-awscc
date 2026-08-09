# `dataAwsccLightsailInstance` Submodule <a name="`dataAwsccLightsailInstance` Submodule" id="@cdktn/provider-awscc.dataAwsccLightsailInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLightsailInstance <a name="DataAwsccLightsailInstance" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lightsail_instance awscc_lightsail_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.NewDataAwsccLightsailInstance(scope Construct, id *string, config DataAwsccLightsailInstanceConfig) DataAwsccLightsailInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig">DataAwsccLightsailInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig">DataAwsccLightsailInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLightsailInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.DataAwsccLightsailInstance_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.DataAwsccLightsailInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.DataAwsccLightsailInstance_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.DataAwsccLightsailInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLightsailInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLightsailInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLightsailInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lightsail_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLightsailInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.addOns">AddOns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList">DataAwsccLightsailInstanceAddOnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.blueprintId">BlueprintId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.bundleId">BundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.hardware">Hardware</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference">DataAwsccLightsailInstanceHardwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.isStaticIp">IsStaticIp</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.keyPairName">KeyPairName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference">DataAwsccLightsailInstanceLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.networking">Networking</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference">DataAwsccLightsailInstanceNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.publicIpAddress">PublicIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.sshKeyName">SshKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.state">State</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference">DataAwsccLightsailInstanceStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.supportCode">SupportCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList">DataAwsccLightsailInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AddOns`<sup>Required</sup> <a name="AddOns" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.addOns"></a>

```go
func AddOns() DataAwsccLightsailInstanceAddOnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList">DataAwsccLightsailInstanceAddOnsList</a>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `BlueprintId`<sup>Required</sup> <a name="BlueprintId" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.blueprintId"></a>

```go
func BlueprintId() *string
```

- *Type:* *string

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.bundleId"></a>

```go
func BundleId() *string
```

- *Type:* *string

---

##### `Hardware`<sup>Required</sup> <a name="Hardware" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.hardware"></a>

```go
func Hardware() DataAwsccLightsailInstanceHardwareOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference">DataAwsccLightsailInstanceHardwareOutputReference</a>

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.ipv6Addresses"></a>

```go
func Ipv6Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `IsStaticIp`<sup>Required</sup> <a name="IsStaticIp" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.isStaticIp"></a>

```go
func IsStaticIp() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KeyPairName`<sup>Required</sup> <a name="KeyPairName" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.keyPairName"></a>

```go
func KeyPairName() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.location"></a>

```go
func Location() DataAwsccLightsailInstanceLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference">DataAwsccLightsailInstanceLocationOutputReference</a>

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.networking"></a>

```go
func Networking() DataAwsccLightsailInstanceNetworkingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference">DataAwsccLightsailInstanceNetworkingOutputReference</a>

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.publicIpAddress"></a>

```go
func PublicIpAddress() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `SshKeyName`<sup>Required</sup> <a name="SshKeyName" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.sshKeyName"></a>

```go
func SshKeyName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.state"></a>

```go
func State() DataAwsccLightsailInstanceStateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference">DataAwsccLightsailInstanceStateOutputReference</a>

---

##### `SupportCode`<sup>Required</sup> <a name="SupportCode" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.supportCode"></a>

```go
func SupportCode() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.tags"></a>

```go
func Tags() DataAwsccLightsailInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList">DataAwsccLightsailInstanceTagsList</a>

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLightsailInstanceAddOns <a name="DataAwsccLightsailInstanceAddOns" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

&dataawscclightsailinstance.DataAwsccLightsailInstanceAddOns {

}
```


### DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequest <a name="DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequest" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequest.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

&dataawscclightsailinstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequest {

}
```


### DataAwsccLightsailInstanceConfig <a name="DataAwsccLightsailInstanceConfig" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

&dataawscclightsailinstance.DataAwsccLightsailInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lightsail_instance#id DataAwsccLightsailInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLightsailInstanceHardware <a name="DataAwsccLightsailInstanceHardware" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardware.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

&dataawscclightsailinstance.DataAwsccLightsailInstanceHardware {

}
```


### DataAwsccLightsailInstanceHardwareDisks <a name="DataAwsccLightsailInstanceHardwareDisks" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

&dataawscclightsailinstance.DataAwsccLightsailInstanceHardwareDisks {

}
```


### DataAwsccLightsailInstanceLocation <a name="DataAwsccLightsailInstanceLocation" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

&dataawscclightsailinstance.DataAwsccLightsailInstanceLocation {

}
```


### DataAwsccLightsailInstanceNetworking <a name="DataAwsccLightsailInstanceNetworking" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworking.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

&dataawscclightsailinstance.DataAwsccLightsailInstanceNetworking {

}
```


### DataAwsccLightsailInstanceNetworkingMonthlyTransfer <a name="DataAwsccLightsailInstanceNetworkingMonthlyTransfer" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransfer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

&dataawscclightsailinstance.DataAwsccLightsailInstanceNetworkingMonthlyTransfer {

}
```


### DataAwsccLightsailInstanceNetworkingPorts <a name="DataAwsccLightsailInstanceNetworkingPorts" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPorts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

&dataawscclightsailinstance.DataAwsccLightsailInstanceNetworkingPorts {

}
```


### DataAwsccLightsailInstanceState <a name="DataAwsccLightsailInstanceState" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceState.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

&dataawscclightsailinstance.DataAwsccLightsailInstanceState {

}
```


### DataAwsccLightsailInstanceTags <a name="DataAwsccLightsailInstanceTags" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

&dataawscclightsailinstance.DataAwsccLightsailInstanceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference <a name="DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.NewDataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDay">SnapshotTimeOfDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequest">DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SnapshotTimeOfDay`<sup>Required</sup> <a name="SnapshotTimeOfDay" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDay"></a>

```go
func SnapshotTimeOfDay() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequest
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequest">DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequest</a>

---


### DataAwsccLightsailInstanceAddOnsList <a name="DataAwsccLightsailInstanceAddOnsList" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.NewDataAwsccLightsailInstanceAddOnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLightsailInstanceAddOnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.get"></a>

```go
func Get(index *f64) DataAwsccLightsailInstanceAddOnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLightsailInstanceAddOnsOutputReference <a name="DataAwsccLightsailInstanceAddOnsOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.NewDataAwsccLightsailInstanceAddOnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLightsailInstanceAddOnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.property.addOnType">AddOnType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.property.autoSnapshotAddOnRequest">AutoSnapshotAddOnRequest</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference">DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOns">DataAwsccLightsailInstanceAddOns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddOnType`<sup>Required</sup> <a name="AddOnType" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.property.addOnType"></a>

```go
func AddOnType() *string
```

- *Type:* *string

---

##### `AutoSnapshotAddOnRequest`<sup>Required</sup> <a name="AutoSnapshotAddOnRequest" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.property.autoSnapshotAddOnRequest"></a>

```go
func AutoSnapshotAddOnRequest() DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference">DataAwsccLightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailInstanceAddOns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceAddOns">DataAwsccLightsailInstanceAddOns</a>

---


### DataAwsccLightsailInstanceHardwareDisksList <a name="DataAwsccLightsailInstanceHardwareDisksList" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.NewDataAwsccLightsailInstanceHardwareDisksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLightsailInstanceHardwareDisksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.get"></a>

```go
func Get(index *f64) DataAwsccLightsailInstanceHardwareDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLightsailInstanceHardwareDisksOutputReference <a name="DataAwsccLightsailInstanceHardwareDisksOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.NewDataAwsccLightsailInstanceHardwareDisksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLightsailInstanceHardwareDisksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.attachedTo">AttachedTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.attachmentState">AttachmentState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.diskName">DiskName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.isSystemDisk">IsSystemDisk</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.sizeInGb">SizeInGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisks">DataAwsccLightsailInstanceHardwareDisks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachedTo`<sup>Required</sup> <a name="AttachedTo" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.attachedTo"></a>

```go
func AttachedTo() *string
```

- *Type:* *string

---

##### `AttachmentState`<sup>Required</sup> <a name="AttachmentState" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.attachmentState"></a>

```go
func AttachmentState() *string
```

- *Type:* *string

---

##### `DiskName`<sup>Required</sup> <a name="DiskName" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.diskName"></a>

```go
func DiskName() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `IsSystemDisk`<sup>Required</sup> <a name="IsSystemDisk" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.isSystemDisk"></a>

```go
func IsSystemDisk() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SizeInGb`<sup>Required</sup> <a name="SizeInGb" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.sizeInGb"></a>

```go
func SizeInGb() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailInstanceHardwareDisks
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisks">DataAwsccLightsailInstanceHardwareDisks</a>

---


### DataAwsccLightsailInstanceHardwareOutputReference <a name="DataAwsccLightsailInstanceHardwareOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.NewDataAwsccLightsailInstanceHardwareOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLightsailInstanceHardwareOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.property.cpuCount">CpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.property.disks">Disks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList">DataAwsccLightsailInstanceHardwareDisksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.property.ramSizeInGb">RamSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardware">DataAwsccLightsailInstanceHardware</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.property.cpuCount"></a>

```go
func CpuCount() *f64
```

- *Type:* *f64

---

##### `Disks`<sup>Required</sup> <a name="Disks" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.property.disks"></a>

```go
func Disks() DataAwsccLightsailInstanceHardwareDisksList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareDisksList">DataAwsccLightsailInstanceHardwareDisksList</a>

---

##### `RamSizeInGb`<sup>Required</sup> <a name="RamSizeInGb" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.property.ramSizeInGb"></a>

```go
func RamSizeInGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardwareOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailInstanceHardware
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceHardware">DataAwsccLightsailInstanceHardware</a>

---


### DataAwsccLightsailInstanceLocationOutputReference <a name="DataAwsccLightsailInstanceLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.NewDataAwsccLightsailInstanceLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLightsailInstanceLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocation">DataAwsccLightsailInstanceLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailInstanceLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceLocation">DataAwsccLightsailInstanceLocation</a>

---


### DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference <a name="DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.NewDataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.property.gbPerMonthAllocated">GbPerMonthAllocated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransfer">DataAwsccLightsailInstanceNetworkingMonthlyTransfer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GbPerMonthAllocated`<sup>Required</sup> <a name="GbPerMonthAllocated" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.property.gbPerMonthAllocated"></a>

```go
func GbPerMonthAllocated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailInstanceNetworkingMonthlyTransfer
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransfer">DataAwsccLightsailInstanceNetworkingMonthlyTransfer</a>

---


### DataAwsccLightsailInstanceNetworkingOutputReference <a name="DataAwsccLightsailInstanceNetworkingOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.NewDataAwsccLightsailInstanceNetworkingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLightsailInstanceNetworkingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.property.monthlyTransfer">MonthlyTransfer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference">DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList">DataAwsccLightsailInstanceNetworkingPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworking">DataAwsccLightsailInstanceNetworking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MonthlyTransfer`<sup>Required</sup> <a name="MonthlyTransfer" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.property.monthlyTransfer"></a>

```go
func MonthlyTransfer() DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference">DataAwsccLightsailInstanceNetworkingMonthlyTransferOutputReference</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.property.ports"></a>

```go
func Ports() DataAwsccLightsailInstanceNetworkingPortsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList">DataAwsccLightsailInstanceNetworkingPortsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailInstanceNetworking
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworking">DataAwsccLightsailInstanceNetworking</a>

---


### DataAwsccLightsailInstanceNetworkingPortsList <a name="DataAwsccLightsailInstanceNetworkingPortsList" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.NewDataAwsccLightsailInstanceNetworkingPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLightsailInstanceNetworkingPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.get"></a>

```go
func Get(index *f64) DataAwsccLightsailInstanceNetworkingPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLightsailInstanceNetworkingPortsOutputReference <a name="DataAwsccLightsailInstanceNetworkingPortsOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.NewDataAwsccLightsailInstanceNetworkingPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLightsailInstanceNetworkingPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.accessDirection">AccessDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.accessFrom">AccessFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.cidrListAliases">CidrListAliases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.cidrs">Cidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.ipv6Cidrs">Ipv6Cidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPorts">DataAwsccLightsailInstanceNetworkingPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessDirection`<sup>Required</sup> <a name="AccessDirection" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.accessDirection"></a>

```go
func AccessDirection() *string
```

- *Type:* *string

---

##### `AccessFrom`<sup>Required</sup> <a name="AccessFrom" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.accessFrom"></a>

```go
func AccessFrom() *string
```

- *Type:* *string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `CidrListAliases`<sup>Required</sup> <a name="CidrListAliases" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.cidrListAliases"></a>

```go
func CidrListAliases() *[]*string
```

- *Type:* *[]*string

---

##### `Cidrs`<sup>Required</sup> <a name="Cidrs" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.cidrs"></a>

```go
func Cidrs() *[]*string
```

- *Type:* *[]*string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `Ipv6Cidrs`<sup>Required</sup> <a name="Ipv6Cidrs" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.ipv6Cidrs"></a>

```go
func Ipv6Cidrs() *[]*string
```

- *Type:* *[]*string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailInstanceNetworkingPorts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceNetworkingPorts">DataAwsccLightsailInstanceNetworkingPorts</a>

---


### DataAwsccLightsailInstanceStateOutputReference <a name="DataAwsccLightsailInstanceStateOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.NewDataAwsccLightsailInstanceStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLightsailInstanceStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceState">DataAwsccLightsailInstanceState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceStateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailInstanceState
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceState">DataAwsccLightsailInstanceState</a>

---


### DataAwsccLightsailInstanceTagsList <a name="DataAwsccLightsailInstanceTagsList" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.NewDataAwsccLightsailInstanceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLightsailInstanceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccLightsailInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLightsailInstanceTagsOutputReference <a name="DataAwsccLightsailInstanceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailinstance"

dataawscclightsailinstance.NewDataAwsccLightsailInstanceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLightsailInstanceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTags">DataAwsccLightsailInstanceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailInstanceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailInstance.DataAwsccLightsailInstanceTags">DataAwsccLightsailInstanceTags</a>

---



