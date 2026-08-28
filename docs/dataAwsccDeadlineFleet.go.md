# `dataAwsccDeadlineFleet` Submodule <a name="`dataAwsccDeadlineFleet` Submodule" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDeadlineFleet <a name="DataAwsccDeadlineFleet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/deadline_fleet awscc_deadline_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleet(scope Construct, id *string, config DataAwsccDeadlineFleetConfig) DataAwsccDeadlineFleet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig">DataAwsccDeadlineFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig">DataAwsccDeadlineFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDeadlineFleet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.DataAwsccDeadlineFleet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.DataAwsccDeadlineFleet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.DataAwsccDeadlineFleet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.DataAwsccDeadlineFleet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDeadlineFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDeadlineFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDeadlineFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/deadline_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDeadlineFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference">DataAwsccDeadlineFleetCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.farmId">FarmId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.fleetId">FleetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.hostConfiguration">HostConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference">DataAwsccDeadlineFleetHostConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.maxWorkerCount">MaxWorkerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.minWorkerCount">MinWorkerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList">DataAwsccDeadlineFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.workerCount">WorkerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.capabilities"></a>

```go
func Capabilities() DataAwsccDeadlineFleetCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference">DataAwsccDeadlineFleetCapabilitiesOutputReference</a>

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.configuration"></a>

```go
func Configuration() DataAwsccDeadlineFleetConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FarmId`<sup>Required</sup> <a name="FarmId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.farmId"></a>

```go
func FarmId() *string
```

- *Type:* *string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.fleetId"></a>

```go
func FleetId() *string
```

- *Type:* *string

---

##### `HostConfiguration`<sup>Required</sup> <a name="HostConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.hostConfiguration"></a>

```go
func HostConfiguration() DataAwsccDeadlineFleetHostConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference">DataAwsccDeadlineFleetHostConfigurationOutputReference</a>

---

##### `MaxWorkerCount`<sup>Required</sup> <a name="MaxWorkerCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.maxWorkerCount"></a>

```go
func MaxWorkerCount() *f64
```

- *Type:* *f64

---

##### `MinWorkerCount`<sup>Required</sup> <a name="MinWorkerCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.minWorkerCount"></a>

```go
func MinWorkerCount() *f64
```

- *Type:* *f64

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.tags"></a>

```go
func Tags() DataAwsccDeadlineFleetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList">DataAwsccDeadlineFleetTagsList</a>

---

##### `WorkerCount`<sup>Required</sup> <a name="WorkerCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.workerCount"></a>

```go
func WorkerCount() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDeadlineFleetCapabilities <a name="DataAwsccDeadlineFleetCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetCapabilities {

}
```


### DataAwsccDeadlineFleetCapabilitiesAmounts <a name="DataAwsccDeadlineFleetCapabilitiesAmounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmounts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetCapabilitiesAmounts {

}
```


### DataAwsccDeadlineFleetCapabilitiesAttributes <a name="DataAwsccDeadlineFleetCapabilitiesAttributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetCapabilitiesAttributes {

}
```


### DataAwsccDeadlineFleetConfig <a name="DataAwsccDeadlineFleetConfig" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/deadline_fleet#id DataAwsccDeadlineFleet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDeadlineFleetConfiguration <a name="DataAwsccDeadlineFleetConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfiguration {

}
```


### DataAwsccDeadlineFleetConfigurationCustomerManaged <a name="DataAwsccDeadlineFleetConfigurationCustomerManaged" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManaged.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationCustomerManaged {

}
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration {

}
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities {

}
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount {

}
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB {

}
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts {

}
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes {

}
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB {

}
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount {

}
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2 <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2 {

}
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration {

}
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities {

}
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities {

}
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount {

}
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections {

}
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts {

}
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes {

}
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB {

}
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume {

}
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount {

}
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions {

}
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration {

}
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration {

}
```


### DataAwsccDeadlineFleetHostConfiguration <a name="DataAwsccDeadlineFleetHostConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetHostConfiguration {

}
```


### DataAwsccDeadlineFleetTags <a name="DataAwsccDeadlineFleetTags" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

