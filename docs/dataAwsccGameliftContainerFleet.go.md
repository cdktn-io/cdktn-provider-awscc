# `dataAwsccGameliftContainerFleet` Submodule <a name="`dataAwsccGameliftContainerFleet` Submodule" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGameliftContainerFleet <a name="DataAwsccGameliftContainerFleet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/gamelift_container_fleet awscc_gamelift_container_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.NewDataAwsccGameliftContainerFleet(scope Construct, id *string, config DataAwsccGameliftContainerFleetConfig) DataAwsccGameliftContainerFleet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig">DataAwsccGameliftContainerFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig">DataAwsccGameliftContainerFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGameliftContainerFleet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.DataAwsccGameliftContainerFleet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.DataAwsccGameliftContainerFleet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.DataAwsccGameliftContainerFleet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.DataAwsccGameliftContainerFleet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccGameliftContainerFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccGameliftContainerFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccGameliftContainerFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/gamelift_container_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGameliftContainerFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.billingType">BillingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.deploymentConfiguration">DeploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference">DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.deploymentDetails">DeploymentDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference">DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.fleetArn">FleetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.fleetId">FleetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.fleetRoleArn">FleetRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.gameServerContainerGroupDefinitionArn">GameServerContainerGroupDefinitionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.gameServerContainerGroupDefinitionName">GameServerContainerGroupDefinitionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.gameServerContainerGroupsPerInstance">GameServerContainerGroupsPerInstance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.gameSessionCreationLimitPolicy">GameSessionCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference">DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.instanceConnectionPortRange">InstanceConnectionPortRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference">DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.instanceInboundPermissions">InstanceInboundPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList">DataAwsccGameliftContainerFleetInstanceInboundPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.locations">Locations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList">DataAwsccGameliftContainerFleetLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference">DataAwsccGameliftContainerFleetLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.maximumGameServerContainerGroupsPerInstance">MaximumGameServerContainerGroupsPerInstance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.metricGroups">MetricGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.newGameSessionProtectionPolicy">NewGameSessionProtectionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.perInstanceContainerGroupDefinitionArn">PerInstanceContainerGroupDefinitionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.perInstanceContainerGroupDefinitionName">PerInstanceContainerGroupDefinitionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.playerGatewayMode">PlayerGatewayMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.scalingPolicies">ScalingPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList">DataAwsccGameliftContainerFleetScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList">DataAwsccGameliftContainerFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BillingType`<sup>Required</sup> <a name="BillingType" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.billingType"></a>

```go
func BillingType() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DeploymentConfiguration`<sup>Required</sup> <a name="DeploymentConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.deploymentConfiguration"></a>

```go
func DeploymentConfiguration() DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference">DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference</a>

---

##### `DeploymentDetails`<sup>Required</sup> <a name="DeploymentDetails" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.deploymentDetails"></a>

```go
func DeploymentDetails() DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference">DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FleetArn`<sup>Required</sup> <a name="FleetArn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.fleetArn"></a>

```go
func FleetArn() *string
```

- *Type:* *string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.fleetId"></a>

```go
func FleetId() *string
```

- *Type:* *string

---

##### `FleetRoleArn`<sup>Required</sup> <a name="FleetRoleArn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.fleetRoleArn"></a>

```go
func FleetRoleArn() *string
```

- *Type:* *string

---

##### `GameServerContainerGroupDefinitionArn`<sup>Required</sup> <a name="GameServerContainerGroupDefinitionArn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.gameServerContainerGroupDefinitionArn"></a>

```go
func GameServerContainerGroupDefinitionArn() *string
```

- *Type:* *string

---

##### `GameServerContainerGroupDefinitionName`<sup>Required</sup> <a name="GameServerContainerGroupDefinitionName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.gameServerContainerGroupDefinitionName"></a>

```go
func GameServerContainerGroupDefinitionName() *string
```

- *Type:* *string

---

##### `GameServerContainerGroupsPerInstance`<sup>Required</sup> <a name="GameServerContainerGroupsPerInstance" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.gameServerContainerGroupsPerInstance"></a>

```go
func GameServerContainerGroupsPerInstance() *f64
```

- *Type:* *f64

---

##### `GameSessionCreationLimitPolicy`<sup>Required</sup> <a name="GameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.gameSessionCreationLimitPolicy"></a>

```go
func GameSessionCreationLimitPolicy() DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference">DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference</a>

---

##### `InstanceConnectionPortRange`<sup>Required</sup> <a name="InstanceConnectionPortRange" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.instanceConnectionPortRange"></a>

```go
func InstanceConnectionPortRange() DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference">DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference</a>

