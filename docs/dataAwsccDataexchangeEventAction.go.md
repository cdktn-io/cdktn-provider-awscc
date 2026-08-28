# `dataAwsccDataexchangeEventAction` Submodule <a name="`dataAwsccDataexchangeEventAction` Submodule" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDataexchangeEventAction <a name="DataAwsccDataexchangeEventAction" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/dataexchange_event_action awscc_dataexchange_event_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

dataawsccdataexchangeeventaction.NewDataAwsccDataexchangeEventAction(scope Construct, id *string, config DataAwsccDataexchangeEventActionConfig) DataAwsccDataexchangeEventAction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig">DataAwsccDataexchangeEventActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig">DataAwsccDataexchangeEventActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDataexchangeEventAction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

dataawsccdataexchangeeventaction.DataAwsccDataexchangeEventAction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

dataawsccdataexchangeeventaction.DataAwsccDataexchangeEventAction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

dataawsccdataexchangeeventaction.DataAwsccDataexchangeEventAction_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

dataawsccdataexchangeeventaction.DataAwsccDataexchangeEventAction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDataexchangeEventAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDataexchangeEventAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDataexchangeEventAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/dataexchange_event_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDataexchangeEventAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference">DataAwsccDataexchangeEventActionActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.event">Event</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference">DataAwsccDataexchangeEventActionEventOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.eventActionId">EventActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList">DataAwsccDataexchangeEventActionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.action"></a>

```go
func Action() DataAwsccDataexchangeEventActionActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference">DataAwsccDataexchangeEventActionActionOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.event"></a>

```go
func Event() DataAwsccDataexchangeEventActionEventOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference">DataAwsccDataexchangeEventActionEventOutputReference</a>

---

##### `EventActionId`<sup>Required</sup> <a name="EventActionId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.eventActionId"></a>

```go
func EventActionId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.tags"></a>

```go
func Tags() DataAwsccDataexchangeEventActionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList">DataAwsccDataexchangeEventActionTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDataexchangeEventActionAction <a name="DataAwsccDataexchangeEventActionAction" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

&dataawsccdataexchangeeventaction.DataAwsccDataexchangeEventActionAction {

}
```


### DataAwsccDataexchangeEventActionActionExportRevisionToS3 <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

&dataawsccdataexchangeeventaction.DataAwsccDataexchangeEventActionActionExportRevisionToS3 {

}
```


### DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

&dataawsccdataexchangeeventaction.DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption {

}
```


### DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

&dataawsccdataexchangeeventaction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination {

}
```


### DataAwsccDataexchangeEventActionConfig <a name="DataAwsccDataexchangeEventActionConfig" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

&dataawsccdataexchangeeventaction.DataAwsccDataexchangeEventActionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/dataexchange_event_action#id DataAwsccDataexchangeEventAction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDataexchangeEventActionEvent <a name="DataAwsccDataexchangeEventActionEvent" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEvent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEvent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

&dataawsccdataexchangeeventaction.DataAwsccDataexchangeEventActionEvent {

}
```


### DataAwsccDataexchangeEventActionEventRevisionPublished <a name="DataAwsccDataexchangeEventActionEventRevisionPublished" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublished"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublished.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

&dataawsccdataexchangeeventaction.DataAwsccDataexchangeEventActionEventRevisionPublished {

}
```


### DataAwsccDataexchangeEventActionTags <a name="DataAwsccDataexchangeEventActionTags" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

&dataawsccdataexchangeeventaction.DataAwsccDataexchangeEventActionTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

dataawsccdataexchangeeventaction.NewDataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption">DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption">DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption</a>

---


### DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

dataawsccdataexchangeeventaction.NewDataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestination">RevisionDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3">DataAwsccDataexchangeEventActionActionExportRevisionToS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryption"></a>

```go
func Encryption() DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference</a>

---

##### `RevisionDestination`<sup>Required</sup> <a name="RevisionDestination" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestination"></a>

```go
func RevisionDestination() DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDataexchangeEventActionActionExportRevisionToS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3">DataAwsccDataexchangeEventActionActionExportRevisionToS3</a>

---


### DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

dataawsccdataexchangeeventaction.NewDataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPattern">KeyPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `KeyPattern`<sup>Required</sup> <a name="KeyPattern" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPattern"></a>

```go
func KeyPattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>

---


### DataAwsccDataexchangeEventActionActionOutputReference <a name="DataAwsccDataexchangeEventActionActionOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

dataawsccdataexchangeeventaction.NewDataAwsccDataexchangeEventActionActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDataexchangeEventActionActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.exportRevisionToS3">ExportRevisionToS3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionAction">DataAwsccDataexchangeEventActionAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExportRevisionToS3`<sup>Required</sup> <a name="ExportRevisionToS3" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.exportRevisionToS3"></a>

```go
func ExportRevisionToS3() DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDataexchangeEventActionAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionAction">DataAwsccDataexchangeEventActionAction</a>

---


### DataAwsccDataexchangeEventActionEventOutputReference <a name="DataAwsccDataexchangeEventActionEventOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

dataawsccdataexchangeeventaction.NewDataAwsccDataexchangeEventActionEventOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDataexchangeEventActionEventOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.revisionPublished">RevisionPublished</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference">DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEvent">DataAwsccDataexchangeEventActionEvent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RevisionPublished`<sup>Required</sup> <a name="RevisionPublished" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.revisionPublished"></a>

```go
func RevisionPublished() DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference">DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDataexchangeEventActionEvent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEvent">DataAwsccDataexchangeEventActionEvent</a>

---


### DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference <a name="DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

dataawsccdataexchangeeventaction.NewDataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetId">DataSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublished">DataAwsccDataexchangeEventActionEventRevisionPublished</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSetId`<sup>Required</sup> <a name="DataSetId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetId"></a>

```go
func DataSetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDataexchangeEventActionEventRevisionPublished
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublished">DataAwsccDataexchangeEventActionEventRevisionPublished</a>

---


### DataAwsccDataexchangeEventActionTagsList <a name="DataAwsccDataexchangeEventActionTagsList" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

dataawsccdataexchangeeventaction.NewDataAwsccDataexchangeEventActionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDataexchangeEventActionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDataexchangeEventActionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDataexchangeEventActionTagsOutputReference <a name="DataAwsccDataexchangeEventActionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdataexchangeeventaction"

dataawsccdataexchangeeventaction.NewDataAwsccDataexchangeEventActionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDataexchangeEventActionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTags">DataAwsccDataexchangeEventActionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDataexchangeEventActionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTags">DataAwsccDataexchangeEventActionTags</a>

---



