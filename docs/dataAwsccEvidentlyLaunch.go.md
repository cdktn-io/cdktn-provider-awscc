# `dataAwsccEvidentlyLaunch` Submodule <a name="`dataAwsccEvidentlyLaunch` Submodule" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEvidentlyLaunch <a name="DataAwsccEvidentlyLaunch" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/evidently_launch awscc_evidently_launch}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.NewDataAwsccEvidentlyLaunch(scope Construct, id *string, config DataAwsccEvidentlyLaunchConfig) DataAwsccEvidentlyLaunch
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig">DataAwsccEvidentlyLaunchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig">DataAwsccEvidentlyLaunchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEvidentlyLaunch resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.DataAwsccEvidentlyLaunch_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.DataAwsccEvidentlyLaunch_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.DataAwsccEvidentlyLaunch_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.DataAwsccEvidentlyLaunch_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEvidentlyLaunch resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEvidentlyLaunch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEvidentlyLaunch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/evidently_launch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEvidentlyLaunch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.executionStatus">ExecutionStatus</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference">DataAwsccEvidentlyLaunchExecutionStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.groups">Groups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList">DataAwsccEvidentlyLaunchGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.metricMonitors">MetricMonitors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList">DataAwsccEvidentlyLaunchMetricMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.randomizationSalt">RandomizationSalt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.scheduledSplitsConfig">ScheduledSplitsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList">DataAwsccEvidentlyLaunchScheduledSplitsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList">DataAwsccEvidentlyLaunchTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExecutionStatus`<sup>Required</sup> <a name="ExecutionStatus" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.executionStatus"></a>

```go
func ExecutionStatus() DataAwsccEvidentlyLaunchExecutionStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference">DataAwsccEvidentlyLaunchExecutionStatusOutputReference</a>

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.groups"></a>

```go
func Groups() DataAwsccEvidentlyLaunchGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList">DataAwsccEvidentlyLaunchGroupsList</a>

---

##### `MetricMonitors`<sup>Required</sup> <a name="MetricMonitors" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.metricMonitors"></a>

```go
func MetricMonitors() DataAwsccEvidentlyLaunchMetricMonitorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList">DataAwsccEvidentlyLaunchMetricMonitorsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RandomizationSalt`<sup>Required</sup> <a name="RandomizationSalt" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.randomizationSalt"></a>

```go
func RandomizationSalt() *string
```

- *Type:* *string

---

##### `ScheduledSplitsConfig`<sup>Required</sup> <a name="ScheduledSplitsConfig" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.scheduledSplitsConfig"></a>

```go
func ScheduledSplitsConfig() DataAwsccEvidentlyLaunchScheduledSplitsConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList">DataAwsccEvidentlyLaunchScheduledSplitsConfigList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.tags"></a>

```go
func Tags() DataAwsccEvidentlyLaunchTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList">DataAwsccEvidentlyLaunchTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEvidentlyLaunchConfig <a name="DataAwsccEvidentlyLaunchConfig" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

&dataawsccevidentlylaunch.DataAwsccEvidentlyLaunchConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/evidently_launch#id DataAwsccEvidentlyLaunch#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEvidentlyLaunchExecutionStatus <a name="DataAwsccEvidentlyLaunchExecutionStatus" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

&dataawsccevidentlylaunch.DataAwsccEvidentlyLaunchExecutionStatus {

}
```


### DataAwsccEvidentlyLaunchGroups <a name="DataAwsccEvidentlyLaunchGroups" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

&dataawsccevidentlylaunch.DataAwsccEvidentlyLaunchGroups {

}
```


### DataAwsccEvidentlyLaunchMetricMonitors <a name="DataAwsccEvidentlyLaunchMetricMonitors" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

&dataawsccevidentlylaunch.DataAwsccEvidentlyLaunchMetricMonitors {

}
```


### DataAwsccEvidentlyLaunchScheduledSplitsConfig <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfig" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

&dataawsccevidentlylaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfig {

}
```


### DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

&dataawsccevidentlylaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights {

}
```


### DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

&dataawsccevidentlylaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides {

}
```


### DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

&dataawsccevidentlylaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights {

}
```


### DataAwsccEvidentlyLaunchTags <a name="DataAwsccEvidentlyLaunchTags" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

&dataawsccevidentlylaunch.DataAwsccEvidentlyLaunchTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEvidentlyLaunchExecutionStatusOutputReference <a name="DataAwsccEvidentlyLaunchExecutionStatusOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.NewDataAwsccEvidentlyLaunchExecutionStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEvidentlyLaunchExecutionStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatus">DataAwsccEvidentlyLaunchExecutionStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEvidentlyLaunchExecutionStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatus">DataAwsccEvidentlyLaunchExecutionStatus</a>

---


### DataAwsccEvidentlyLaunchGroupsList <a name="DataAwsccEvidentlyLaunchGroupsList" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.NewDataAwsccEvidentlyLaunchGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEvidentlyLaunchGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.get"></a>

```go
func Get(index *f64) DataAwsccEvidentlyLaunchGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEvidentlyLaunchGroupsOutputReference <a name="DataAwsccEvidentlyLaunchGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.NewDataAwsccEvidentlyLaunchGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEvidentlyLaunchGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.feature">Feature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.variation">Variation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroups">DataAwsccEvidentlyLaunchGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.feature"></a>