&dataawsccdeadlinefleet.DataAwsccDeadlineFleetTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDeadlineFleetCapabilitiesAmountsList <a name="DataAwsccDeadlineFleetCapabilitiesAmountsList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetCapabilitiesAmountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDeadlineFleetCapabilitiesAmountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.get"></a>

```go
func Get(index *f64) DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference <a name="DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetCapabilitiesAmountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmounts">DataAwsccDeadlineFleetCapabilitiesAmounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetCapabilitiesAmounts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmounts">DataAwsccDeadlineFleetCapabilitiesAmounts</a>

---


### DataAwsccDeadlineFleetCapabilitiesAttributesList <a name="DataAwsccDeadlineFleetCapabilitiesAttributesList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetCapabilitiesAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDeadlineFleetCapabilitiesAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.get"></a>

```go
func Get(index *f64) DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference <a name="DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetCapabilitiesAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributes">DataAwsccDeadlineFleetCapabilitiesAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetCapabilitiesAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributes">DataAwsccDeadlineFleetCapabilitiesAttributes</a>

---


### DataAwsccDeadlineFleetCapabilitiesOutputReference <a name="DataAwsccDeadlineFleetCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.amounts">Amounts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList">DataAwsccDeadlineFleetCapabilitiesAmountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList">DataAwsccDeadlineFleetCapabilitiesAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilities">DataAwsccDeadlineFleetCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Amounts`<sup>Required</sup> <a name="Amounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.amounts"></a>

```go
func Amounts() DataAwsccDeadlineFleetCapabilitiesAmountsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList">DataAwsccDeadlineFleetCapabilitiesAmountsList</a>

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.attributes"></a>

```go
func Attributes() DataAwsccDeadlineFleetCapabilitiesAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList">DataAwsccDeadlineFleetCapabilitiesAttributesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilities">DataAwsccDeadlineFleetCapabilities</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute">ScaleOutWorkersPerMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.standbyWorkerCount">StandbyWorkerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds">WorkerIdleDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScaleOutWorkersPerMinute`<sup>Required</sup> <a name="ScaleOutWorkersPerMinute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute"></a>

```go
func ScaleOutWorkersPerMinute() *f64
```

- *Type:* *f64

---

##### `StandbyWorkerCount`<sup>Required</sup> <a name="StandbyWorkerCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.standbyWorkerCount"></a>

```go
func StandbyWorkerCount() *f64
```

- *Type:* *f64

---

##### `WorkerIdleDurationSeconds`<sup>Required</sup> <a name="WorkerIdleDurationSeconds" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds"></a>

```go
func WorkerIdleDurationSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.autoScalingConfiguration">AutoScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.storageProfileId">StorageProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.tagPropagationMode">TagPropagationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.workerCapabilities">WorkerCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManaged">DataAwsccDeadlineFleetConfigurationCustomerManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoScalingConfiguration`<sup>Required</sup> <a name="AutoScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.autoScalingConfiguration"></a>

```go
func AutoScalingConfiguration() DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `StorageProfileId`<sup>Required</sup> <a name="StorageProfileId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.storageProfileId"></a>

```go
func StorageProfileId() *string
```

- *Type:* *string

---

##### `TagPropagationMode`<sup>Required</sup> <a name="TagPropagationMode" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.tagPropagationMode"></a>

```go
func TagPropagationMode() *string
```

- *Type:* *string

---

##### `WorkerCapabilities`<sup>Required</sup> <a name="WorkerCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.workerCapabilities"></a>

```go
func WorkerCapabilities() DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationCustomerManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManaged">DataAwsccDeadlineFleetConfigurationCustomerManaged</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.get"></a>

```go
func Get(index *f64) DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.get"></a>

```go
func Get(index *f64) DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTotalMemoryMiB">AcceleratorTotalMemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.cpuArchitectureType">CpuArchitectureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAmounts">CustomAmounts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAttributes">CustomAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.memoryMiB">MemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.osFamily">OsFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.vCpuCount">VCpuCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference</a>

---

##### `AcceleratorTotalMemoryMiB`<sup>Required</sup> <a name="AcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTotalMemoryMiB"></a>

