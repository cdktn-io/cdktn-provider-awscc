# `lexBotVersion` Submodule <a name="`lexBotVersion` Submodule" id="@cdktn/provider-awscc.lexBotVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexBotVersion <a name="LexBotVersion" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version awscc_lex_bot_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotversion"

lexbotversion.NewLexBotVersion(scope Construct, id *string, config LexBotVersionConfig) LexBotVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig">LexBotVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig">LexBotVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.putBotVersionLocaleSpecification">PutBotVersionLocaleSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBotVersionLocaleSpecification` <a name="PutBotVersionLocaleSpecification" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.putBotVersionLocaleSpecification"></a>

```go
func PutBotVersionLocaleSpecification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.putBotVersionLocaleSpecification.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.resetDescription"></a>

```go
func ResetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LexBotVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotversion"

lexbotversion.LexBotVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotversion"

lexbotversion.LexBotVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotversion"

lexbotversion.LexBotVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotversion"

lexbotversion.LexBotVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LexBotVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LexBotVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LexBotVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LexBotVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersion">BotVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersionLocaleSpecification">BotVersionLocaleSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList">LexBotVersionBotVersionLocaleSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botIdInput">BotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersionLocaleSpecificationInput">BotVersionLocaleSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botId">BotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.description">Description</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BotVersion`<sup>Required</sup> <a name="BotVersion" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersion"></a>

```go
func BotVersion() *string
```

- *Type:* *string

---

##### `BotVersionLocaleSpecification`<sup>Required</sup> <a name="BotVersionLocaleSpecification" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersionLocaleSpecification"></a>

```go
func BotVersionLocaleSpecification() LexBotVersionBotVersionLocaleSpecificationList
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList">LexBotVersionBotVersionLocaleSpecificationList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `BotIdInput`<sup>Optional</sup> <a name="BotIdInput" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botIdInput"></a>

```go
func BotIdInput() *string
```

- *Type:* *string

---

##### `BotVersionLocaleSpecificationInput`<sup>Optional</sup> <a name="BotVersionLocaleSpecificationInput" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersionLocaleSpecificationInput"></a>

```go
func BotVersionLocaleSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `BotId`<sup>Required</sup> <a name="BotId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botId"></a>

```go
func BotId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LexBotVersionBotVersionLocaleSpecification <a name="LexBotVersionBotVersionLocaleSpecification" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotversion"

&lexbotversion.LexBotVersionBotVersionLocaleSpecification {
	BotVersionLocaleDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails,
	LocaleId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification.property.botVersionLocaleDetails">BotVersionLocaleDetails</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a></code> | The version of a bot used for a bot locale. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification.property.localeId">LocaleId</a></code> | <code>*string</code> | The identifier of the language and locale that the bot will be used in. |

---

##### `BotVersionLocaleDetails`<sup>Required</sup> <a name="BotVersionLocaleDetails" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification.property.botVersionLocaleDetails"></a>

```go
BotVersionLocaleDetails LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a>

The version of a bot used for a bot locale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#bot_version_locale_details LexBotVersion#bot_version_locale_details}

---

##### `LocaleId`<sup>Required</sup> <a name="LocaleId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification.property.localeId"></a>

```go
LocaleId *string
```

- *Type:* *string

The identifier of the language and locale that the bot will be used in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#locale_id LexBotVersion#locale_id}

---

### LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails <a name="LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotversion"

&lexbotversion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails {
	SourceBotVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails.property.sourceBotVersion">SourceBotVersion</a></code> | <code>*string</code> | The version of a bot. |

---

##### `SourceBotVersion`<sup>Required</sup> <a name="SourceBotVersion" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails.property.sourceBotVersion"></a>

```go
SourceBotVersion *string
```

- *Type:* *string

The version of a bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#source_bot_version LexBotVersion#source_bot_version}

---

### LexBotVersionConfig <a name="LexBotVersionConfig" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotversion"

&lexbotversion.LexBotVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BotId: *string,
	BotVersionLocaleSpecification: interface{},
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.botId">BotId</a></code> | <code>*string</code> | Unique ID of resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.botVersionLocaleSpecification">BotVersionLocaleSpecification</a></code> | <code>interface{}</code> | Specifies the locales that Amazon Lex adds to this version. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.description">Description</a></code> | <code>*string</code> | A description of the version. Use the description to help identify the version in lists. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BotId`<sup>Required</sup> <a name="BotId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.botId"></a>

```go
BotId *string
```

- *Type:* *string

Unique ID of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#bot_id LexBotVersion#bot_id}

---

##### `BotVersionLocaleSpecification`<sup>Required</sup> <a name="BotVersionLocaleSpecification" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.botVersionLocaleSpecification"></a>

```go
BotVersionLocaleSpecification interface{}
```

- *Type:* interface{}

Specifies the locales that Amazon Lex adds to this version.

You can choose the Draft version or any other previously published version for each locale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#bot_version_locale_specification LexBotVersion#bot_version_locale_specification}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the version. Use the description to help identify the version in lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#description LexBotVersion#description}

---

## Classes <a name="Classes" id="Classes"></a>

### LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference <a name="LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotversion"

lexbotversion.NewLexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.sourceBotVersionInput">SourceBotVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.sourceBotVersion">SourceBotVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceBotVersionInput`<sup>Optional</sup> <a name="SourceBotVersionInput" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.sourceBotVersionInput"></a>

```go
func SourceBotVersionInput() *string
```

- *Type:* *string

---

##### `SourceBotVersion`<sup>Required</sup> <a name="SourceBotVersion" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.sourceBotVersion"></a>

```go
func SourceBotVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotVersionBotVersionLocaleSpecificationList <a name="LexBotVersionBotVersionLocaleSpecificationList" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotversion"

lexbotversion.NewLexBotVersionBotVersionLocaleSpecificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LexBotVersionBotVersionLocaleSpecificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.get"></a>

```go
func Get(index *f64) LexBotVersionBotVersionLocaleSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotVersionBotVersionLocaleSpecificationOutputReference <a name="LexBotVersionBotVersionLocaleSpecificationOutputReference" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotversion"

lexbotversion.NewLexBotVersionBotVersionLocaleSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LexBotVersionBotVersionLocaleSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.putBotVersionLocaleDetails">PutBotVersionLocaleDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBotVersionLocaleDetails` <a name="PutBotVersionLocaleDetails" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.putBotVersionLocaleDetails"></a>

```go
func PutBotVersionLocaleDetails(value LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.putBotVersionLocaleDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.botVersionLocaleDetails">BotVersionLocaleDetails</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.botVersionLocaleDetailsInput">BotVersionLocaleDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.localeIdInput">LocaleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.localeId">LocaleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BotVersionLocaleDetails`<sup>Required</sup> <a name="BotVersionLocaleDetails" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.botVersionLocaleDetails"></a>

```go
func BotVersionLocaleDetails() LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference</a>

---

##### `BotVersionLocaleDetailsInput`<sup>Optional</sup> <a name="BotVersionLocaleDetailsInput" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.botVersionLocaleDetailsInput"></a>

```go
func BotVersionLocaleDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `LocaleIdInput`<sup>Optional</sup> <a name="LocaleIdInput" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.localeIdInput"></a>

```go
func LocaleIdInput() *string
```

- *Type:* *string

---

##### `LocaleId`<sup>Required</sup> <a name="LocaleId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.localeId"></a>

```go
func LocaleId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



