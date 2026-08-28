# `kafkaconnectCustomPlugin` Submodule <a name="`kafkaconnectCustomPlugin` Submodule" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KafkaconnectCustomPlugin <a name="KafkaconnectCustomPlugin" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin awscc_kafkaconnect_custom_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectcustomplugin"

kafkaconnectcustomplugin.NewKafkaconnectCustomPlugin(scope Construct, id *string, config KafkaconnectCustomPluginConfig) KafkaconnectCustomPlugin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig">KafkaconnectCustomPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig">KafkaconnectCustomPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocation` <a name="PutLocation" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putLocation"></a>

```go
func PutLocation(value KafkaconnectCustomPluginLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KafkaconnectCustomPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectcustomplugin"

kafkaconnectcustomplugin.KafkaconnectCustomPlugin_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectcustomplugin"

kafkaconnectcustomplugin.KafkaconnectCustomPlugin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectcustomplugin"

kafkaconnectcustomplugin.KafkaconnectCustomPlugin_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectcustomplugin"

kafkaconnectcustomplugin.KafkaconnectCustomPlugin_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a KafkaconnectCustomPlugin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KafkaconnectCustomPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KafkaconnectCustomPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the KafkaconnectCustomPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.customPluginArn">CustomPluginArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.fileDescription">FileDescription</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference">KafkaconnectCustomPluginFileDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference">KafkaconnectCustomPluginLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.revision">Revision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList">KafkaconnectCustomPluginTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.locationInput">LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomPluginArn`<sup>Required</sup> <a name="CustomPluginArn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.customPluginArn"></a>

```go
func CustomPluginArn() *string
```

- *Type:* *string

---

##### `FileDescription`<sup>Required</sup> <a name="FileDescription" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.fileDescription"></a>

```go
func FileDescription() KafkaconnectCustomPluginFileDescriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference">KafkaconnectCustomPluginFileDescriptionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.location"></a>

```go
func Location() KafkaconnectCustomPluginLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference">KafkaconnectCustomPluginLocationOutputReference</a>

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.revision"></a>

```go
func Revision() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tags"></a>

```go
func Tags() KafkaconnectCustomPluginTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList">KafkaconnectCustomPluginTagsList</a>

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.locationInput"></a>

```go
func LocationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KafkaconnectCustomPluginConfig <a name="KafkaconnectCustomPluginConfig" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectcustomplugin"

&kafkaconnectcustomplugin.KafkaconnectCustomPluginConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ContentType: *string,
	Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation,
	Name: *string,
	Description: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.contentType">ContentType</a></code> | <code>*string</code> | The type of the plugin file. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a></code> | Information about the location of a custom plugin. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.name">Name</a></code> | <code>*string</code> | The name of the custom plugin. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.description">Description</a></code> | <code>*string</code> | A summary description of the custom plugin. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

The type of the plugin file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#content_type KafkaconnectCustomPlugin#content_type}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.location"></a>

```go
Location KafkaconnectCustomPluginLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a>

Information about the location of a custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#location KafkaconnectCustomPlugin#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#name KafkaconnectCustomPlugin#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A summary description of the custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#description KafkaconnectCustomPlugin#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#tags KafkaconnectCustomPlugin#tags}

---

### KafkaconnectCustomPluginFileDescription <a name="KafkaconnectCustomPluginFileDescription" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectcustomplugin"

&kafkaconnectcustomplugin.KafkaconnectCustomPluginFileDescription {

}
```


### KafkaconnectCustomPluginLocation <a name="KafkaconnectCustomPluginLocation" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectcustomplugin"

&kafkaconnectcustomplugin.KafkaconnectCustomPluginLocation {
	S3Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a></code> | The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3. |

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation.property.s3Location"></a>

```go
S3Location KafkaconnectCustomPluginLocationS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a>

The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#s3_location KafkaconnectCustomPlugin#s3_location}

---

### KafkaconnectCustomPluginLocationS3Location <a name="KafkaconnectCustomPluginLocationS3Location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectcustomplugin"

&kafkaconnectcustomplugin.KafkaconnectCustomPluginLocationS3Location {
	BucketArn: *string,
	FileKey: *string,
	ObjectVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.bucketArn">BucketArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.fileKey">FileKey</a></code> | <code>*string</code> | The file key for an object in an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.objectVersion">ObjectVersion</a></code> | <code>*string</code> | The version of an object in an S3 bucket. |

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.bucketArn"></a>

```go
BucketArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#bucket_arn KafkaconnectCustomPlugin#bucket_arn}

---

##### `FileKey`<sup>Required</sup> <a name="FileKey" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.fileKey"></a>

```go
FileKey *string
```

- *Type:* *string

The file key for an object in an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#file_key KafkaconnectCustomPlugin#file_key}

---

##### `ObjectVersion`<sup>Optional</sup> <a name="ObjectVersion" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.objectVersion"></a>

```go
ObjectVersion *string
```

- *Type:* *string

The version of an object in an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#object_version KafkaconnectCustomPlugin#object_version}

---

### KafkaconnectCustomPluginTags <a name="KafkaconnectCustomPluginTags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectcustomplugin"

&kafkaconnectcustomplugin.KafkaconnectCustomPluginTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#key KafkaconnectCustomPlugin#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#value KafkaconnectCustomPlugin#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KafkaconnectCustomPluginFileDescriptionOutputReference <a name="KafkaconnectCustomPluginFileDescriptionOutputReference" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectcustomplugin"

kafkaconnectcustomplugin.NewKafkaconnectCustomPluginFileDescriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectCustomPluginFileDescriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fileMd5">FileMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fileSize">FileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription">KafkaconnectCustomPluginFileDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileMd5`<sup>Required</sup> <a name="FileMd5" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fileMd5"></a>

```go
func FileMd5() *string
```

- *Type:* *string

---

##### `FileSize`<sup>Required</sup> <a name="FileSize" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fileSize"></a>

```go
func FileSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() KafkaconnectCustomPluginFileDescription
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription">KafkaconnectCustomPluginFileDescription</a>

---


### KafkaconnectCustomPluginLocationOutputReference <a name="KafkaconnectCustomPluginLocationOutputReference" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectcustomplugin"

kafkaconnectcustomplugin.NewKafkaconnectCustomPluginLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectCustomPluginLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.putS3Location">PutS3Location</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Location` <a name="PutS3Location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.putS3Location"></a>

```go
func PutS3Location(value KafkaconnectCustomPluginLocationS3Location)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference">KafkaconnectCustomPluginLocationS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.s3LocationInput">S3LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.s3Location"></a>

```go
func S3Location() KafkaconnectCustomPluginLocationS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference">KafkaconnectCustomPluginLocationS3LocationOutputReference</a>

---

##### `S3LocationInput`<sup>Optional</sup> <a name="S3LocationInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.s3LocationInput"></a>

```go
func S3LocationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectCustomPluginLocationS3LocationOutputReference <a name="KafkaconnectCustomPluginLocationS3LocationOutputReference" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectcustomplugin"

kafkaconnectcustomplugin.NewKafkaconnectCustomPluginLocationS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KafkaconnectCustomPluginLocationS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resetObjectVersion">ResetObjectVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetObjectVersion` <a name="ResetObjectVersion" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resetObjectVersion"></a>

```go
func ResetObjectVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKeyInput">FileKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersionInput">ObjectVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKey">FileKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArnInput"></a>

```go
func BucketArnInput() *string
```

- *Type:* *string

---

##### `FileKeyInput`<sup>Optional</sup> <a name="FileKeyInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKeyInput"></a>

```go
func FileKeyInput() *string
```

- *Type:* *string

---

##### `ObjectVersionInput`<sup>Optional</sup> <a name="ObjectVersionInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersionInput"></a>

```go
func ObjectVersionInput() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `FileKey`<sup>Required</sup> <a name="FileKey" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKey"></a>

```go
func FileKey() *string
```

- *Type:* *string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersion"></a>

```go
func ObjectVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectCustomPluginTagsList <a name="KafkaconnectCustomPluginTagsList" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectcustomplugin"

kafkaconnectcustomplugin.NewKafkaconnectCustomPluginTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KafkaconnectCustomPluginTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.get"></a>

```go
func Get(index *f64) KafkaconnectCustomPluginTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KafkaconnectCustomPluginTagsOutputReference <a name="KafkaconnectCustomPluginTagsOutputReference" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kafkaconnectcustomplugin"

kafkaconnectcustomplugin.NewKafkaconnectCustomPluginTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KafkaconnectCustomPluginTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