```go
func Feature() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.variation"></a>

```go
func Variation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEvidentlyLaunchGroups
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroups">DataAwsccEvidentlyLaunchGroups</a>

---


### DataAwsccEvidentlyLaunchMetricMonitorsList <a name="DataAwsccEvidentlyLaunchMetricMonitorsList" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.NewDataAwsccEvidentlyLaunchMetricMonitorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEvidentlyLaunchMetricMonitorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.get"></a>

```go
func Get(index *f64) DataAwsccEvidentlyLaunchMetricMonitorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEvidentlyLaunchMetricMonitorsOutputReference <a name="DataAwsccEvidentlyLaunchMetricMonitorsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.NewDataAwsccEvidentlyLaunchMetricMonitorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEvidentlyLaunchMetricMonitorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.entityIdKey">EntityIdKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.eventPattern">EventPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.unitLabel">UnitLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.valueKey">ValueKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitors">DataAwsccEvidentlyLaunchMetricMonitors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityIdKey`<sup>Required</sup> <a name="EntityIdKey" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.entityIdKey"></a>

```go
func EntityIdKey() *string
```

- *Type:* *string

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.eventPattern"></a>

```go
func EventPattern() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `UnitLabel`<sup>Required</sup> <a name="UnitLabel" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.unitLabel"></a>

```go
func UnitLabel() *string
```

- *Type:* *string

---

##### `ValueKey`<sup>Required</sup> <a name="ValueKey" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.valueKey"></a>

```go
func ValueKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEvidentlyLaunchMetricMonitors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitors">DataAwsccEvidentlyLaunchMetricMonitors</a>

---


### DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.NewDataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.get"></a>

```go
func Get(index *f64) DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.NewDataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.splitWeight">SplitWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights">DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `SplitWeight`<sup>Required</sup> <a name="SplitWeight" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.splitWeight"></a>

```go
func SplitWeight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights">DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights</a>

---


### DataAwsccEvidentlyLaunchScheduledSplitsConfigList <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigList" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.NewDataAwsccEvidentlyLaunchScheduledSplitsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEvidentlyLaunchScheduledSplitsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.get"></a>

```go
func Get(index *f64) DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.NewDataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.groupWeights">GroupWeights</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList">DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.segmentOverrides">SegmentOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList">DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfig">DataAwsccEvidentlyLaunchScheduledSplitsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupWeights`<sup>Required</sup> <a name="GroupWeights" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.groupWeights"></a>

```go
func GroupWeights() DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList">DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList</a>

---

##### `SegmentOverrides`<sup>Required</sup> <a name="SegmentOverrides" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.segmentOverrides"></a>

```go
func SegmentOverrides() DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList">DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList</a>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEvidentlyLaunchScheduledSplitsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfig">DataAwsccEvidentlyLaunchScheduledSplitsConfig</a>

---


### DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.NewDataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.get"></a>

```go
func Get(index *f64) DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.NewDataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.evaluationOrder">EvaluationOrder</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.segment">Segment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.weights">Weights</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList">DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides">DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EvaluationOrder`<sup>Required</sup> <a name="EvaluationOrder" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.evaluationOrder"></a>

```go
func EvaluationOrder() *f64
```

- *Type:* *f64

---

##### `Segment`<sup>Required</sup> <a name="Segment" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.segment"></a>

```go
func Segment() *string
```

- *Type:* *string

---

##### `Weights`<sup>Required</sup> <a name="Weights" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.weights"></a>

```go
func Weights() DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList">DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides">DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>

---


### DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.NewDataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.get"></a>

```go
func Get(index *f64) DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.NewDataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.splitWeight">SplitWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `SplitWeight`<sup>Required</sup> <a name="SplitWeight" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.splitWeight"></a>

```go
func SplitWeight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>

---


### DataAwsccEvidentlyLaunchTagsList <a name="DataAwsccEvidentlyLaunchTagsList" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.NewDataAwsccEvidentlyLaunchTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEvidentlyLaunchTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEvidentlyLaunchTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEvidentlyLaunchTagsOutputReference <a name="DataAwsccEvidentlyLaunchTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccevidentlylaunch"

dataawsccevidentlylaunch.NewDataAwsccEvidentlyLaunchTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEvidentlyLaunchTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTags">DataAwsccEvidentlyLaunchTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEvidentlyLaunchTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTags">DataAwsccEvidentlyLaunchTags</a>

---



