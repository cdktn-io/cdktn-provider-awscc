# `dataAwsccEc2InstanceEventWindow` Submodule <a name="`dataAwsccEc2InstanceEventWindow` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2InstanceEventWindow <a name="DataAwsccEc2InstanceEventWindow" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/ec2_instance_event_window awscc_ec2_instance_event_window}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceeventwindow"

dataawsccec2instanceeventwindow.NewDataAwsccEc2InstanceEventWindow(scope Construct, id *string, config DataAwsccEc2InstanceEventWindowConfig) DataAwsccEc2InstanceEventWindow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig">DataAwsccEc2InstanceEventWindowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig">DataAwsccEc2InstanceEventWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2InstanceEventWindow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceeventwindow"

dataawsccec2instanceeventwindow.DataAwsccEc2InstanceEventWindow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceeventwindow"

dataawsccec2instanceeventwindow.DataAwsccEc2InstanceEventWindow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceeventwindow"

dataawsccec2instanceeventwindow.DataAwsccEc2InstanceEventWindow_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceeventwindow"

dataawsccec2instanceeventwindow.DataAwsccEc2InstanceEventWindow_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEc2InstanceEventWindow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEc2InstanceEventWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEc2InstanceEventWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/ec2_instance_event_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2InstanceEventWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.cronExpression">CronExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.instanceEventWindowId">InstanceEventWindowId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList">DataAwsccEc2InstanceEventWindowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.timeRanges">TimeRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList">DataAwsccEc2InstanceEventWindowTimeRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.cronExpression"></a>

```go
func CronExpression() *string
```

- *Type:* *string

---

##### `InstanceEventWindowId`<sup>Required</sup> <a name="InstanceEventWindowId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.instanceEventWindowId"></a>

```go
func InstanceEventWindowId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.tags"></a>

```go
func Tags() DataAwsccEc2InstanceEventWindowTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList">DataAwsccEc2InstanceEventWindowTagsList</a>

---

##### `TimeRanges`<sup>Required</sup> <a name="TimeRanges" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.timeRanges"></a>

```go
func TimeRanges() DataAwsccEc2InstanceEventWindowTimeRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList">DataAwsccEc2InstanceEventWindowTimeRangesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2InstanceEventWindowConfig <a name="DataAwsccEc2InstanceEventWindowConfig" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceeventwindow"

&dataawsccec2instanceeventwindow.DataAwsccEc2InstanceEventWindowConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/ec2_instance_event_window#id DataAwsccEc2InstanceEventWindow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2InstanceEventWindowTags <a name="DataAwsccEc2InstanceEventWindowTags" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceeventwindow"

&dataawsccec2instanceeventwindow.DataAwsccEc2InstanceEventWindowTags {

}
```


### DataAwsccEc2InstanceEventWindowTimeRanges <a name="DataAwsccEc2InstanceEventWindowTimeRanges" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRanges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceeventwindow"

&dataawsccec2instanceeventwindow.DataAwsccEc2InstanceEventWindowTimeRanges {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2InstanceEventWindowTagsList <a name="DataAwsccEc2InstanceEventWindowTagsList" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceeventwindow"

dataawsccec2instanceeventwindow.NewDataAwsccEc2InstanceEventWindowTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2InstanceEventWindowTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2InstanceEventWindowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2InstanceEventWindowTagsOutputReference <a name="DataAwsccEc2InstanceEventWindowTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceeventwindow"

dataawsccec2instanceeventwindow.NewDataAwsccEc2InstanceEventWindowTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2InstanceEventWindowTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTags">DataAwsccEc2InstanceEventWindowTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceEventWindowTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTags">DataAwsccEc2InstanceEventWindowTags</a>

---


### DataAwsccEc2InstanceEventWindowTimeRangesList <a name="DataAwsccEc2InstanceEventWindowTimeRangesList" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceeventwindow"

dataawsccec2instanceeventwindow.NewDataAwsccEc2InstanceEventWindowTimeRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2InstanceEventWindowTimeRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.get"></a>

```go
func Get(index *f64) DataAwsccEc2InstanceEventWindowTimeRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2InstanceEventWindowTimeRangesOutputReference <a name="DataAwsccEc2InstanceEventWindowTimeRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceeventwindow"

dataawsccec2instanceeventwindow.NewDataAwsccEc2InstanceEventWindowTimeRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2InstanceEventWindowTimeRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.property.endHour">EndHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.property.endWeekDay">EndWeekDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.property.startHour">StartHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.property.startWeekDay">StartWeekDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRanges">DataAwsccEc2InstanceEventWindowTimeRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndHour`<sup>Required</sup> <a name="EndHour" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.property.endHour"></a>

```go
func EndHour() *f64
```

- *Type:* *f64

---

##### `EndWeekDay`<sup>Required</sup> <a name="EndWeekDay" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.property.endWeekDay"></a>

```go
func EndWeekDay() *string
```

- *Type:* *string

---

##### `StartHour`<sup>Required</sup> <a name="StartHour" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.property.startHour"></a>

```go
func StartHour() *f64
```

- *Type:* *f64

---

##### `StartWeekDay`<sup>Required</sup> <a name="StartWeekDay" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.property.startWeekDay"></a>

```go
func StartWeekDay() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceEventWindowTimeRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceEventWindow.DataAwsccEc2InstanceEventWindowTimeRanges">DataAwsccEc2InstanceEventWindowTimeRanges</a>

---



