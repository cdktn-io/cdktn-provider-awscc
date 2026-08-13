# `elementalinferenceFeed` Submodule <a name="`elementalinferenceFeed` Submodule" id="@cdktn/provider-awscc.elementalinferenceFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElementalinferenceFeed <a name="ElementalinferenceFeed" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed awscc_elementalinference_feed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencefeed"

elementalinferencefeed.NewElementalinferenceFeed(scope Construct, id *string, config ElementalinferenceFeedConfig) ElementalinferenceFeed
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig">ElementalinferenceFeedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig">ElementalinferenceFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.putOutputs">PutOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOutputs` <a name="PutOutputs" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.putOutputs"></a>

```go
func PutOutputs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.putOutputs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ElementalinferenceFeed resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencefeed"

elementalinferencefeed.ElementalinferenceFeed_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencefeed"

elementalinferencefeed.ElementalinferenceFeed_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencefeed"

elementalinferencefeed.ElementalinferenceFeed_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencefeed"

elementalinferencefeed.ElementalinferenceFeed_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ElementalinferenceFeed resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ElementalinferenceFeed to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ElementalinferenceFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ElementalinferenceFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.dataEndpoints">DataEndpoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.feedId">FeedId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.outputs">Outputs</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList">ElementalinferenceFeedOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.outputsInput">OutputsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DataEndpoints`<sup>Required</sup> <a name="DataEndpoints" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.dataEndpoints"></a>

```go
func DataEndpoints() *[]*string
```

- *Type:* *[]*string

---

##### `FeedId`<sup>Required</sup> <a name="FeedId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.feedId"></a>

```go
func FeedId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.outputs"></a>

```go
func Outputs() ElementalinferenceFeedOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList">ElementalinferenceFeedOutputsList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputsInput`<sup>Optional</sup> <a name="OutputsInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.outputsInput"></a>

```go
func OutputsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ElementalinferenceFeedConfig <a name="ElementalinferenceFeedConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencefeed"

&elementalinferencefeed.ElementalinferenceFeedConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Outputs: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.outputs">Outputs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#outputs ElementalinferenceFeed#outputs}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#tags ElementalinferenceFeed#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}.

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.outputs"></a>

```go
Outputs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#outputs ElementalinferenceFeed#outputs}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#tags ElementalinferenceFeed#tags}.

---

### ElementalinferenceFeedOutputs <a name="ElementalinferenceFeedOutputs" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencefeed"