```go
func AcceleratorTotalMemoryMiB() DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference</a>

---

##### `AcceleratorTypes`<sup>Required</sup> <a name="AcceleratorTypes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTypes"></a>

```go
func AcceleratorTypes() *[]*string
```

- *Type:* *[]*string

---

##### `CpuArchitectureType`<sup>Required</sup> <a name="CpuArchitectureType" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.cpuArchitectureType"></a>

```go
func CpuArchitectureType() *string
```

- *Type:* *string

---

##### `CustomAmounts`<sup>Required</sup> <a name="CustomAmounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAmounts"></a>

```go
func CustomAmounts() DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList</a>

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAttributes"></a>

```go
func CustomAttributes() DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList</a>

---

##### `MemoryMiB`<sup>Required</sup> <a name="MemoryMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.memoryMiB"></a>

```go
func MemoryMiB() DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference</a>

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.osFamily"></a>

```go
func OsFamily() *string
```

- *Type:* *string

---

##### `VCpuCount`<sup>Required</sup> <a name="VCpuCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.vCpuCount"></a>

```go
func VCpuCount() DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a>

---


### DataAwsccDeadlineFleetConfigurationOutputReference <a name="DataAwsccDeadlineFleetConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.customerManaged">CustomerManaged</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.serviceManagedEc2">ServiceManagedEc2</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfiguration">DataAwsccDeadlineFleetConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerManaged`<sup>Required</sup> <a name="CustomerManaged" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.customerManaged"></a>

```go
func CustomerManaged() DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference</a>

---

##### `ServiceManagedEc2`<sup>Required</sup> <a name="ServiceManagedEc2" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.serviceManagedEc2"></a>

```go
func ServiceManagedEc2() DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfiguration">DataAwsccDeadlineFleetConfiguration</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute">ScaleOutWorkersPerMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.standbyWorkerCount">StandbyWorkerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds">WorkerIdleDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScaleOutWorkersPerMinute`<sup>Required</sup> <a name="ScaleOutWorkersPerMinute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute"></a>

```go
func ScaleOutWorkersPerMinute() *f64
```

- *Type:* *f64

---

##### `StandbyWorkerCount`<sup>Required</sup> <a name="StandbyWorkerCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.standbyWorkerCount"></a>

```go
func StandbyWorkerCount() *f64
```

- *Type:* *f64

---

##### `WorkerIdleDurationSeconds`<sup>Required</sup> <a name="WorkerIdleDurationSeconds" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds"></a>

```go
func WorkerIdleDurationSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.count">Count</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.selections">Selections</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.count"></a>

```go
func Count() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference</a>

---

##### `Selections`<sup>Required</sup> <a name="Selections" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.selections"></a>

```go
func Selections() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.get"></a>

```go
func Get(index *f64) DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.get"></a>

```go
func Get(index *f64) DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.get"></a>

```go
func Get(index *f64) DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.acceleratorCapabilities">AcceleratorCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.cpuArchitectureType">CpuArchitectureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAmounts">CustomAmounts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAttributes">CustomAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.memoryMiB">MemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.osFamily">OsFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.rootEbsVolume">RootEbsVolume</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.vCpuCount">VCpuCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCapabilities`<sup>Required</sup> <a name="AcceleratorCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.acceleratorCapabilities"></a>

```go
func AcceleratorCapabilities() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference</a>

---

##### `AllowedInstanceTypes`<sup>Required</sup> <a name="AllowedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.allowedInstanceTypes"></a>

```go
func AllowedInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `CpuArchitectureType`<sup>Required</sup> <a name="CpuArchitectureType" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.cpuArchitectureType"></a>

```go
func CpuArchitectureType() *string
```

- *Type:* *string

---

##### `CustomAmounts`<sup>Required</sup> <a name="CustomAmounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAmounts"></a>

```go
func CustomAmounts() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList</a>

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAttributes"></a>

```go
func CustomAttributes() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList</a>

---

##### `ExcludedInstanceTypes`<sup>Required</sup> <a name="ExcludedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.excludedInstanceTypes"></a>

```go
func ExcludedInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `MemoryMiB`<sup>Required</sup> <a name="MemoryMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.memoryMiB"></a>

```go
func MemoryMiB() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference</a>

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.osFamily"></a>

```go
func OsFamily() *string
```

- *Type:* *string

---