---

##### `InstanceInboundPermissions`<sup>Required</sup> <a name="InstanceInboundPermissions" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.instanceInboundPermissions"></a>

```go
func InstanceInboundPermissions() DataAwsccGameliftContainerFleetInstanceInboundPermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList">DataAwsccGameliftContainerFleetInstanceInboundPermissionsList</a>

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.locations"></a>

```go
func Locations() DataAwsccGameliftContainerFleetLocationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList">DataAwsccGameliftContainerFleetLocationsList</a>

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.logConfiguration"></a>

```go
func LogConfiguration() DataAwsccGameliftContainerFleetLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference">DataAwsccGameliftContainerFleetLogConfigurationOutputReference</a>

---

##### `MaximumGameServerContainerGroupsPerInstance`<sup>Required</sup> <a name="MaximumGameServerContainerGroupsPerInstance" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.maximumGameServerContainerGroupsPerInstance"></a>

```go
func MaximumGameServerContainerGroupsPerInstance() *f64
```

- *Type:* *f64

---

##### `MetricGroups`<sup>Required</sup> <a name="MetricGroups" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.metricGroups"></a>

```go
func MetricGroups() *[]*string
```

- *Type:* *[]*string

---

##### `NewGameSessionProtectionPolicy`<sup>Required</sup> <a name="NewGameSessionProtectionPolicy" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.newGameSessionProtectionPolicy"></a>

```go
func NewGameSessionProtectionPolicy() *string
```

- *Type:* *string

---

##### `PerInstanceContainerGroupDefinitionArn`<sup>Required</sup> <a name="PerInstanceContainerGroupDefinitionArn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.perInstanceContainerGroupDefinitionArn"></a>

```go
func PerInstanceContainerGroupDefinitionArn() *string
```

- *Type:* *string

---

##### `PerInstanceContainerGroupDefinitionName`<sup>Required</sup> <a name="PerInstanceContainerGroupDefinitionName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.perInstanceContainerGroupDefinitionName"></a>

```go
func PerInstanceContainerGroupDefinitionName() *string
```

- *Type:* *string

---

##### `PlayerGatewayMode`<sup>Required</sup> <a name="PlayerGatewayMode" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.playerGatewayMode"></a>

```go
func PlayerGatewayMode() *string
```

- *Type:* *string

---

##### `ScalingPolicies`<sup>Required</sup> <a name="ScalingPolicies" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.scalingPolicies"></a>

```go
func ScalingPolicies() DataAwsccGameliftContainerFleetScalingPoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList">DataAwsccGameliftContainerFleetScalingPoliciesList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.tags"></a>

```go
func Tags() DataAwsccGameliftContainerFleetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList">DataAwsccGameliftContainerFleetTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGameliftContainerFleetConfig <a name="DataAwsccGameliftContainerFleetConfig" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

&dataawsccgameliftcontainerfleet.DataAwsccGameliftContainerFleetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/gamelift_container_fleet#id DataAwsccGameliftContainerFleet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGameliftContainerFleetDeploymentConfiguration <a name="DataAwsccGameliftContainerFleetDeploymentConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

&dataawsccgameliftcontainerfleet.DataAwsccGameliftContainerFleetDeploymentConfiguration {

}
```


### DataAwsccGameliftContainerFleetDeploymentDetails <a name="DataAwsccGameliftContainerFleetDeploymentDetails" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

&dataawsccgameliftcontainerfleet.DataAwsccGameliftContainerFleetDeploymentDetails {

}
```


### DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy <a name="DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

&dataawsccgameliftcontainerfleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy {

}
```


### DataAwsccGameliftContainerFleetInstanceConnectionPortRange <a name="DataAwsccGameliftContainerFleetInstanceConnectionPortRange" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

&dataawsccgameliftcontainerfleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRange {

}
```


### DataAwsccGameliftContainerFleetInstanceInboundPermissions <a name="DataAwsccGameliftContainerFleetInstanceInboundPermissions" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

&dataawsccgameliftcontainerfleet.DataAwsccGameliftContainerFleetInstanceInboundPermissions {

}
```


### DataAwsccGameliftContainerFleetLocations <a name="DataAwsccGameliftContainerFleetLocations" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

&dataawsccgameliftcontainerfleet.DataAwsccGameliftContainerFleetLocations {

}
```


### DataAwsccGameliftContainerFleetLocationsLocationCapacity <a name="DataAwsccGameliftContainerFleetLocationsLocationCapacity" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

&dataawsccgameliftcontainerfleet.DataAwsccGameliftContainerFleetLocationsLocationCapacity {

}
```


### DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration <a name="DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

&dataawsccgameliftcontainerfleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration {

}
```


### DataAwsccGameliftContainerFleetLogConfiguration <a name="DataAwsccGameliftContainerFleetLogConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

&dataawsccgameliftcontainerfleet.DataAwsccGameliftContainerFleetLogConfiguration {

}
```


### DataAwsccGameliftContainerFleetScalingPolicies <a name="DataAwsccGameliftContainerFleetScalingPolicies" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

&dataawsccgameliftcontainerfleet.DataAwsccGameliftContainerFleetScalingPolicies {

}
```


### DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration <a name="DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

&dataawsccgameliftcontainerfleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration {

}
```


### DataAwsccGameliftContainerFleetTags <a name="DataAwsccGameliftContainerFleetTags" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

&dataawsccgameliftcontainerfleet.DataAwsccGameliftContainerFleetTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference <a name="DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.NewDataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategy">ImpairmentStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentage">MinimumHealthyPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategy">ProtectionStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfiguration">DataAwsccGameliftContainerFleetDeploymentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImpairmentStrategy`<sup>Required</sup> <a name="ImpairmentStrategy" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategy"></a>

```go
func ImpairmentStrategy() *string
```

- *Type:* *string

---

##### `MinimumHealthyPercentage`<sup>Required</sup> <a name="MinimumHealthyPercentage" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentage"></a>

```go
func MinimumHealthyPercentage() *f64
```

- *Type:* *f64

---

##### `ProtectionStrategy`<sup>Required</sup> <a name="ProtectionStrategy" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategy"></a>

```go
func ProtectionStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerFleetDeploymentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfiguration">DataAwsccGameliftContainerFleetDeploymentConfiguration</a>

---


### DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference <a name="DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.NewDataAwsccGameliftContainerFleetDeploymentDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.property.latestDeploymentId">LatestDeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetails">DataAwsccGameliftContainerFleetDeploymentDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LatestDeploymentId`<sup>Required</sup> <a name="LatestDeploymentId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.property.latestDeploymentId"></a>

```go
func LatestDeploymentId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerFleetDeploymentDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetails">DataAwsccGameliftContainerFleetDeploymentDetails</a>

---


### DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference <a name="DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.NewDataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator">NewGameSessionsPerCreator</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutes">PolicyPeriodInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy">DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NewGameSessionsPerCreator`<sup>Required</sup> <a name="NewGameSessionsPerCreator" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator"></a>

```go
func NewGameSessionsPerCreator() *f64
```

- *Type:* *f64

---

##### `PolicyPeriodInMinutes`<sup>Required</sup> <a name="PolicyPeriodInMinutes" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutes"></a>

```go
func PolicyPeriodInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy">DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy</a>

---


### DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference <a name="DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.NewDataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRange">DataAwsccGameliftContainerFleetInstanceConnectionPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerFleetInstanceConnectionPortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRange">DataAwsccGameliftContainerFleetInstanceConnectionPortRange</a>

---


### DataAwsccGameliftContainerFleetInstanceInboundPermissionsList <a name="DataAwsccGameliftContainerFleetInstanceInboundPermissionsList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.NewDataAwsccGameliftContainerFleetInstanceInboundPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftContainerFleetInstanceInboundPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference <a name="DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.NewDataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRange">IpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissions">DataAwsccGameliftContainerFleetInstanceInboundPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRange"></a>

```go
func IpRange() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerFleetInstanceInboundPermissions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissions">DataAwsccGameliftContainerFleetInstanceInboundPermissions</a>

---


### DataAwsccGameliftContainerFleetLocationsList <a name="DataAwsccGameliftContainerFleetLocationsList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.NewDataAwsccGameliftContainerFleetLocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftContainerFleetLocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftContainerFleetLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference <a name="DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.NewDataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes">ScaleInAfterInactivityMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy">ZeroCapacityStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScaleInAfterInactivityMinutes`<sup>Required</sup> <a name="ScaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes"></a>

```go
func ScaleInAfterInactivityMinutes() *f64
```

- *Type:* *f64

---

##### `ZeroCapacityStrategy`<sup>Required</sup> <a name="ZeroCapacityStrategy" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy"></a>

```go
func ZeroCapacityStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---


### DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference <a name="DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.NewDataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances">DesiredEc2Instances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration">ManagedCapacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSize">MaxSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSize">MinSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacity">DataAwsccGameliftContainerFleetLocationsLocationCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DesiredEc2Instances`<sup>Required</sup> <a name="DesiredEc2Instances" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances"></a>

