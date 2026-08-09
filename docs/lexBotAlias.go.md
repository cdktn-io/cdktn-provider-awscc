# `lexBotAlias` Submodule <a name="`lexBotAlias` Submodule" id="@cdktn/provider-awscc.lexBotAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexBotAlias <a name="LexBotAlias" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias awscc_lex_bot_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAlias(scope Construct, id *string, config LexBotAliasConfig) LexBotAlias
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig">LexBotAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig">LexBotAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasLocaleSettings">PutBotAliasLocaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasTags">PutBotAliasTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putConversationLogSettings">PutConversationLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putSentimentAnalysisSettings">PutSentimentAnalysisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotAliasLocaleSettings">ResetBotAliasLocaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotAliasTags">ResetBotAliasTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotVersion">ResetBotVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetConversationLogSettings">ResetConversationLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetSentimentAnalysisSettings">ResetSentimentAnalysisSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBotAliasLocaleSettings` <a name="PutBotAliasLocaleSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasLocaleSettings"></a>

```go
func PutBotAliasLocaleSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasLocaleSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBotAliasTags` <a name="PutBotAliasTags" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasTags"></a>

```go
func PutBotAliasTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putBotAliasTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutConversationLogSettings` <a name="PutConversationLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putConversationLogSettings"></a>

