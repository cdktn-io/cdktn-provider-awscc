# `qbusinessPlugin` Submodule <a name="`qbusinessPlugin` Submodule" id="@cdktn/provider-awscc.qbusinessPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QbusinessPlugin <a name="QbusinessPlugin" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin awscc_qbusiness_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

qbusinessplugin.NewQbusinessPlugin(scope Construct, id *string, config QbusinessPluginConfig) QbusinessPlugin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig">QbusinessPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig">QbusinessPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putAuthConfiguration">PutAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putCustomPluginConfiguration">PutCustomPluginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetCustomPluginConfiguration">ResetCustomPluginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetServerUrl">ResetServerUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthConfiguration` <a name="PutAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putAuthConfiguration"></a>

```go
func PutAuthConfiguration(value QbusinessPluginAuthConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a>

---

##### `PutCustomPluginConfiguration` <a name="PutCustomPluginConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putCustomPluginConfiguration"></a>

```go
func PutCustomPluginConfiguration(value QbusinessPluginCustomPluginConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putCustomPluginConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplicationId` <a name="ResetApplicationId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetApplicationId"></a>

```go
func ResetApplicationId()
```

##### `ResetCustomPluginConfiguration` <a name="ResetCustomPluginConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetCustomPluginConfiguration"></a>

```go
func ResetCustomPluginConfiguration()
```

##### `ResetServerUrl` <a name="ResetServerUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetServerUrl"></a>

```go
func ResetServerUrl()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetState"></a>

```go
func ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QbusinessPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

qbusinessplugin.QbusinessPlugin_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

qbusinessplugin.QbusinessPlugin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

qbusinessplugin.QbusinessPlugin_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

qbusinessplugin.QbusinessPlugin_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a QbusinessPlugin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QbusinessPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QbusinessPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the QbusinessPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.authConfiguration">AuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference">QbusinessPluginAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.buildStatus">BuildStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.customPluginConfiguration">CustomPluginConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference">QbusinessPluginCustomPluginConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.pluginArn">PluginArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.pluginId">PluginId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList">QbusinessPluginTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.authConfigurationInput">AuthConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.customPluginConfigurationInput">CustomPluginConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.serverUrlInput">ServerUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.serverUrl">ServerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthConfiguration`<sup>Required</sup> <a name="AuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.authConfiguration"></a>

```go
func AuthConfiguration() QbusinessPluginAuthConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference">QbusinessPluginAuthConfigurationOutputReference</a>

---

##### `BuildStatus`<sup>Required</sup> <a name="BuildStatus" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.buildStatus"></a>

```go
func BuildStatus() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CustomPluginConfiguration`<sup>Required</sup> <a name="CustomPluginConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.customPluginConfiguration"></a>

```go
func CustomPluginConfiguration() QbusinessPluginCustomPluginConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference">QbusinessPluginCustomPluginConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PluginArn`<sup>Required</sup> <a name="PluginArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.pluginArn"></a>

```go
func PluginArn() *string
```

- *Type:* *string

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.pluginId"></a>

```go
func PluginId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tags"></a>

```go
func Tags() QbusinessPluginTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList">QbusinessPluginTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `AuthConfigurationInput`<sup>Optional</sup> <a name="AuthConfigurationInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.authConfigurationInput"></a>

```go
func AuthConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `CustomPluginConfigurationInput`<sup>Optional</sup> <a name="CustomPluginConfigurationInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.customPluginConfigurationInput"></a>

```go
func CustomPluginConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ServerUrlInput`<sup>Optional</sup> <a name="ServerUrlInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.serverUrlInput"></a>

```go
func ServerUrlInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ServerUrl`<sup>Required</sup> <a name="ServerUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.serverUrl"></a>

```go
func ServerUrl() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QbusinessPluginAuthConfiguration <a name="QbusinessPluginAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

&qbusinessplugin.QbusinessPluginAuthConfiguration {
	BasicAuthConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration,
	NoAuthConfiguration: *string,
	OAuth2ClientCredentialConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.basicAuthConfiguration">BasicAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration">QbusinessPluginAuthConfigurationBasicAuthConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#basic_auth_configuration QbusinessPlugin#basic_auth_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.noAuthConfiguration">NoAuthConfiguration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#no_auth_configuration QbusinessPlugin#no_auth_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.oAuth2ClientCredentialConfiguration">OAuth2ClientCredentialConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#o_auth_2_client_credential_configuration QbusinessPlugin#o_auth_2_client_credential_configuration}. |

---

##### `BasicAuthConfiguration`<sup>Optional</sup> <a name="BasicAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.basicAuthConfiguration"></a>

```go
BasicAuthConfiguration QbusinessPluginAuthConfigurationBasicAuthConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration">QbusinessPluginAuthConfigurationBasicAuthConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#basic_auth_configuration QbusinessPlugin#basic_auth_configuration}.

---

##### `NoAuthConfiguration`<sup>Optional</sup> <a name="NoAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.noAuthConfiguration"></a>

```go
NoAuthConfiguration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#no_auth_configuration QbusinessPlugin#no_auth_configuration}.

---

##### `OAuth2ClientCredentialConfiguration`<sup>Optional</sup> <a name="OAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.oAuth2ClientCredentialConfiguration"></a>

```go
OAuth2ClientCredentialConfiguration QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#o_auth_2_client_credential_configuration QbusinessPlugin#o_auth_2_client_credential_configuration}.

---

### QbusinessPluginAuthConfigurationBasicAuthConfiguration <a name="QbusinessPluginAuthConfigurationBasicAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

&qbusinessplugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration {
	RoleArn: *string,
	SecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#role_arn QbusinessPlugin#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration.property.secretArn">SecretArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#secret_arn QbusinessPlugin#secret_arn}. |

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#role_arn QbusinessPlugin#role_arn}.

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#secret_arn QbusinessPlugin#secret_arn}.

---

### QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration <a name="QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

&qbusinessplugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration {
	AuthorizationUrl: *string,
	RoleArn: *string,
	SecretArn: *string,
	TokenUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.authorizationUrl">AuthorizationUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#authorization_url QbusinessPlugin#authorization_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#role_arn QbusinessPlugin#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.secretArn">SecretArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#secret_arn QbusinessPlugin#secret_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#token_url QbusinessPlugin#token_url}. |

---

##### `AuthorizationUrl`<sup>Optional</sup> <a name="AuthorizationUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.authorizationUrl"></a>

```go
AuthorizationUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#authorization_url QbusinessPlugin#authorization_url}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#role_arn QbusinessPlugin#role_arn}.

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#secret_arn QbusinessPlugin#secret_arn}.

---

##### `TokenUrl`<sup>Optional</sup> <a name="TokenUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.tokenUrl"></a>

```go
TokenUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#token_url QbusinessPlugin#token_url}.

---

### QbusinessPluginConfig <a name="QbusinessPluginConfig" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

&qbusinessplugin.QbusinessPluginConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AuthConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration,
	DisplayName: *string,
	Type: *string,
	ApplicationId: *string,
	CustomPluginConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration,
	ServerUrl: *string,
	State: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.authConfiguration">AuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#auth_configuration QbusinessPlugin#auth_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#display_name QbusinessPlugin#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#type QbusinessPlugin#type}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#application_id QbusinessPlugin#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.customPluginConfiguration">CustomPluginConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#custom_plugin_configuration QbusinessPlugin#custom_plugin_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.serverUrl">ServerUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#server_url QbusinessPlugin#server_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#state QbusinessPlugin#state}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#tags QbusinessPlugin#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthConfiguration`<sup>Required</sup> <a name="AuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.authConfiguration"></a>

```go
AuthConfiguration QbusinessPluginAuthConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#auth_configuration QbusinessPlugin#auth_configuration}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#display_name QbusinessPlugin#display_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#type QbusinessPlugin#type}.

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#application_id QbusinessPlugin#application_id}.

---

##### `CustomPluginConfiguration`<sup>Optional</sup> <a name="CustomPluginConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.customPluginConfiguration"></a>

```go
CustomPluginConfiguration QbusinessPluginCustomPluginConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#custom_plugin_configuration QbusinessPlugin#custom_plugin_configuration}.

---

##### `ServerUrl`<sup>Optional</sup> <a name="ServerUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.serverUrl"></a>

```go
ServerUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#server_url QbusinessPlugin#server_url}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#state QbusinessPlugin#state}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#tags QbusinessPlugin#tags}.

---

### QbusinessPluginCustomPluginConfiguration <a name="QbusinessPluginCustomPluginConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

&qbusinessplugin.QbusinessPluginCustomPluginConfiguration {
	ApiSchema: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema,
	ApiSchemaType: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.apiSchema">ApiSchema</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema">QbusinessPluginCustomPluginConfigurationApiSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#api_schema QbusinessPlugin#api_schema}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.apiSchemaType">ApiSchemaType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#api_schema_type QbusinessPlugin#api_schema_type}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#description QbusinessPlugin#description}. |

---

##### `ApiSchema`<sup>Optional</sup> <a name="ApiSchema" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.apiSchema"></a>

```go
ApiSchema QbusinessPluginCustomPluginConfigurationApiSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema">QbusinessPluginCustomPluginConfigurationApiSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#api_schema QbusinessPlugin#api_schema}.

---

##### `ApiSchemaType`<sup>Optional</sup> <a name="ApiSchemaType" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.apiSchemaType"></a>

```go
ApiSchemaType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#api_schema_type QbusinessPlugin#api_schema_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#description QbusinessPlugin#description}.

---

### QbusinessPluginCustomPluginConfigurationApiSchema <a name="QbusinessPluginCustomPluginConfigurationApiSchema" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

&qbusinessplugin.QbusinessPluginCustomPluginConfigurationApiSchema {
	Payload: *string,
	S3: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema.property.payload">Payload</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#payload QbusinessPlugin#payload}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3">QbusinessPluginCustomPluginConfigurationApiSchemaS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#s3 QbusinessPlugin#s3}. |

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema.property.payload"></a>

```go
Payload *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#payload QbusinessPlugin#payload}.

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema.property.s3"></a>

```go
S3 QbusinessPluginCustomPluginConfigurationApiSchemaS3
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3">QbusinessPluginCustomPluginConfigurationApiSchemaS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#s3 QbusinessPlugin#s3}.

---

### QbusinessPluginCustomPluginConfigurationApiSchemaS3 <a name="QbusinessPluginCustomPluginConfigurationApiSchemaS3" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

&qbusinessplugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3 {
	Bucket: *string,
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#bucket QbusinessPlugin#bucket}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#key QbusinessPlugin#key}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#bucket QbusinessPlugin#bucket}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#key QbusinessPlugin#key}.

---

### QbusinessPluginTags <a name="QbusinessPluginTags" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

&qbusinessplugin.QbusinessPluginTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#key QbusinessPlugin#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#value QbusinessPlugin#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#key QbusinessPlugin#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_plugin#value QbusinessPlugin#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference <a name="QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

qbusinessplugin.NewQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference <a name="QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

qbusinessplugin.NewQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetAuthorizationUrl">ResetAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetTokenUrl">ResetTokenUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationUrl` <a name="ResetAuthorizationUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetAuthorizationUrl"></a>

```go
func ResetAuthorizationUrl()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```

##### `ResetTokenUrl` <a name="ResetTokenUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetTokenUrl"></a>

```go
func ResetTokenUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.authorizationUrlInput">AuthorizationUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.authorizationUrl">AuthorizationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationUrlInput`<sup>Optional</sup> <a name="AuthorizationUrlInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.authorizationUrlInput"></a>

```go
func AuthorizationUrlInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.tokenUrlInput"></a>

```go
func TokenUrlInput() *string
```

- *Type:* *string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.authorizationUrl"></a>

```go
func AuthorizationUrl() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.tokenUrl"></a>

```go
func TokenUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessPluginAuthConfigurationOutputReference <a name="QbusinessPluginAuthConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

qbusinessplugin.NewQbusinessPluginAuthConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessPluginAuthConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putBasicAuthConfiguration">PutBasicAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putOAuth2ClientCredentialConfiguration">PutOAuth2ClientCredentialConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetBasicAuthConfiguration">ResetBasicAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetNoAuthConfiguration">ResetNoAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetOAuth2ClientCredentialConfiguration">ResetOAuth2ClientCredentialConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicAuthConfiguration` <a name="PutBasicAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putBasicAuthConfiguration"></a>

```go
func PutBasicAuthConfiguration(value QbusinessPluginAuthConfigurationBasicAuthConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putBasicAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration">QbusinessPluginAuthConfigurationBasicAuthConfiguration</a>

---

##### `PutOAuth2ClientCredentialConfiguration` <a name="PutOAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putOAuth2ClientCredentialConfiguration"></a>

```go
func PutOAuth2ClientCredentialConfiguration(value QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putOAuth2ClientCredentialConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a>

---

##### `ResetBasicAuthConfiguration` <a name="ResetBasicAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetBasicAuthConfiguration"></a>

```go
func ResetBasicAuthConfiguration()
```

##### `ResetNoAuthConfiguration` <a name="ResetNoAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetNoAuthConfiguration"></a>

```go
func ResetNoAuthConfiguration()
```

##### `ResetOAuth2ClientCredentialConfiguration` <a name="ResetOAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetOAuth2ClientCredentialConfiguration"></a>

```go
func ResetOAuth2ClientCredentialConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.basicAuthConfiguration">BasicAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference">QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.oAuth2ClientCredentialConfiguration">OAuth2ClientCredentialConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.basicAuthConfigurationInput">BasicAuthConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.noAuthConfigurationInput">NoAuthConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.oAuth2ClientCredentialConfigurationInput">OAuth2ClientCredentialConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.noAuthConfiguration">NoAuthConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BasicAuthConfiguration`<sup>Required</sup> <a name="BasicAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.basicAuthConfiguration"></a>

```go
func BasicAuthConfiguration() QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference">QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference</a>

---

##### `OAuth2ClientCredentialConfiguration`<sup>Required</sup> <a name="OAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.oAuth2ClientCredentialConfiguration"></a>

```go
func OAuth2ClientCredentialConfiguration() QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference</a>

---

##### `BasicAuthConfigurationInput`<sup>Optional</sup> <a name="BasicAuthConfigurationInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.basicAuthConfigurationInput"></a>

```go
func BasicAuthConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NoAuthConfigurationInput`<sup>Optional</sup> <a name="NoAuthConfigurationInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.noAuthConfigurationInput"></a>

```go
func NoAuthConfigurationInput() *string
```

- *Type:* *string

---

##### `OAuth2ClientCredentialConfigurationInput`<sup>Optional</sup> <a name="OAuth2ClientCredentialConfigurationInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.oAuth2ClientCredentialConfigurationInput"></a>

```go
func OAuth2ClientCredentialConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NoAuthConfiguration`<sup>Required</sup> <a name="NoAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.noAuthConfiguration"></a>

```go
func NoAuthConfiguration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference <a name="QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

qbusinessplugin.NewQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.putS3"></a>

```go
func PutS3(value QbusinessPluginCustomPluginConfigurationApiSchemaS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3">QbusinessPluginCustomPluginConfigurationApiSchemaS3</a>

---

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resetPayload"></a>

```go
func ResetPayload()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference">QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.payloadInput">PayloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.s3Input">S3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.payload">Payload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.s3"></a>

```go
func S3() QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference">QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference</a>

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.payloadInput"></a>

```go
func PayloadInput() *string
```

- *Type:* *string

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.s3Input"></a>

```go
func S3Input() interface{}
```

- *Type:* interface{}

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.payload"></a>

```go
func Payload() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference <a name="QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

qbusinessplugin.NewQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resetKey"></a>

```go
func ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessPluginCustomPluginConfigurationOutputReference <a name="QbusinessPluginCustomPluginConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

qbusinessplugin.NewQbusinessPluginCustomPluginConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessPluginCustomPluginConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.putApiSchema">PutApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetApiSchema">ResetApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetApiSchemaType">ResetApiSchemaType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiSchema` <a name="PutApiSchema" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.putApiSchema"></a>

```go
func PutApiSchema(value QbusinessPluginCustomPluginConfigurationApiSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.putApiSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema">QbusinessPluginCustomPluginConfigurationApiSchema</a>

---

##### `ResetApiSchema` <a name="ResetApiSchema" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetApiSchema"></a>

```go
func ResetApiSchema()
```

##### `ResetApiSchemaType` <a name="ResetApiSchemaType" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetApiSchemaType"></a>

```go
func ResetApiSchemaType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchema">ApiSchema</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference">QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaInput">ApiSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaTypeInput">ApiSchemaTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaType">ApiSchemaType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiSchema`<sup>Required</sup> <a name="ApiSchema" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchema"></a>

```go
func ApiSchema() QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference">QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference</a>

---

##### `ApiSchemaInput`<sup>Optional</sup> <a name="ApiSchemaInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaInput"></a>

```go
func ApiSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `ApiSchemaTypeInput`<sup>Optional</sup> <a name="ApiSchemaTypeInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaTypeInput"></a>

```go
func ApiSchemaTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ApiSchemaType`<sup>Required</sup> <a name="ApiSchemaType" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaType"></a>

```go
func ApiSchemaType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessPluginTagsList <a name="QbusinessPluginTagsList" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

qbusinessplugin.NewQbusinessPluginTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QbusinessPluginTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.get"></a>

```go
func Get(index *f64) QbusinessPluginTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessPluginTagsOutputReference <a name="QbusinessPluginTagsOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessplugin"

qbusinessplugin.NewQbusinessPluginTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QbusinessPluginTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