&elementalinferencefeed.ElementalinferenceFeedOutputs {
	Name: *string,
	OutputConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig,
	Status: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#output_config ElementalinferenceFeed#output_config}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#status ElementalinferenceFeed#status}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#description ElementalinferenceFeed#description}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}.

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.outputConfig"></a>

```go
OutputConfig ElementalinferenceFeedOutputsOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#output_config ElementalinferenceFeed#output_config}.

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#status ElementalinferenceFeed#status}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#description ElementalinferenceFeed#description}.

---

### ElementalinferenceFeedOutputsOutputConfig <a name="ElementalinferenceFeedOutputsOutputConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencefeed"

&elementalinferencefeed.ElementalinferenceFeedOutputsOutputConfig {
	Clipping: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping,
	Cropping: *string,
	Subtitling: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.clipping">Clipping</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#clipping ElementalinferenceFeed#clipping}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.cropping">Cropping</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#cropping ElementalinferenceFeed#cropping}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.subtitling">Subtitling</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#subtitling ElementalinferenceFeed#subtitling}. |

---

##### `Clipping`<sup>Optional</sup> <a name="Clipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.clipping"></a>

```go
Clipping ElementalinferenceFeedOutputsOutputConfigClipping
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#clipping ElementalinferenceFeed#clipping}.

---

##### `Cropping`<sup>Optional</sup> <a name="Cropping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.cropping"></a>

```go
Cropping *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#cropping ElementalinferenceFeed#cropping}.

---

##### `Subtitling`<sup>Optional</sup> <a name="Subtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.subtitling"></a>

```go
Subtitling ElementalinferenceFeedOutputsOutputConfigSubtitling
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#subtitling ElementalinferenceFeed#subtitling}.

---

### ElementalinferenceFeedOutputsOutputConfigClipping <a name="ElementalinferenceFeedOutputsOutputConfigClipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencefeed"

&elementalinferencefeed.ElementalinferenceFeedOutputsOutputConfigClipping {
	CallbackMetadata: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping.property.callbackMetadata">CallbackMetadata</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#callback_metadata ElementalinferenceFeed#callback_metadata}. |

---

##### `CallbackMetadata`<sup>Optional</sup> <a name="CallbackMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping.property.callbackMetadata"></a>

```go
CallbackMetadata *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#callback_metadata ElementalinferenceFeed#callback_metadata}.

---

### ElementalinferenceFeedOutputsOutputConfigSubtitling <a name="ElementalinferenceFeedOutputsOutputConfigSubtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencefeed"

&elementalinferencefeed.ElementalinferenceFeedOutputsOutputConfigSubtitling {
	AspectRatio: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio,
	Dictionary: *string,
	Language: *string,
	ProfanityFilter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.aspectRatio">AspectRatio</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#aspect_ratio ElementalinferenceFeed#aspect_ratio}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.dictionary">Dictionary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#dictionary ElementalinferenceFeed#dictionary}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.language">Language</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#language ElementalinferenceFeed#language}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.profanityFilter">ProfanityFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#profanity_filter ElementalinferenceFeed#profanity_filter}. |

---

##### `AspectRatio`<sup>Optional</sup> <a name="AspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.aspectRatio"></a>

```go
AspectRatio ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#aspect_ratio ElementalinferenceFeed#aspect_ratio}.

---

##### `Dictionary`<sup>Optional</sup> <a name="Dictionary" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.dictionary"></a>

```go
Dictionary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#dictionary ElementalinferenceFeed#dictionary}.

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.language"></a>

```go
Language *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#language ElementalinferenceFeed#language}.

---

##### `ProfanityFilter`<sup>Optional</sup> <a name="ProfanityFilter" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.profanityFilter"></a>

```go
ProfanityFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#profanity_filter ElementalinferenceFeed#profanity_filter}.

---

### ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio <a name="ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencefeed"

&elementalinferencefeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio {
	Height: *f64,
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.property.height">Height</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#height ElementalinferenceFeed#height}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.property.width">Width</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#width ElementalinferenceFeed#width}. |

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.property.height"></a>

```go
Height *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#height ElementalinferenceFeed#height}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elementalinference_feed#width ElementalinferenceFeed#width}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElementalinferenceFeedOutputsList <a name="ElementalinferenceFeedOutputsList" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencefeed"

elementalinferencefeed.NewElementalinferenceFeedOutputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElementalinferenceFeedOutputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.get"></a>

```go
func Get(index *f64) ElementalinferenceFeedOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElementalinferenceFeedOutputsOutputConfigClippingOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigClippingOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencefeed"

elementalinferencefeed.NewElementalinferenceFeedOutputsOutputConfigClippingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElementalinferenceFeedOutputsOutputConfigClippingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resetCallbackMetadata">ResetCallbackMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCallbackMetadata` <a name="ResetCallbackMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resetCallbackMetadata"></a>

```go
func ResetCallbackMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadataInput">CallbackMetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadata">CallbackMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CallbackMetadataInput`<sup>Optional</sup> <a name="CallbackMetadataInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadataInput"></a>

```go
func CallbackMetadataInput() *string
```

- *Type:* *string

---

##### `CallbackMetadata`<sup>Required</sup> <a name="CallbackMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadata"></a>

```go
func CallbackMetadata() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElementalinferenceFeedOutputsOutputConfigOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencefeed"

elementalinferencefeed.NewElementalinferenceFeedOutputsOutputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElementalinferenceFeedOutputsOutputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putClipping">PutClipping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putSubtitling">PutSubtitling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetClipping">ResetClipping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetCropping">ResetCropping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetSubtitling">ResetSubtitling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClipping` <a name="PutClipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putClipping"></a>

```go
func PutClipping(value ElementalinferenceFeedOutputsOutputConfigClipping)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putClipping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a>

---

##### `PutSubtitling` <a name="PutSubtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putSubtitling"></a>

```go
func PutSubtitling(value ElementalinferenceFeedOutputsOutputConfigSubtitling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putSubtitling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a>

---

##### `ResetClipping` <a name="ResetClipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetClipping"></a>

```go
func ResetClipping()
```

##### `ResetCropping` <a name="ResetCropping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetCropping"></a>

```go
func ResetCropping()
```

##### `ResetSubtitling` <a name="ResetSubtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetSubtitling"></a>

```go
func ResetSubtitling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.clipping">Clipping</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference">ElementalinferenceFeedOutputsOutputConfigClippingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitling">Subtitling</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference">ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.clippingInput">ClippingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.croppingInput">CroppingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitlingInput">SubtitlingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.cropping">Cropping</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Clipping`<sup>Required</sup> <a name="Clipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.clipping"></a>

```go
func Clipping() ElementalinferenceFeedOutputsOutputConfigClippingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference">ElementalinferenceFeedOutputsOutputConfigClippingOutputReference</a>

---

##### `Subtitling`<sup>Required</sup> <a name="Subtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitling"></a>

```go
func Subtitling() ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference">ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference</a>

---

##### `ClippingInput`<sup>Optional</sup> <a name="ClippingInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.clippingInput"></a>

```go
func ClippingInput() interface{}
```

- *Type:* interface{}

---

##### `CroppingInput`<sup>Optional</sup> <a name="CroppingInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.croppingInput"></a>

```go
func CroppingInput() *string
```

- *Type:* *string

---

##### `SubtitlingInput`<sup>Optional</sup> <a name="SubtitlingInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitlingInput"></a>

```go
func SubtitlingInput() interface{}
```

- *Type:* interface{}

---

##### `Cropping`<sup>Required</sup> <a name="Cropping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.cropping"></a>

```go
func Cropping() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencefeed"

elementalinferencefeed.NewElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeight` <a name="ResetHeight" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resetHeight"></a>

```go
func ResetHeight()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resetWidth"></a>

```go
func ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.heightInput">HeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.heightInput"></a>

```go
func HeightInput() *f64
```

- *Type:* *f64

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencefeed"

elementalinferencefeed.NewElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.putAspectRatio">PutAspectRatio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetAspectRatio">ResetAspectRatio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetDictionary">ResetDictionary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetLanguage">ResetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetProfanityFilter">ResetProfanityFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAspectRatio` <a name="PutAspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.putAspectRatio"></a>

```go
func PutAspectRatio(value ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.putAspectRatio.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a>

---

##### `ResetAspectRatio` <a name="ResetAspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetAspectRatio"></a>

```go
func ResetAspectRatio()
```

##### `ResetDictionary` <a name="ResetDictionary" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetDictionary"></a>

```go
func ResetDictionary()
```

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetLanguage"></a>

```go
func ResetLanguage()
```

##### `ResetProfanityFilter` <a name="ResetProfanityFilter" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetProfanityFilter"></a>

```go
func ResetProfanityFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatio">AspectRatio</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatioInput">AspectRatioInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionaryInput">DictionaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.languageInput">LanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilterInput">ProfanityFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionary">Dictionary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilter">ProfanityFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AspectRatio`<sup>Required</sup> <a name="AspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatio"></a>

```go
func AspectRatio() ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference</a>

---

##### `AspectRatioInput`<sup>Optional</sup> <a name="AspectRatioInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatioInput"></a>

```go
func AspectRatioInput() interface{}
```

- *Type:* interface{}

---

##### `DictionaryInput`<sup>Optional</sup> <a name="DictionaryInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionaryInput"></a>

```go
func DictionaryInput() *string
```

- *Type:* *string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.languageInput"></a>

```go
func LanguageInput() *string
```

- *Type:* *string

---

##### `ProfanityFilterInput`<sup>Optional</sup> <a name="ProfanityFilterInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilterInput"></a>

```go
func ProfanityFilterInput() *string
```

- *Type:* *string

---

##### `Dictionary`<sup>Required</sup> <a name="Dictionary" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionary"></a>

```go
func Dictionary() *string
```

- *Type:* *string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `ProfanityFilter`<sup>Required</sup> <a name="ProfanityFilter" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilter"></a>

```go
func ProfanityFilter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElementalinferenceFeedOutputsOutputReference <a name="ElementalinferenceFeedOutputsOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencefeed"

elementalinferencefeed.NewElementalinferenceFeedOutputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElementalinferenceFeedOutputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.putOutputConfig">PutOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOutputConfig` <a name="PutOutputConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.putOutputConfig"></a>

```go
func PutOutputConfig(value ElementalinferenceFeedOutputsOutputConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference">ElementalinferenceFeedOutputsOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.outputConfigInput">OutputConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.outputConfig"></a>

```go
func OutputConfig() ElementalinferenceFeedOutputsOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference">ElementalinferenceFeedOutputsOutputConfigOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputConfigInput`<sup>Optional</sup> <a name="OutputConfigInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.outputConfigInput"></a>

```go
func OutputConfigInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