```go
func DesiredEc2Instances() *f64
```

- *Type:* *f64

---

##### `ManagedCapacityConfiguration`<sup>Required</sup> <a name="ManagedCapacityConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration"></a>

```go
func ManagedCapacityConfiguration() DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a>

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSize"></a>

```go
func MaxSize() *f64
```

- *Type:* *f64

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSize"></a>

```go
func MinSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerFleetLocationsLocationCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacity">DataAwsccGameliftContainerFleetLocationsLocationCapacity</a>

---


### DataAwsccGameliftContainerFleetLocationsOutputReference <a name="DataAwsccGameliftContainerFleetLocationsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.NewDataAwsccGameliftContainerFleetLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftContainerFleetLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.locationCapacity">LocationCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference">DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.playerGatewayStatus">PlayerGatewayStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.stoppedActions">StoppedActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocations">DataAwsccGameliftContainerFleetLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `LocationCapacity`<sup>Required</sup> <a name="LocationCapacity" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.locationCapacity"></a>

```go
func LocationCapacity() DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference">DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference</a>

---

##### `PlayerGatewayStatus`<sup>Required</sup> <a name="PlayerGatewayStatus" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.playerGatewayStatus"></a>

```go
func PlayerGatewayStatus() *string
```

- *Type:* *string

---

##### `StoppedActions`<sup>Required</sup> <a name="StoppedActions" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.stoppedActions"></a>

```go
func StoppedActions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerFleetLocations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocations">DataAwsccGameliftContainerFleetLocations</a>

---


### DataAwsccGameliftContainerFleetLogConfigurationOutputReference <a name="DataAwsccGameliftContainerFleetLogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.NewDataAwsccGameliftContainerFleetLogConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftContainerFleetLogConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.logDestination">LogDestination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfiguration">DataAwsccGameliftContainerFleetLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogDestination`<sup>Required</sup> <a name="LogDestination" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.logDestination"></a>

```go
func LogDestination() *string
```

- *Type:* *string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.logGroupArn"></a>

```go
func LogGroupArn() *string
```

- *Type:* *string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerFleetLogConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfiguration">DataAwsccGameliftContainerFleetLogConfiguration</a>

---


### DataAwsccGameliftContainerFleetScalingPoliciesList <a name="DataAwsccGameliftContainerFleetScalingPoliciesList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.NewDataAwsccGameliftContainerFleetScalingPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftContainerFleetScalingPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftContainerFleetScalingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftContainerFleetScalingPoliciesOutputReference <a name="DataAwsccGameliftContainerFleetScalingPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.NewDataAwsccGameliftContainerFleetScalingPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftContainerFleetScalingPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustment">ScalingAdjustment</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentType">ScalingAdjustmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.targetConfiguration">TargetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference">DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPolicies">DataAwsccGameliftContainerFleetScalingPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperator"></a>

```go
func ComparisonOperator() *string
```

- *Type:* *string

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriods"></a>

```go
func EvaluationPeriods() *f64
```

- *Type:* *f64

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `ScalingAdjustment`<sup>Required</sup> <a name="ScalingAdjustment" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustment"></a>

```go
func ScalingAdjustment() *f64
```

- *Type:* *f64

---

##### `ScalingAdjustmentType`<sup>Required</sup> <a name="ScalingAdjustmentType" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentType"></a>

```go
func ScalingAdjustmentType() *string
```

- *Type:* *string

---

##### `TargetConfiguration`<sup>Required</sup> <a name="TargetConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.targetConfiguration"></a>

```go
func TargetConfiguration() DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference">DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference</a>

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerFleetScalingPolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPolicies">DataAwsccGameliftContainerFleetScalingPolicies</a>

---


### DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference <a name="DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.NewDataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue">TargetValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration">DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue"></a>

```go
func TargetValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration">DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration</a>

---


### DataAwsccGameliftContainerFleetTagsList <a name="DataAwsccGameliftContainerFleetTagsList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.NewDataAwsccGameliftContainerFleetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftContainerFleetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftContainerFleetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftContainerFleetTagsOutputReference <a name="DataAwsccGameliftContainerFleetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainerfleet"

dataawsccgameliftcontainerfleet.NewDataAwsccGameliftContainerFleetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftContainerFleetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTags">DataAwsccGameliftContainerFleetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerFleetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTags">DataAwsccGameliftContainerFleetTags</a>

---