```go
func PutConversationLogSettings(value LexBotAliasConversationLogSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putConversationLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a>

---

##### `PutSentimentAnalysisSettings` <a name="PutSentimentAnalysisSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putSentimentAnalysisSettings"></a>

```go
func PutSentimentAnalysisSettings(value LexBotAliasSentimentAnalysisSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.putSentimentAnalysisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a>

---

##### `ResetBotAliasLocaleSettings` <a name="ResetBotAliasLocaleSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotAliasLocaleSettings"></a>

```go
func ResetBotAliasLocaleSettings()
```

##### `ResetBotAliasTags` <a name="ResetBotAliasTags" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotAliasTags"></a>

```go
func ResetBotAliasTags()
```

##### `ResetBotVersion` <a name="ResetBotVersion" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetBotVersion"></a>

```go
func ResetBotVersion()
```

##### `ResetConversationLogSettings` <a name="ResetConversationLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetConversationLogSettings"></a>

```go
func ResetConversationLogSettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetSentimentAnalysisSettings` <a name="ResetSentimentAnalysisSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.resetSentimentAnalysisSettings"></a>

```go
func ResetSentimentAnalysisSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LexBotAlias resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.LexBotAlias_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.LexBotAlias_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.LexBotAlias_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.LexBotAlias_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LexBotAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LexBotAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LexBotAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LexBotAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasId">BotAliasId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasLocaleSettings">BotAliasLocaleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList">LexBotAliasBotAliasLocaleSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasStatus">BotAliasStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasTags">BotAliasTags</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList">LexBotAliasBotAliasTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.conversationLogSettings">ConversationLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference">LexBotAliasConversationLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.sentimentAnalysisSettings">SentimentAnalysisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference">LexBotAliasSentimentAnalysisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasLocaleSettingsInput">BotAliasLocaleSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasNameInput">BotAliasNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasTagsInput">BotAliasTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botIdInput">BotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botVersionInput">BotVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.conversationLogSettingsInput">ConversationLogSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.sentimentAnalysisSettingsInput">SentimentAnalysisSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasName">BotAliasName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botId">BotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botVersion">BotVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.description">Description</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `BotAliasId`<sup>Required</sup> <a name="BotAliasId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasId"></a>

```go
func BotAliasId() *string
```

- *Type:* *string

---

##### `BotAliasLocaleSettings`<sup>Required</sup> <a name="BotAliasLocaleSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasLocaleSettings"></a>

```go
func BotAliasLocaleSettings() LexBotAliasBotAliasLocaleSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList">LexBotAliasBotAliasLocaleSettingsList</a>

---

##### `BotAliasStatus`<sup>Required</sup> <a name="BotAliasStatus" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasStatus"></a>

```go
func BotAliasStatus() *string
```

- *Type:* *string

---

##### `BotAliasTags`<sup>Required</sup> <a name="BotAliasTags" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasTags"></a>

```go
func BotAliasTags() LexBotAliasBotAliasTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList">LexBotAliasBotAliasTagsList</a>

---

##### `ConversationLogSettings`<sup>Required</sup> <a name="ConversationLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.conversationLogSettings"></a>

```go
func ConversationLogSettings() LexBotAliasConversationLogSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference">LexBotAliasConversationLogSettingsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SentimentAnalysisSettings`<sup>Required</sup> <a name="SentimentAnalysisSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.sentimentAnalysisSettings"></a>

```go
func SentimentAnalysisSettings() LexBotAliasSentimentAnalysisSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference">LexBotAliasSentimentAnalysisSettingsOutputReference</a>

---

##### `BotAliasLocaleSettingsInput`<sup>Optional</sup> <a name="BotAliasLocaleSettingsInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasLocaleSettingsInput"></a>

```go
func BotAliasLocaleSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `BotAliasNameInput`<sup>Optional</sup> <a name="BotAliasNameInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasNameInput"></a>

```go
func BotAliasNameInput() *string
```

- *Type:* *string

---

##### `BotAliasTagsInput`<sup>Optional</sup> <a name="BotAliasTagsInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasTagsInput"></a>

```go
func BotAliasTagsInput() interface{}
```

- *Type:* interface{}

---

##### `BotIdInput`<sup>Optional</sup> <a name="BotIdInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botIdInput"></a>

```go
func BotIdInput() *string
```

- *Type:* *string

---

##### `BotVersionInput`<sup>Optional</sup> <a name="BotVersionInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botVersionInput"></a>

```go
func BotVersionInput() *string
```

- *Type:* *string

---

##### `ConversationLogSettingsInput`<sup>Optional</sup> <a name="ConversationLogSettingsInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.conversationLogSettingsInput"></a>

```go
func ConversationLogSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `SentimentAnalysisSettingsInput`<sup>Optional</sup> <a name="SentimentAnalysisSettingsInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.sentimentAnalysisSettingsInput"></a>

```go
func SentimentAnalysisSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `BotAliasName`<sup>Required</sup> <a name="BotAliasName" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botAliasName"></a>

```go
func BotAliasName() *string
```

- *Type:* *string

---

##### `BotId`<sup>Required</sup> <a name="BotId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botId"></a>

```go
func BotId() *string
```

- *Type:* *string

---

##### `BotVersion`<sup>Required</sup> <a name="BotVersion" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.botVersion"></a>

```go
func BotVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lexBotAlias.LexBotAlias.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LexBotAliasBotAliasLocaleSettings <a name="LexBotAliasBotAliasLocaleSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

&lexbotalias.LexBotAliasBotAliasLocaleSettings {
	BotAliasLocaleSetting: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting,
	LocaleId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings.property.botAliasLocaleSetting">BotAliasLocaleSetting</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a></code> | You can use this parameter to specify a specific Lambda function to run different functions in different locales. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings.property.localeId">LocaleId</a></code> | <code>*string</code> | A string used to identify the locale. |

---

##### `BotAliasLocaleSetting`<sup>Optional</sup> <a name="BotAliasLocaleSetting" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings.property.botAliasLocaleSetting"></a>

```go
BotAliasLocaleSetting LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a>

You can use this parameter to specify a specific Lambda function to run different functions in different locales.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#bot_alias_locale_setting LexBotAlias#bot_alias_locale_setting}

---

##### `LocaleId`<sup>Optional</sup> <a name="LocaleId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettings.property.localeId"></a>

```go
LocaleId *string
```

- *Type:* *string

A string used to identify the locale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#locale_id LexBotAlias#locale_id}

---

### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

&lexbotalias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting {
	CodeHookSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.property.codeHookSpecification">CodeHookSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a></code> | Contains information about code hooks that Amazon Lex calls during a conversation. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the Lambda code hook is enabled. |

---

##### `CodeHookSpecification`<sup>Optional</sup> <a name="CodeHookSpecification" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.property.codeHookSpecification"></a>

```go
CodeHookSpecification LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a>

Contains information about code hooks that Amazon Lex calls during a conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#code_hook_specification LexBotAlias#code_hook_specification}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the Lambda code hook is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}

---

### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

&lexbotalias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification {
	LambdaCodeHook: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification.property.lambdaCodeHook">LambdaCodeHook</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a></code> | Contains information about code hooks that Amazon Lex calls during a conversation. |

---

##### `LambdaCodeHook`<sup>Optional</sup> <a name="LambdaCodeHook" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification.property.lambdaCodeHook"></a>

```go
LambdaCodeHook LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a>

Contains information about code hooks that Amazon Lex calls during a conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#lambda_code_hook LexBotAlias#lambda_code_hook}

---

### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

&lexbotalias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook {
	CodeHookInterfaceVersion: *string,
	LambdaArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.property.codeHookInterfaceVersion">CodeHookInterfaceVersion</a></code> | <code>*string</code> | The version of the request-response that you want Amazon Lex to use to invoke your Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Lambda function. |

---

##### `CodeHookInterfaceVersion`<sup>Optional</sup> <a name="CodeHookInterfaceVersion" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.property.codeHookInterfaceVersion"></a>

```go
CodeHookInterfaceVersion *string
```

- *Type:* *string

The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#code_hook_interface_version LexBotAlias#code_hook_interface_version}

---

##### `LambdaArn`<sup>Optional</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.property.lambdaArn"></a>

```go
LambdaArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#lambda_arn LexBotAlias#lambda_arn}

---

### LexBotAliasBotAliasTags <a name="LexBotAliasBotAliasTags" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

&lexbotalias.LexBotAliasBotAliasTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags.property.key">Key</a></code> | <code>*string</code> | A string used to identify this tag. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags.property.value">Value</a></code> | <code>*string</code> | A string containing the value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

A string used to identify this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#key LexBotAlias#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

A string containing the value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#value LexBotAlias#value}

---

### LexBotAliasConfig <a name="LexBotAliasConfig" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

&lexbotalias.LexBotAliasConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BotAliasName: *string,
	BotId: *string,
	BotAliasLocaleSettings: interface{},
	BotAliasTags: interface{},
	BotVersion: *string,
	ConversationLogSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lexBotAlias.LexBotAliasConversationLogSettings,
	Description: *string,
	SentimentAnalysisSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasName">BotAliasName</a></code> | <code>*string</code> | A unique identifier for a resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botId">BotId</a></code> | <code>*string</code> | Unique ID of resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasLocaleSettings">BotAliasLocaleSettings</a></code> | <code>interface{}</code> | A list of bot alias locale settings to add to the bot alias. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasTags">BotAliasTags</a></code> | <code>interface{}</code> | A list of tags to add to the bot alias. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botVersion">BotVersion</a></code> | <code>*string</code> | The version of a bot. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.conversationLogSettings">ConversationLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a></code> | Contains information about code hooks that Amazon Lex calls during a conversation. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.description">Description</a></code> | <code>*string</code> | A description of the bot alias. Use the description to help identify the bot alias in lists. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.sentimentAnalysisSettings">SentimentAnalysisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a></code> | Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BotAliasName`<sup>Required</sup> <a name="BotAliasName" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasName"></a>

```go
BotAliasName *string
```

- *Type:* *string

A unique identifier for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#bot_alias_name LexBotAlias#bot_alias_name}

---

##### `BotId`<sup>Required</sup> <a name="BotId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botId"></a>

```go
BotId *string
```

- *Type:* *string

Unique ID of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#bot_id LexBotAlias#bot_id}

---

##### `BotAliasLocaleSettings`<sup>Optional</sup> <a name="BotAliasLocaleSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasLocaleSettings"></a>

```go
BotAliasLocaleSettings interface{}
```

- *Type:* interface{}

A list of bot alias locale settings to add to the bot alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#bot_alias_locale_settings LexBotAlias#bot_alias_locale_settings}

---

##### `BotAliasTags`<sup>Optional</sup> <a name="BotAliasTags" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botAliasTags"></a>

```go
BotAliasTags interface{}
```

- *Type:* interface{}

A list of tags to add to the bot alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#bot_alias_tags LexBotAlias#bot_alias_tags}

---

##### `BotVersion`<sup>Optional</sup> <a name="BotVersion" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.botVersion"></a>

```go
BotVersion *string
```

- *Type:* *string

The version of a bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#bot_version LexBotAlias#bot_version}

---

##### `ConversationLogSettings`<sup>Optional</sup> <a name="ConversationLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.conversationLogSettings"></a>

```go
ConversationLogSettings LexBotAliasConversationLogSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings">LexBotAliasConversationLogSettings</a>

Contains information about code hooks that Amazon Lex calls during a conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#conversation_log_settings LexBotAlias#conversation_log_settings}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the bot alias. Use the description to help identify the bot alias in lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#description LexBotAlias#description}

---

##### `SentimentAnalysisSettings`<sup>Optional</sup> <a name="SentimentAnalysisSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConfig.property.sentimentAnalysisSettings"></a>

```go
SentimentAnalysisSettings LexBotAliasSentimentAnalysisSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings">LexBotAliasSentimentAnalysisSettings</a>

Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#sentiment_analysis_settings LexBotAlias#sentiment_analysis_settings}

---

### LexBotAliasConversationLogSettings <a name="LexBotAliasConversationLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

&lexbotalias.LexBotAliasConversationLogSettings {
	AudioLogSettings: interface{},
	TextLogSettings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings.property.audioLogSettings">AudioLogSettings</a></code> | <code>interface{}</code> | List of audio log settings. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings.property.textLogSettings">TextLogSettings</a></code> | <code>interface{}</code> | List of text log settings. |

---

##### `AudioLogSettings`<sup>Optional</sup> <a name="AudioLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings.property.audioLogSettings"></a>

```go
AudioLogSettings interface{}
```

- *Type:* interface{}

List of audio log settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#audio_log_settings LexBotAlias#audio_log_settings}

---

##### `TextLogSettings`<sup>Optional</sup> <a name="TextLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettings.property.textLogSettings"></a>

```go
TextLogSettings interface{}
```

- *Type:* interface{}

List of text log settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#text_log_settings LexBotAlias#text_log_settings}

---

### LexBotAliasConversationLogSettingsAudioLogSettings <a name="LexBotAliasConversationLogSettingsAudioLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

&lexbotalias.LexBotAliasConversationLogSettingsAudioLogSettings {
	Destination: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination">LexBotAliasConversationLogSettingsAudioLogSettingsDestination</a></code> | The location of audio log files collected when conversation logging is enabled for a bot. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings.property.destination"></a>

```go
Destination LexBotAliasConversationLogSettingsAudioLogSettingsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination">LexBotAliasConversationLogSettingsAudioLogSettingsDestination</a>

The location of audio log files collected when conversation logging is enabled for a bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#destination LexBotAlias#destination}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettings.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}.

---

### LexBotAliasConversationLogSettingsAudioLogSettingsDestination <a name="LexBotAliasConversationLogSettingsAudioLogSettingsDestination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

&lexbotalias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination {
	S3Bucket: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination.property.s3Bucket">S3Bucket</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a></code> | Specifies an Amazon S3 bucket for logging audio conversations. |

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination.property.s3Bucket"></a>

```go
S3Bucket LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a>

Specifies an Amazon S3 bucket for logging audio conversations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#s3_bucket LexBotAlias#s3_bucket}

---

### LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket <a name="LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

&lexbotalias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket {
	KmsKeyArn: *string,
	LogPrefix: *string,
	S3BucketArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.logPrefix">LogPrefix</a></code> | <code>*string</code> | The Amazon S3 key of the deployment package. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.s3BucketArn">S3BucketArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#kms_key_arn LexBotAlias#kms_key_arn}

---

##### `LogPrefix`<sup>Optional</sup> <a name="LogPrefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.logPrefix"></a>

```go
LogPrefix *string
```

- *Type:* *string

The Amazon S3 key of the deployment package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#log_prefix LexBotAlias#log_prefix}

---

##### `S3BucketArn`<sup>Optional</sup> <a name="S3BucketArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.property.s3BucketArn"></a>

```go
S3BucketArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#s3_bucket_arn LexBotAlias#s3_bucket_arn}

---

### LexBotAliasConversationLogSettingsTextLogSettings <a name="LexBotAliasConversationLogSettingsTextLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

&lexbotalias.LexBotAliasConversationLogSettingsTextLogSettings {
	Destination: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination">LexBotAliasConversationLogSettingsTextLogSettingsDestination</a></code> | Defines the Amazon CloudWatch Logs destination log group for conversation text logs. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings.property.destination"></a>

```go
Destination LexBotAliasConversationLogSettingsTextLogSettingsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination">LexBotAliasConversationLogSettingsTextLogSettingsDestination</a>

Defines the Amazon CloudWatch Logs destination log group for conversation text logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#destination LexBotAlias#destination}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettings.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}.

---

### LexBotAliasConversationLogSettingsTextLogSettingsDestination <a name="LexBotAliasConversationLogSettingsTextLogSettingsDestination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

&lexbotalias.LexBotAliasConversationLogSettingsTextLogSettingsDestination {
	Cloudwatch: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination.property.cloudwatch">Cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#cloudwatch LexBotAlias#cloudwatch}. |

---

##### `Cloudwatch`<sup>Optional</sup> <a name="Cloudwatch" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination.property.cloudwatch"></a>

```go
Cloudwatch LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#cloudwatch LexBotAlias#cloudwatch}.

---

### LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch <a name="LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

&lexbotalias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch {
	CloudwatchLogGroupArn: *string,
	LogPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>*string</code> | A string used to identify the groupArn for the Cloudwatch Log Group. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.property.logPrefix">LogPrefix</a></code> | <code>*string</code> | A string containing the value for the Log Prefix. |

---

##### `CloudwatchLogGroupArn`<sup>Optional</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.property.cloudwatchLogGroupArn"></a>

```go
CloudwatchLogGroupArn *string
```

- *Type:* *string

A string used to identify the groupArn for the Cloudwatch Log Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#cloudwatch_log_group_arn LexBotAlias#cloudwatch_log_group_arn}

---

##### `LogPrefix`<sup>Optional</sup> <a name="LogPrefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.property.logPrefix"></a>

```go
LogPrefix *string
```

- *Type:* *string

A string containing the value for the Log Prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#log_prefix LexBotAlias#log_prefix}

---

### LexBotAliasSentimentAnalysisSettings <a name="LexBotAliasSentimentAnalysisSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

&lexbotalias.LexBotAliasSentimentAnalysisSettings {
	DetectSentiment: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings.property.detectSentiment">DetectSentiment</a></code> | <code>interface{}</code> | Enable to call Amazon Comprehend for Sentiment natively within Lex. |

---

##### `DetectSentiment`<sup>Optional</sup> <a name="DetectSentiment" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettings.property.detectSentiment"></a>

```go
DetectSentiment interface{}
```

- *Type:* interface{}

Enable to call Amazon Comprehend for Sentiment natively within Lex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lex_bot_alias#detect_sentiment LexBotAlias#detect_sentiment}

---

## Classes <a name="Classes" id="Classes"></a>

### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resetCodeHookInterfaceVersion">ResetCodeHookInterfaceVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resetLambdaArn">ResetLambdaArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCodeHookInterfaceVersion` <a name="ResetCodeHookInterfaceVersion" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resetCodeHookInterfaceVersion"></a>

```go
func ResetCodeHookInterfaceVersion()
```

##### `ResetLambdaArn` <a name="ResetLambdaArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resetLambdaArn"></a>

```go
func ResetLambdaArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersionInput">CodeHookInterfaceVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersion">CodeHookInterfaceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeHookInterfaceVersionInput`<sup>Optional</sup> <a name="CodeHookInterfaceVersionInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersionInput"></a>

```go
func CodeHookInterfaceVersionInput() *string
```

- *Type:* *string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArnInput"></a>

```go
func LambdaArnInput() *string
```

- *Type:* *string

---

##### `CodeHookInterfaceVersion`<sup>Required</sup> <a name="CodeHookInterfaceVersion" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersion"></a>

```go
func CodeHookInterfaceVersion() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.putLambdaCodeHook">PutLambdaCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resetLambdaCodeHook">ResetLambdaCodeHook</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLambdaCodeHook` <a name="PutLambdaCodeHook" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.putLambdaCodeHook"></a>

```go
func PutLambdaCodeHook(value LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.putLambdaCodeHook.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a>

---

##### `ResetLambdaCodeHook` <a name="ResetLambdaCodeHook" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resetLambdaCodeHook"></a>

```go
func ResetLambdaCodeHook()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHook">LambdaCodeHook</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHookInput">LambdaCodeHookInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaCodeHook`<sup>Required</sup> <a name="LambdaCodeHook" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHook"></a>

```go
func LambdaCodeHook() LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference</a>

---

##### `LambdaCodeHookInput`<sup>Optional</sup> <a name="LambdaCodeHookInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHookInput"></a>

```go
func LambdaCodeHookInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference <a name="LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.putCodeHookSpecification">PutCodeHookSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resetCodeHookSpecification">ResetCodeHookSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeHookSpecification` <a name="PutCodeHookSpecification" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.putCodeHookSpecification"></a>

```go
func PutCodeHookSpecification(value LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.putCodeHookSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a>

---

##### `ResetCodeHookSpecification` <a name="ResetCodeHookSpecification" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resetCodeHookSpecification"></a>

```go
func ResetCodeHookSpecification()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecification">CodeHookSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecificationInput">CodeHookSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeHookSpecification`<sup>Required</sup> <a name="CodeHookSpecification" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecification"></a>

```go
func CodeHookSpecification() LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference</a>

---

##### `CodeHookSpecificationInput`<sup>Optional</sup> <a name="CodeHookSpecificationInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecificationInput"></a>

```go
func CodeHookSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotAliasBotAliasLocaleSettingsList <a name="LexBotAliasBotAliasLocaleSettingsList" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAliasBotAliasLocaleSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LexBotAliasBotAliasLocaleSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.get"></a>

```go
func Get(index *f64) LexBotAliasBotAliasLocaleSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotAliasBotAliasLocaleSettingsOutputReference <a name="LexBotAliasBotAliasLocaleSettingsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAliasBotAliasLocaleSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LexBotAliasBotAliasLocaleSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.putBotAliasLocaleSetting">PutBotAliasLocaleSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resetBotAliasLocaleSetting">ResetBotAliasLocaleSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resetLocaleId">ResetLocaleId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBotAliasLocaleSetting` <a name="PutBotAliasLocaleSetting" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.putBotAliasLocaleSetting"></a>

```go
func PutBotAliasLocaleSetting(value LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.putBotAliasLocaleSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a>

---

##### `ResetBotAliasLocaleSetting` <a name="ResetBotAliasLocaleSetting" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resetBotAliasLocaleSetting"></a>

```go
func ResetBotAliasLocaleSetting()
```

##### `ResetLocaleId` <a name="ResetLocaleId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.resetLocaleId"></a>

```go
func ResetLocaleId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSetting">BotAliasLocaleSetting</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSettingInput">BotAliasLocaleSettingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.localeIdInput">LocaleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.localeId">LocaleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BotAliasLocaleSetting`<sup>Required</sup> <a name="BotAliasLocaleSetting" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSetting"></a>

```go
func BotAliasLocaleSetting() LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference">LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference</a>

---

##### `BotAliasLocaleSettingInput`<sup>Optional</sup> <a name="BotAliasLocaleSettingInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSettingInput"></a>

```go
func BotAliasLocaleSettingInput() interface{}
```

- *Type:* interface{}

---

##### `LocaleIdInput`<sup>Optional</sup> <a name="LocaleIdInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.localeIdInput"></a>

```go
func LocaleIdInput() *string
```

- *Type:* *string

---

##### `LocaleId`<sup>Required</sup> <a name="LocaleId" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.localeId"></a>

```go
func LocaleId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasLocaleSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotAliasBotAliasTagsList <a name="LexBotAliasBotAliasTagsList" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAliasBotAliasTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LexBotAliasBotAliasTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.get"></a>

```go
func Get(index *f64) LexBotAliasBotAliasTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotAliasBotAliasTagsOutputReference <a name="LexBotAliasBotAliasTagsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAliasBotAliasTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LexBotAliasBotAliasTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasBotAliasTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference <a name="LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.putS3Bucket">PutS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Bucket` <a name="PutS3Bucket" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.putS3Bucket"></a>

```go
func PutS3Bucket(value LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.putS3Bucket.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a>

---

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resetS3Bucket"></a>

```go
func ResetS3Bucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference</a>

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3BucketInput"></a>

```go
func S3BucketInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference <a name="LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetLogPrefix">ResetLogPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetS3BucketArn">ResetS3BucketArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetLogPrefix` <a name="ResetLogPrefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetLogPrefix"></a>

```go
func ResetLogPrefix()
```

##### `ResetS3BucketArn` <a name="ResetS3BucketArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resetS3BucketArn"></a>

```go
func ResetS3BucketArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefixInput">LogPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArnInput">S3BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefix">LogPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArn">S3BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `LogPrefixInput`<sup>Optional</sup> <a name="LogPrefixInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefixInput"></a>

```go
func LogPrefixInput() *string
```

- *Type:* *string

---

##### `S3BucketArnInput`<sup>Optional</sup> <a name="S3BucketArnInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArnInput"></a>

```go
func S3BucketArnInput() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `LogPrefix`<sup>Required</sup> <a name="LogPrefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefix"></a>

```go
func LogPrefix() *string
```

- *Type:* *string

---

##### `S3BucketArn`<sup>Required</sup> <a name="S3BucketArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArn"></a>

```go
func S3BucketArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotAliasConversationLogSettingsAudioLogSettingsList <a name="LexBotAliasConversationLogSettingsAudioLogSettingsList" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAliasConversationLogSettingsAudioLogSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LexBotAliasConversationLogSettingsAudioLogSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.get"></a>

```go
func Get(index *f64) LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference <a name="LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestination` <a name="PutDestination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.putDestination"></a>

```go
func PutDestination(value LexBotAliasConversationLogSettingsAudioLogSettingsDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestination">LexBotAliasConversationLogSettingsAudioLogSettingsDestination</a>

---

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destination"></a>

```go
func Destination() LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference">LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotAliasConversationLogSettingsOutputReference <a name="LexBotAliasConversationLogSettingsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAliasConversationLogSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LexBotAliasConversationLogSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putAudioLogSettings">PutAudioLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putTextLogSettings">PutTextLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resetAudioLogSettings">ResetAudioLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resetTextLogSettings">ResetTextLogSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAudioLogSettings` <a name="PutAudioLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putAudioLogSettings"></a>

```go
func PutAudioLogSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putAudioLogSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTextLogSettings` <a name="PutTextLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putTextLogSettings"></a>

```go
func PutTextLogSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.putTextLogSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAudioLogSettings` <a name="ResetAudioLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resetAudioLogSettings"></a>

```go
func ResetAudioLogSettings()
```

##### `ResetTextLogSettings` <a name="ResetTextLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.resetTextLogSettings"></a>

```go
func ResetTextLogSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.audioLogSettings">AudioLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList">LexBotAliasConversationLogSettingsAudioLogSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.textLogSettings">TextLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList">LexBotAliasConversationLogSettingsTextLogSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.audioLogSettingsInput">AudioLogSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.textLogSettingsInput">TextLogSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioLogSettings`<sup>Required</sup> <a name="AudioLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.audioLogSettings"></a>

```go
func AudioLogSettings() LexBotAliasConversationLogSettingsAudioLogSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsAudioLogSettingsList">LexBotAliasConversationLogSettingsAudioLogSettingsList</a>

---

##### `TextLogSettings`<sup>Required</sup> <a name="TextLogSettings" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.textLogSettings"></a>

```go
func TextLogSettings() LexBotAliasConversationLogSettingsTextLogSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList">LexBotAliasConversationLogSettingsTextLogSettingsList</a>

---

##### `AudioLogSettingsInput`<sup>Optional</sup> <a name="AudioLogSettingsInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.audioLogSettingsInput"></a>

```go
func AudioLogSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `TextLogSettingsInput`<sup>Optional</sup> <a name="TextLogSettingsInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.textLogSettingsInput"></a>

```go
func TextLogSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference <a name="LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resetCloudwatchLogGroupArn">ResetCloudwatchLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resetLogPrefix">ResetLogPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudwatchLogGroupArn` <a name="ResetCloudwatchLogGroupArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resetCloudwatchLogGroupArn"></a>

```go
func ResetCloudwatchLogGroupArn()
```

##### `ResetLogPrefix` <a name="ResetLogPrefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resetLogPrefix"></a>

```go
func ResetLogPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArnInput">CloudwatchLogGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefixInput">LogPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefix">LogPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="CloudwatchLogGroupArnInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArnInput"></a>

```go
func CloudwatchLogGroupArnInput() *string
```

- *Type:* *string

---

##### `LogPrefixInput`<sup>Optional</sup> <a name="LogPrefixInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefixInput"></a>

```go
func LogPrefixInput() *string
```

- *Type:* *string

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArn"></a>

```go
func CloudwatchLogGroupArn() *string
```

- *Type:* *string

---

##### `LogPrefix`<sup>Required</sup> <a name="LogPrefix" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefix"></a>

```go
func LogPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference <a name="LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.putCloudwatch">PutCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resetCloudwatch">ResetCloudwatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatch` <a name="PutCloudwatch" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.putCloudwatch"></a>

```go
func PutCloudwatch(value LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.putCloudwatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a>

---

##### `ResetCloudwatch` <a name="ResetCloudwatch" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resetCloudwatch"></a>

```go
func ResetCloudwatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatch">Cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatchInput">CloudwatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cloudwatch`<sup>Required</sup> <a name="Cloudwatch" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatch"></a>

```go
func Cloudwatch() LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference">LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference</a>

---

##### `CloudwatchInput`<sup>Optional</sup> <a name="CloudwatchInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatchInput"></a>

```go
func CloudwatchInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotAliasConversationLogSettingsTextLogSettingsList <a name="LexBotAliasConversationLogSettingsTextLogSettingsList" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAliasConversationLogSettingsTextLogSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LexBotAliasConversationLogSettingsTextLogSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.get"></a>

```go
func Get(index *f64) LexBotAliasConversationLogSettingsTextLogSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotAliasConversationLogSettingsTextLogSettingsOutputReference <a name="LexBotAliasConversationLogSettingsTextLogSettingsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAliasConversationLogSettingsTextLogSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LexBotAliasConversationLogSettingsTextLogSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestination` <a name="PutDestination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.putDestination"></a>

```go
func PutDestination(value LexBotAliasConversationLogSettingsTextLogSettingsDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestination">LexBotAliasConversationLogSettingsTextLogSettingsDestination</a>

---

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference">LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destination"></a>

```go
func Destination() LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference">LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LexBotAliasSentimentAnalysisSettingsOutputReference <a name="LexBotAliasSentimentAnalysisSettingsOutputReference" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lexbotalias"

lexbotalias.NewLexBotAliasSentimentAnalysisSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LexBotAliasSentimentAnalysisSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.resetDetectSentiment">ResetDetectSentiment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDetectSentiment` <a name="ResetDetectSentiment" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.resetDetectSentiment"></a>

```go
func ResetDetectSentiment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentimentInput">DetectSentimentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentiment">DetectSentiment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DetectSentimentInput`<sup>Optional</sup> <a name="DetectSentimentInput" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentimentInput"></a>

```go
func DetectSentimentInput() interface{}
```

- *Type:* interface{}

---

##### `DetectSentiment`<sup>Required</sup> <a name="DetectSentiment" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentiment"></a>

```go
func DetectSentiment() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lexBotAlias.LexBotAliasSentimentAnalysisSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