##### `RootEbsVolume`<sup>Required</sup> <a name="RootEbsVolume" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.rootEbsVolume"></a>

```go
func RootEbsVolume() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference</a>

---

##### `VCpuCount`<sup>Required</sup> <a name="VCpuCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.vCpuCount"></a>

```go
func VCpuCount() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.sizeGiB">SizeGiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.throughputMiB">ThroughputMiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `SizeGiB`<sup>Required</sup> <a name="SizeGiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.sizeGiB"></a>

```go
func SizeGiB() *f64
```

- *Type:* *f64

---

##### `ThroughputMiB`<sup>Required</sup> <a name="ThroughputMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.throughputMiB"></a>

```go
func ThroughputMiB() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.autoScalingConfiguration">AutoScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceCapabilities">InstanceCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceMarketOptions">InstanceMarketOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.persistentVolumeConfiguration">PersistentVolumeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.storageProfileId">StorageProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2">DataAwsccDeadlineFleetConfigurationServiceManagedEc2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoScalingConfiguration`<sup>Required</sup> <a name="AutoScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.autoScalingConfiguration"></a>

```go
func AutoScalingConfiguration() DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference</a>

---

##### `InstanceCapabilities`<sup>Required</sup> <a name="InstanceCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceCapabilities"></a>

```go
func InstanceCapabilities() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference</a>

---

##### `InstanceMarketOptions`<sup>Required</sup> <a name="InstanceMarketOptions" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceMarketOptions"></a>

```go
func InstanceMarketOptions() DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference</a>

---

##### `PersistentVolumeConfiguration`<sup>Required</sup> <a name="PersistentVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.persistentVolumeConfiguration"></a>

```go
func PersistentVolumeConfiguration() DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference</a>

---

##### `StorageProfileId`<sup>Required</sup> <a name="StorageProfileId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.storageProfileId"></a>

```go
func StorageProfileId() *string
```

- *Type:* *string

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.vpcConfiguration"></a>

```go
func VpcConfiguration() DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationServiceManagedEc2
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2">DataAwsccDeadlineFleetConfigurationServiceManagedEc2</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.lastUsedTtlHours">LastUsedTtlHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.sizeGiB">SizeGiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.throughputMiB">ThroughputMiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `LastUsedTtlHours`<sup>Required</sup> <a name="LastUsedTtlHours" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.lastUsedTtlHours"></a>

```go
func LastUsedTtlHours() *f64
```

- *Type:* *f64

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `SizeGiB`<sup>Required</sup> <a name="SizeGiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.sizeGiB"></a>

```go
func SizeGiB() *f64
```

- *Type:* *f64

---

##### `ThroughputMiB`<sup>Required</sup> <a name="ThroughputMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.throughputMiB"></a>

```go
func ThroughputMiB() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.resourceConfigurationArns">ResourceConfigurationArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceConfigurationArns`<sup>Required</sup> <a name="ResourceConfigurationArns" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.resourceConfigurationArns"></a>

```go
func ResourceConfigurationArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a>

---


### DataAwsccDeadlineFleetHostConfigurationOutputReference <a name="DataAwsccDeadlineFleetHostConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetHostConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDeadlineFleetHostConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.scriptBody">ScriptBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.scriptTimeoutSeconds">ScriptTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfiguration">DataAwsccDeadlineFleetHostConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScriptBody`<sup>Required</sup> <a name="ScriptBody" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.scriptBody"></a>

```go
func ScriptBody() *string
```

- *Type:* *string

---

##### `ScriptTimeoutSeconds`<sup>Required</sup> <a name="ScriptTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.scriptTimeoutSeconds"></a>

```go
func ScriptTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetHostConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfiguration">DataAwsccDeadlineFleetHostConfiguration</a>

---


### DataAwsccDeadlineFleetTagsList <a name="DataAwsccDeadlineFleetTagsList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDeadlineFleetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDeadlineFleetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDeadlineFleetTagsOutputReference <a name="DataAwsccDeadlineFleetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdeadlinefleet"

dataawsccdeadlinefleet.NewDataAwsccDeadlineFleetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDeadlineFleetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTags">DataAwsccDeadlineFleetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDeadlineFleetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTags">DataAwsccDeadlineFleetTags</a>

---



