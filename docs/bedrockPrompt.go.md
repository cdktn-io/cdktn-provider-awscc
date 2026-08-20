# `bedrockPrompt` Submodule <a name="`bedrockPrompt` Submodule" id="@cdktn/provider-awscc.bedrockPrompt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockPrompt <a name="BedrockPrompt" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt awscc_bedrock_prompt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPrompt(scope Construct, id *string, config BedrockPromptConfig) BedrockPrompt
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig">BedrockPromptConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig">BedrockPromptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.putVariants">PutVariants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetCustomerEncryptionKeyArn">ResetCustomerEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetDefaultVariant">ResetDefaultVariant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetVariants">ResetVariants</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutVariants` <a name="PutVariants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.putVariants"></a>

```go
func PutVariants(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.putVariants.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomerEncryptionKeyArn` <a name="ResetCustomerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetCustomerEncryptionKeyArn"></a>

```go
func ResetCustomerEncryptionKeyArn()
```

##### `ResetDefaultVariant` <a name="ResetDefaultVariant" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetDefaultVariant"></a>

```go
func ResetDefaultVariant()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVariants` <a name="ResetVariants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.resetVariants"></a>

```go
func ResetVariants()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockPrompt resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.BedrockPrompt_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.BedrockPrompt_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.BedrockPrompt_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.BedrockPrompt_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BedrockPrompt resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockPrompt to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockPrompt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BedrockPrompt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.promptId">PromptId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.variants">Variants</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList">BedrockPromptVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.customerEncryptionKeyArnInput">CustomerEncryptionKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.defaultVariantInput">DefaultVariantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.variantsInput">VariantsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.customerEncryptionKeyArn">CustomerEncryptionKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.defaultVariant">DefaultVariant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PromptId`<sup>Required</sup> <a name="PromptId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.promptId"></a>

```go
func PromptId() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Variants`<sup>Required</sup> <a name="Variants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.variants"></a>

```go
func Variants() BedrockPromptVariantsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList">BedrockPromptVariantsList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `CustomerEncryptionKeyArnInput`<sup>Optional</sup> <a name="CustomerEncryptionKeyArnInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.customerEncryptionKeyArnInput"></a>

```go
func CustomerEncryptionKeyArnInput() *string
```

- *Type:* *string

---

##### `DefaultVariantInput`<sup>Optional</sup> <a name="DefaultVariantInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.defaultVariantInput"></a>

```go
func DefaultVariantInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VariantsInput`<sup>Optional</sup> <a name="VariantsInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.variantsInput"></a>

```go
func VariantsInput() interface{}
```

- *Type:* interface{}

---

##### `CustomerEncryptionKeyArn`<sup>Required</sup> <a name="CustomerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.customerEncryptionKeyArn"></a>

```go
func CustomerEncryptionKeyArn() *string
```

- *Type:* *string

---

##### `DefaultVariant`<sup>Required</sup> <a name="DefaultVariant" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.defaultVariant"></a>

```go
func DefaultVariant() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPrompt.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockPromptConfig <a name="BedrockPromptConfig" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	CustomerEncryptionKeyArn: *string,
	DefaultVariant: *string,
	Description: *string,
	Tags: *map[string]*string,
	Variants: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.name">Name</a></code> | <code>*string</code> | Name for a prompt resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.customerEncryptionKeyArn">CustomerEncryptionKeyArn</a></code> | <code>*string</code> | A KMS key ARN. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.defaultVariant">DefaultVariant</a></code> | <code>*string</code> | Name for a variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.description">Description</a></code> | <code>*string</code> | Name for a prompt resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | A map of tag keys and values. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.variants">Variants</a></code> | <code>interface{}</code> | List of prompt variants. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name for a prompt resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

##### `CustomerEncryptionKeyArn`<sup>Optional</sup> <a name="CustomerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.customerEncryptionKeyArn"></a>

```go
CustomerEncryptionKeyArn *string
```

- *Type:* *string

A KMS key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#customer_encryption_key_arn BedrockPrompt#customer_encryption_key_arn}

---

##### `DefaultVariant`<sup>Optional</sup> <a name="DefaultVariant" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.defaultVariant"></a>

```go
DefaultVariant *string
```

- *Type:* *string

Name for a variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#default_variant BedrockPrompt#default_variant}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Name for a prompt resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#description BedrockPrompt#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tags BedrockPrompt#tags}

---

##### `Variants`<sup>Optional</sup> <a name="Variants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptConfig.property.variants"></a>

```go
Variants interface{}
```

- *Type:* interface{}

List of prompt variants.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#variants BedrockPrompt#variants}

---

### BedrockPromptVariants <a name="BedrockPromptVariants" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariants {
	AdditionalModelRequestFields: *string,
	GenAiResource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource,
	InferenceConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration,
	Metadata: interface{},
	ModelId: *string,
	Name: *string,
	TemplateConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration,
	TemplateType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.additionalModelRequestFields">AdditionalModelRequestFields</a></code> | <code>*string</code> | Contains model-specific configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.genAiResource">GenAiResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a></code> | Target resource to invoke with Prompt. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.inferenceConfiguration">InferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a></code> | Model inference configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.metadata">Metadata</a></code> | <code>interface{}</code> | List of metadata to associate with the prompt variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.modelId">ModelId</a></code> | <code>*string</code> | ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.name">Name</a></code> | <code>*string</code> | Name for a variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.templateConfiguration">TemplateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a></code> | Prompt template configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.templateType">TemplateType</a></code> | <code>*string</code> | Prompt template type. |

---

##### `AdditionalModelRequestFields`<sup>Optional</sup> <a name="AdditionalModelRequestFields" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.additionalModelRequestFields"></a>

```go
AdditionalModelRequestFields *string
```

- *Type:* *string

Contains model-specific configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#additional_model_request_fields BedrockPrompt#additional_model_request_fields}

---

##### `GenAiResource`<sup>Optional</sup> <a name="GenAiResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.genAiResource"></a>

```go
GenAiResource BedrockPromptVariantsGenAiResource
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a>

Target resource to invoke with Prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#gen_ai_resource BedrockPrompt#gen_ai_resource}

---

##### `InferenceConfiguration`<sup>Optional</sup> <a name="InferenceConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.inferenceConfiguration"></a>

```go
InferenceConfiguration BedrockPromptVariantsInferenceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a>

Model inference configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#inference_configuration BedrockPrompt#inference_configuration}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.metadata"></a>

```go
Metadata interface{}
```

- *Type:* interface{}

List of metadata to associate with the prompt variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#metadata BedrockPrompt#metadata}

---

##### `ModelId`<sup>Optional</sup> <a name="ModelId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.modelId"></a>

```go
ModelId *string
```

- *Type:* *string

ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#model_id BedrockPrompt#model_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name for a variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

##### `TemplateConfiguration`<sup>Optional</sup> <a name="TemplateConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.templateConfiguration"></a>

```go
TemplateConfiguration BedrockPromptVariantsTemplateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a>

Prompt template configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#template_configuration BedrockPrompt#template_configuration}

---

##### `TemplateType`<sup>Optional</sup> <a name="TemplateType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariants.property.templateType"></a>

```go
TemplateType *string
```

- *Type:* *string

Prompt template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#template_type BedrockPrompt#template_type}

---

### BedrockPromptVariantsGenAiResource <a name="BedrockPromptVariantsGenAiResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsGenAiResource {
	Agent: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource.property.agent">Agent</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a></code> | Target Agent to invoke with Prompt. |

---

##### `Agent`<sup>Optional</sup> <a name="Agent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource.property.agent"></a>

```go
Agent BedrockPromptVariantsGenAiResourceAgent
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a>

Target Agent to invoke with Prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#agent BedrockPrompt#agent}

---

### BedrockPromptVariantsGenAiResourceAgent <a name="BedrockPromptVariantsGenAiResourceAgent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsGenAiResourceAgent {
	AgentIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent.property.agentIdentifier">AgentIdentifier</a></code> | <code>*string</code> | Arn representation of the Agent Alias. |

---

##### `AgentIdentifier`<sup>Optional</sup> <a name="AgentIdentifier" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent.property.agentIdentifier"></a>

```go
AgentIdentifier *string
```

- *Type:* *string

Arn representation of the Agent Alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#agent_identifier BedrockPrompt#agent_identifier}

---

### BedrockPromptVariantsInferenceConfiguration <a name="BedrockPromptVariantsInferenceConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsInferenceConfiguration {
	Text: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration.property.text">Text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a></code> | Prompt model inference configuration. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration.property.text"></a>

```go
Text BedrockPromptVariantsInferenceConfigurationText
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a>

Prompt model inference configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

### BedrockPromptVariantsInferenceConfigurationText <a name="BedrockPromptVariantsInferenceConfigurationText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsInferenceConfigurationText {
	MaxTokens: *f64,
	StopSequences: *[]*string,
	Temperature: *f64,
	TopP: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | Maximum length of output. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.stopSequences">StopSequences</a></code> | <code>*[]*string</code> | List of stop sequences. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.temperature">Temperature</a></code> | <code>*f64</code> | Controls randomness, higher values increase diversity. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.topP">TopP</a></code> | <code>*f64</code> | Cumulative probability cutoff for token selection. |

---

##### `MaxTokens`<sup>Optional</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.maxTokens"></a>

```go
MaxTokens *f64
```

- *Type:* *f64

Maximum length of output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#max_tokens BedrockPrompt#max_tokens}

---

##### `StopSequences`<sup>Optional</sup> <a name="StopSequences" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.stopSequences"></a>

```go
StopSequences *[]*string
```

- *Type:* *[]*string

List of stop sequences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#stop_sequences BedrockPrompt#stop_sequences}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.temperature"></a>

```go
Temperature *f64
```

- *Type:* *f64

Controls randomness, higher values increase diversity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#temperature BedrockPrompt#temperature}

---

##### `TopP`<sup>Optional</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText.property.topP"></a>

```go
TopP *f64
```

- *Type:* *f64

Cumulative probability cutoff for token selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#top_p BedrockPrompt#top_p}

---

### BedrockPromptVariantsMetadata <a name="BedrockPromptVariantsMetadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsMetadata {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.property.key">Key</a></code> | <code>*string</code> | The key of a metadata tag for a prompt variant. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.property.value">Value</a></code> | <code>*string</code> | The value of a metadata tag for a prompt variant. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of a metadata tag for a prompt variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#key BedrockPrompt#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadata.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of a metadata tag for a prompt variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#value BedrockPrompt#value}

---

### BedrockPromptVariantsTemplateConfiguration <a name="BedrockPromptVariantsTemplateConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfiguration {
	Chat: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat,
	Text: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.property.chat">Chat</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a></code> | Configuration for chat prompt template. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.property.text">Text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a></code> | Configuration for text prompt template. |

---

##### `Chat`<sup>Optional</sup> <a name="Chat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.property.chat"></a>

```go
Chat BedrockPromptVariantsTemplateConfigurationChat
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a>

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#chat BedrockPrompt#chat}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration.property.text"></a>

```go
Text BedrockPromptVariantsTemplateConfigurationText
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a>

Configuration for text prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

### BedrockPromptVariantsTemplateConfigurationChat <a name="BedrockPromptVariantsTemplateConfigurationChat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationChat {
	InputVariables: interface{},
	Messages: interface{},
	SystemAttribute: interface{},
	ToolConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.inputVariables">InputVariables</a></code> | <code>interface{}</code> | List of input variables. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.messages">Messages</a></code> | <code>interface{}</code> | List of messages for chat prompt template. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.systemAttribute">SystemAttribute</a></code> | <code>interface{}</code> | Configuration for chat prompt template. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.toolConfiguration">ToolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a></code> | Tool configuration. |

---

##### `InputVariables`<sup>Optional</sup> <a name="InputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.inputVariables"></a>

```go
InputVariables interface{}
```

- *Type:* interface{}

List of input variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#input_variables BedrockPrompt#input_variables}

---

##### `Messages`<sup>Optional</sup> <a name="Messages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.messages"></a>

```go
Messages interface{}
```

- *Type:* interface{}

List of messages for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#messages BedrockPrompt#messages}

---

##### `SystemAttribute`<sup>Optional</sup> <a name="SystemAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.systemAttribute"></a>

```go
SystemAttribute interface{}
```

- *Type:* interface{}

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#system BedrockPrompt#system}

---

##### `ToolConfiguration`<sup>Optional</sup> <a name="ToolConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat.property.toolConfiguration"></a>

```go
ToolConfiguration BedrockPromptVariantsTemplateConfigurationChatToolConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a>

Tool configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tool_configuration BedrockPrompt#tool_configuration}

---

### BedrockPromptVariantsTemplateConfigurationChatInputVariables <a name="BedrockPromptVariantsTemplateConfigurationChatInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables.property.name">Name</a></code> | <code>*string</code> | Name for an input variable. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariables.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name for an input variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

### BedrockPromptVariantsTemplateConfigurationChatMessages <a name="BedrockPromptVariantsTemplateConfigurationChatMessages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationChatMessages {
	Content: interface{},
	Role: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.property.content">Content</a></code> | <code>interface{}</code> | List of Content Blocks. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.property.role">Role</a></code> | <code>*string</code> | Conversation roles for the chat prompt. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.property.content"></a>

```go
Content interface{}
```

- *Type:* interface{}

List of Content Blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#content BedrockPrompt#content}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessages.property.role"></a>

```go
Role *string
```

- *Type:* *string

Conversation roles for the chat prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#role BedrockPrompt#role}

---

### BedrockPromptVariantsTemplateConfigurationChatMessagesContent <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent {
	CachePoint: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint,
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a></code> | CachePointBlock. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.property.text">Text</a></code> | <code>*string</code> | Configuration for chat prompt template. |

---

##### `CachePoint`<sup>Optional</sup> <a name="CachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.property.cachePoint"></a>

```go
CachePoint BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContent.property.text"></a>

```go
Text *string
```

- *Type:* *string

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

### BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint.property.type">Type</a></code> | <code>*string</code> | CachePoint types for CachePointBlock. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint.property.type"></a>

```go
Type *string
```

- *Type:* *string

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

### BedrockPromptVariantsTemplateConfigurationChatSystem <a name="BedrockPromptVariantsTemplateConfigurationChatSystem" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationChatSystem {
	CachePoint: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint,
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a></code> | CachePointBlock. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.property.text">Text</a></code> | <code>*string</code> | Configuration for chat prompt template. |

---

##### `CachePoint`<sup>Optional</sup> <a name="CachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.property.cachePoint"></a>

```go
CachePoint BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a>

CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystem.property.text"></a>

```go
Text *string
```

- *Type:* *string

Configuration for chat prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

### BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint <a name="BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint.property.type">Type</a></code> | <code>*string</code> | CachePoint types for CachePointBlock. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint.property.type"></a>

```go
Type *string
```

- *Type:* *string

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfiguration <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration {
	ToolChoice: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice,
	Tools: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.property.toolChoice">ToolChoice</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a></code> | Tool choice. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.property.tools">Tools</a></code> | <code>interface{}</code> | List of Tools. |

---

##### `ToolChoice`<sup>Optional</sup> <a name="ToolChoice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.property.toolChoice"></a>

```go
ToolChoice BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tool_choice BedrockPrompt#tool_choice}

---

##### `Tools`<sup>Optional</sup> <a name="Tools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration.property.tools"></a>

```go
Tools interface{}
```

- *Type:* interface{}

List of Tools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tools BedrockPrompt#tools}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice {
	Any: *string,
	Auto: *string,
	Tool: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.any">Any</a></code> | <code>*string</code> | Any Tool choice. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.auto">Auto</a></code> | <code>*string</code> | Auto Tool choice. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.tool">Tool</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a></code> | Specific Tool choice. |

---

##### `Any`<sup>Optional</sup> <a name="Any" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.any"></a>

```go
Any *string
```

- *Type:* *string

Any Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#any BedrockPrompt#any}

---

##### `Auto`<sup>Optional</sup> <a name="Auto" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.auto"></a>

```go
Auto *string
```

- *Type:* *string

Auto Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#auto BedrockPrompt#auto}

---

##### `Tool`<sup>Optional</sup> <a name="Tool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.property.tool"></a>

```go
Tool BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

Specific Tool choice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tool BedrockPrompt#tool}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.property.name">Name</a></code> | <code>*string</code> | Tool name. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.property.name"></a>

```go
Name *string
```

- *Type:* *string

Tool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools {
	CachePoint: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint,
	ToolSpec: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a></code> | CachePointBlock. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.property.toolSpec">ToolSpec</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a></code> | Tool specification. |

---

##### `CachePoint`<sup>Optional</sup> <a name="CachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.property.cachePoint"></a>

```go
CachePoint BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}

---

##### `ToolSpec`<sup>Optional</sup> <a name="ToolSpec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.property.toolSpec"></a>

```go
ToolSpec BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

Tool specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tool_spec BedrockPrompt#tool_spec}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.property.type">Type</a></code> | <code>*string</code> | CachePoint types for CachePointBlock. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.property.type"></a>

```go
Type *string
```

- *Type:* *string

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec {
	Description: *string,
	InputSchema: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#description BedrockPrompt#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.inputSchema">InputSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a></code> | Tool input schema. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.name">Name</a></code> | <code>*string</code> | Tool name. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#description BedrockPrompt#description}.

---

##### `InputSchema`<sup>Optional</sup> <a name="InputSchema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.inputSchema"></a>

```go
InputSchema BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

Tool input schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#input_schema BedrockPrompt#input_schema}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.property.name"></a>

```go
Name *string
```

- *Type:* *string

Tool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema {
	Json: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.property.json">Json</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#json BedrockPrompt#json}. |

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.property.json"></a>

```go
Json *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#json BedrockPrompt#json}.

---

### BedrockPromptVariantsTemplateConfigurationText <a name="BedrockPromptVariantsTemplateConfigurationText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationText {
	CachePoint: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint,
	InputVariables: interface{},
	Text: *string,
	TextS3Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a></code> | CachePointBlock. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.inputVariables">InputVariables</a></code> | <code>interface{}</code> | List of input variables. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.text">Text</a></code> | <code>*string</code> | Prompt content for String prompt template. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.textS3Location">TextS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a></code> | The identifier for the S3 resource. |

---

##### `CachePoint`<sup>Optional</sup> <a name="CachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.cachePoint"></a>

```go
CachePoint BedrockPromptVariantsTemplateConfigurationTextCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a>

CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}

---

##### `InputVariables`<sup>Optional</sup> <a name="InputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.inputVariables"></a>

```go
InputVariables interface{}
```

- *Type:* interface{}

List of input variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#input_variables BedrockPrompt#input_variables}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.text"></a>

```go
Text *string
```

- *Type:* *string

Prompt content for String prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}

---

##### `TextS3Location`<sup>Optional</sup> <a name="TextS3Location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText.property.textS3Location"></a>

```go
TextS3Location BedrockPromptVariantsTemplateConfigurationTextTextS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a>

The identifier for the S3 resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text_s3_location BedrockPrompt#text_s3_location}

---

### BedrockPromptVariantsTemplateConfigurationTextCachePoint <a name="BedrockPromptVariantsTemplateConfigurationTextCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint.property.type">Type</a></code> | <code>*string</code> | CachePoint types for CachePointBlock. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint.property.type"></a>

```go
Type *string
```

- *Type:* *string

CachePoint types for CachePointBlock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}

---

### BedrockPromptVariantsTemplateConfigurationTextInputVariables <a name="BedrockPromptVariantsTemplateConfigurationTextInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables.property.name">Name</a></code> | <code>*string</code> | Name for an input variable. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariables.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name for an input variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}

---

### BedrockPromptVariantsTemplateConfigurationTextTextS3Location <a name="BedrockPromptVariantsTemplateConfigurationTextTextS3Location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

&bedrockprompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location {
	Bucket: *string,
	Key: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.bucket">Bucket</a></code> | <code>*string</code> | A bucket in S3. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.key">Key</a></code> | <code>*string</code> | A object key in S3. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.version">Version</a></code> | <code>*string</code> | The version of the the S3 object to use. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

A bucket in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#bucket BedrockPrompt#bucket}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.key"></a>

```go
Key *string
```

- *Type:* *string

A object key in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#key BedrockPrompt#key}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location.property.version"></a>

```go
Version *string
```

- *Type:* *string

The version of the the S3 object to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#version BedrockPrompt#version}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockPromptVariantsGenAiResourceAgentOutputReference <a name="BedrockPromptVariantsGenAiResourceAgentOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsGenAiResourceAgentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockPromptVariantsGenAiResourceAgentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resetAgentIdentifier">ResetAgentIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAgentIdentifier` <a name="ResetAgentIdentifier" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.resetAgentIdentifier"></a>

```go
func ResetAgentIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifierInput">AgentIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifier">AgentIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentIdentifierInput`<sup>Optional</sup> <a name="AgentIdentifierInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifierInput"></a>

```go
func AgentIdentifierInput() *string
```

- *Type:* *string

---

##### `AgentIdentifier`<sup>Required</sup> <a name="AgentIdentifier" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifier"></a>

```go
func AgentIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsGenAiResourceOutputReference <a name="BedrockPromptVariantsGenAiResourceOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsGenAiResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockPromptVariantsGenAiResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.putAgent">PutAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resetAgent">ResetAgent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgent` <a name="PutAgent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.putAgent"></a>

```go
func PutAgent(value BedrockPromptVariantsGenAiResourceAgent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.putAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgent">BedrockPromptVariantsGenAiResourceAgent</a>

---

##### `ResetAgent` <a name="ResetAgent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.resetAgent"></a>

```go
func ResetAgent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.agent">Agent</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference">BedrockPromptVariantsGenAiResourceAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.agentInput">AgentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.agent"></a>

```go
func Agent() BedrockPromptVariantsGenAiResourceAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceAgentOutputReference">BedrockPromptVariantsGenAiResourceAgentOutputReference</a>

---

##### `AgentInput`<sup>Optional</sup> <a name="AgentInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.agentInput"></a>

```go
func AgentInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsInferenceConfigurationOutputReference <a name="BedrockPromptVariantsInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsInferenceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockPromptVariantsInferenceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.putText">PutText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutText` <a name="PutText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.putText"></a>

```go
func PutText(value BedrockPromptVariantsInferenceConfigurationText)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationText">BedrockPromptVariantsInferenceConfigurationText</a>

---

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.text">Text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference">BedrockPromptVariantsInferenceConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.textInput">TextInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.text"></a>

```go
func Text() BedrockPromptVariantsInferenceConfigurationTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference">BedrockPromptVariantsInferenceConfigurationTextOutputReference</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.textInput"></a>

```go
func TextInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsInferenceConfigurationTextOutputReference <a name="BedrockPromptVariantsInferenceConfigurationTextOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsInferenceConfigurationTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockPromptVariantsInferenceConfigurationTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetMaxTokens">ResetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetStopSequences">ResetStopSequences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetTopP">ResetTopP</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxTokens` <a name="ResetMaxTokens" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetMaxTokens"></a>

```go
func ResetMaxTokens()
```

##### `ResetStopSequences` <a name="ResetStopSequences" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetStopSequences"></a>

```go
func ResetStopSequences()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetTemperature"></a>

```go
func ResetTemperature()
```

##### `ResetTopP` <a name="ResetTopP" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.resetTopP"></a>

```go
func ResetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokensInput">MaxTokensInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequencesInput">StopSequencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topPInput">TopPInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequences">StopSequences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topP">TopP</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxTokensInput`<sup>Optional</sup> <a name="MaxTokensInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokensInput"></a>

```go
func MaxTokensInput() *f64
```

- *Type:* *f64

---

##### `StopSequencesInput`<sup>Optional</sup> <a name="StopSequencesInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequencesInput"></a>

```go
func StopSequencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperatureInput"></a>

```go
func TemperatureInput() *f64
```

- *Type:* *f64

---

##### `TopPInput`<sup>Optional</sup> <a name="TopPInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topPInput"></a>

```go
func TopPInput() *f64
```

- *Type:* *f64

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokens"></a>

```go
func MaxTokens() *f64
```

- *Type:* *f64

---

##### `StopSequences`<sup>Required</sup> <a name="StopSequences" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequences"></a>

```go
func StopSequences() *[]*string
```

- *Type:* *[]*string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topP"></a>

```go
func TopP() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationTextOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsList <a name="BedrockPromptVariantsList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockPromptVariantsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.get"></a>

```go
func Get(index *f64) BedrockPromptVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsMetadataList <a name="BedrockPromptVariantsMetadataList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockPromptVariantsMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.get"></a>

```go
func Get(index *f64) BedrockPromptVariantsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsMetadataOutputReference <a name="BedrockPromptVariantsMetadataOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockPromptVariantsMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsOutputReference <a name="BedrockPromptVariantsOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockPromptVariantsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putGenAiResource">PutGenAiResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putInferenceConfiguration">PutInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putTemplateConfiguration">PutTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetAdditionalModelRequestFields">ResetAdditionalModelRequestFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetGenAiResource">ResetGenAiResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetInferenceConfiguration">ResetInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetModelId">ResetModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetTemplateConfiguration">ResetTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetTemplateType">ResetTemplateType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGenAiResource` <a name="PutGenAiResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putGenAiResource"></a>

```go
func PutGenAiResource(value BedrockPromptVariantsGenAiResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putGenAiResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResource">BedrockPromptVariantsGenAiResource</a>

---

##### `PutInferenceConfiguration` <a name="PutInferenceConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putInferenceConfiguration"></a>

```go
func PutInferenceConfiguration(value BedrockPromptVariantsInferenceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putInferenceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfiguration">BedrockPromptVariantsInferenceConfiguration</a>

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putMetadata"></a>

```go
func PutMetadata(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putMetadata.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTemplateConfiguration` <a name="PutTemplateConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putTemplateConfiguration"></a>

```go
func PutTemplateConfiguration(value BedrockPromptVariantsTemplateConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.putTemplateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfiguration">BedrockPromptVariantsTemplateConfiguration</a>

---

##### `ResetAdditionalModelRequestFields` <a name="ResetAdditionalModelRequestFields" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetAdditionalModelRequestFields"></a>

```go
func ResetAdditionalModelRequestFields()
```

##### `ResetGenAiResource` <a name="ResetGenAiResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetGenAiResource"></a>

```go
func ResetGenAiResource()
```

##### `ResetInferenceConfiguration` <a name="ResetInferenceConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetInferenceConfiguration"></a>

```go
func ResetInferenceConfiguration()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetModelId` <a name="ResetModelId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetModelId"></a>

```go
func ResetModelId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetTemplateConfiguration` <a name="ResetTemplateConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetTemplateConfiguration"></a>

```go
func ResetTemplateConfiguration()
```

##### `ResetTemplateType` <a name="ResetTemplateType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.resetTemplateType"></a>

```go
func ResetTemplateType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.genAiResource">GenAiResource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference">BedrockPromptVariantsGenAiResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.inferenceConfiguration">InferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference">BedrockPromptVariantsInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList">BedrockPromptVariantsMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateConfiguration">TemplateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference">BedrockPromptVariantsTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.additionalModelRequestFieldsInput">AdditionalModelRequestFieldsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.genAiResourceInput">GenAiResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.inferenceConfigurationInput">InferenceConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.metadataInput">MetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.modelIdInput">ModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateConfigurationInput">TemplateConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateTypeInput">TemplateTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.additionalModelRequestFields">AdditionalModelRequestFields</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateType">TemplateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GenAiResource`<sup>Required</sup> <a name="GenAiResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.genAiResource"></a>

```go
func GenAiResource() BedrockPromptVariantsGenAiResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsGenAiResourceOutputReference">BedrockPromptVariantsGenAiResourceOutputReference</a>

---

##### `InferenceConfiguration`<sup>Required</sup> <a name="InferenceConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.inferenceConfiguration"></a>

```go
func InferenceConfiguration() BedrockPromptVariantsInferenceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsInferenceConfigurationOutputReference">BedrockPromptVariantsInferenceConfigurationOutputReference</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.metadata"></a>

```go
func Metadata() BedrockPromptVariantsMetadataList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsMetadataList">BedrockPromptVariantsMetadataList</a>

---

##### `TemplateConfiguration`<sup>Required</sup> <a name="TemplateConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateConfiguration"></a>

```go
func TemplateConfiguration() BedrockPromptVariantsTemplateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference">BedrockPromptVariantsTemplateConfigurationOutputReference</a>

---

##### `AdditionalModelRequestFieldsInput`<sup>Optional</sup> <a name="AdditionalModelRequestFieldsInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.additionalModelRequestFieldsInput"></a>

```go
func AdditionalModelRequestFieldsInput() *string
```

- *Type:* *string

---

##### `GenAiResourceInput`<sup>Optional</sup> <a name="GenAiResourceInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.genAiResourceInput"></a>

```go
func GenAiResourceInput() interface{}
```

- *Type:* interface{}

---

##### `InferenceConfigurationInput`<sup>Optional</sup> <a name="InferenceConfigurationInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.inferenceConfigurationInput"></a>

```go
func InferenceConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.metadataInput"></a>

```go
func MetadataInput() interface{}
```

- *Type:* interface{}

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.modelIdInput"></a>

```go
func ModelIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TemplateConfigurationInput`<sup>Optional</sup> <a name="TemplateConfigurationInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateConfigurationInput"></a>

```go
func TemplateConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TemplateTypeInput`<sup>Optional</sup> <a name="TemplateTypeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateTypeInput"></a>

```go
func TemplateTypeInput() *string
```

- *Type:* *string

---

##### `AdditionalModelRequestFields`<sup>Required</sup> <a name="AdditionalModelRequestFields" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.additionalModelRequestFields"></a>

```go
func AdditionalModelRequestFields() *string
```

- *Type:* *string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TemplateType`<sup>Required</sup> <a name="TemplateType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.templateType"></a>

```go
func TemplateType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatInputVariablesList <a name="BedrockPromptVariantsTemplateConfigurationChatInputVariablesList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatInputVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockPromptVariantsTemplateConfigurationChatInputVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get"></a>

```go
func Get(index *f64) BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesContentList <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContentList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatMessagesContentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockPromptVariantsTemplateConfigurationChatMessagesContentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get"></a>

```go
func Get(index *f64) BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.putCachePoint">PutCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resetCachePoint">ResetCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCachePoint` <a name="PutCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.putCachePoint"></a>

```go
func PutCachePoint(value BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.putCachePoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

---

##### `ResetCachePoint` <a name="ResetCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resetCachePoint"></a>

```go
func ResetCachePoint()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePointInput">CachePointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CachePoint`<sup>Required</sup> <a name="CachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint"></a>

```go
func CachePoint() BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a>

---

##### `CachePointInput`<sup>Optional</sup> <a name="CachePointInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePointInput"></a>

```go
func CachePointInput() interface{}
```

- *Type:* interface{}

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesList <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatMessagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockPromptVariantsTemplateConfigurationChatMessagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.get"></a>

```go
func Get(index *f64) BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.putContent">PutContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContent` <a name="PutContent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.putContent"></a>

```go
func PutContent(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.putContent.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resetContent"></a>

```go
func ResetContent()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resetRole"></a>

```go
func ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList">BedrockPromptVariantsTemplateConfigurationChatMessagesContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.contentInput">ContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.content"></a>

```go
func Content() BedrockPromptVariantsTemplateConfigurationChatMessagesContentList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesContentList">BedrockPromptVariantsTemplateConfigurationChatMessagesContentList</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.contentInput"></a>

```go
func ContentInput() interface{}
```

- *Type:* interface{}

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockPromptVariantsTemplateConfigurationChatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putInputVariables">PutInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putMessages">PutMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putSystemAttribute">PutSystemAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putToolConfiguration">PutToolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetInputVariables">ResetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetMessages">ResetMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetSystemAttribute">ResetSystemAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetToolConfiguration">ResetToolConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputVariables` <a name="PutInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putInputVariables"></a>

```go
func PutInputVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putInputVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMessages` <a name="PutMessages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putMessages"></a>

```go
func PutMessages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putMessages.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSystemAttribute` <a name="PutSystemAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putSystemAttribute"></a>

```go
func PutSystemAttribute(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putSystemAttribute.parameter.value"></a>

- *Type:* interface{}

---

##### `PutToolConfiguration` <a name="PutToolConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putToolConfiguration"></a>

```go
func PutToolConfiguration(value BedrockPromptVariantsTemplateConfigurationChatToolConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.putToolConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfiguration">BedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a>

---

##### `ResetInputVariables` <a name="ResetInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetInputVariables"></a>

```go
func ResetInputVariables()
```

##### `ResetMessages` <a name="ResetMessages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetMessages"></a>

```go
func ResetMessages()
```

##### `ResetSystemAttribute` <a name="ResetSystemAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetSystemAttribute"></a>

```go
func ResetSystemAttribute()
```

##### `ResetToolConfiguration` <a name="ResetToolConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.resetToolConfiguration"></a>

```go
func ResetToolConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList">BedrockPromptVariantsTemplateConfigurationChatInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messages">Messages</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList">BedrockPromptVariantsTemplateConfigurationChatMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttribute">SystemAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList">BedrockPromptVariantsTemplateConfigurationChatSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration">ToolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariablesInput">InputVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messagesInput">MessagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttributeInput">SystemAttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfigurationInput">ToolConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariables"></a>

```go
func InputVariables() BedrockPromptVariantsTemplateConfigurationChatInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatInputVariablesList">BedrockPromptVariantsTemplateConfigurationChatInputVariablesList</a>

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messages"></a>

```go
func Messages() BedrockPromptVariantsTemplateConfigurationChatMessagesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatMessagesList">BedrockPromptVariantsTemplateConfigurationChatMessagesList</a>

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttribute"></a>

```go
func SystemAttribute() BedrockPromptVariantsTemplateConfigurationChatSystemList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList">BedrockPromptVariantsTemplateConfigurationChatSystemList</a>

---

##### `ToolConfiguration`<sup>Required</sup> <a name="ToolConfiguration" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration"></a>

```go
func ToolConfiguration() BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference</a>

---

##### `InputVariablesInput`<sup>Optional</sup> <a name="InputVariablesInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariablesInput"></a>

```go
func InputVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `MessagesInput`<sup>Optional</sup> <a name="MessagesInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messagesInput"></a>

```go
func MessagesInput() interface{}
```

- *Type:* interface{}

---

##### `SystemAttributeInput`<sup>Optional</sup> <a name="SystemAttributeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttributeInput"></a>

```go
func SystemAttributeInput() interface{}
```

- *Type:* interface{}

---

##### `ToolConfigurationInput`<sup>Optional</sup> <a name="ToolConfigurationInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfigurationInput"></a>

```go
func ToolConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatSystemList <a name="BedrockPromptVariantsTemplateConfigurationChatSystemList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatSystemList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockPromptVariantsTemplateConfigurationChatSystemList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.get"></a>

```go
func Get(index *f64) BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.putCachePoint">PutCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resetCachePoint">ResetCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCachePoint` <a name="PutCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.putCachePoint"></a>

```go
func PutCachePoint(value BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.putCachePoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a>

---

##### `ResetCachePoint` <a name="ResetCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resetCachePoint"></a>

```go
func ResetCachePoint()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePointInput">CachePointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CachePoint`<sup>Required</sup> <a name="CachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint"></a>

```go
func CachePoint() BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference</a>

---

##### `CachePointInput`<sup>Optional</sup> <a name="CachePointInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePointInput"></a>

```go
func CachePointInput() interface{}
```

- *Type:* interface{}

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putToolChoice">PutToolChoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putTools">PutTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resetToolChoice">ResetToolChoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resetTools">ResetTools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutToolChoice` <a name="PutToolChoice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putToolChoice"></a>

```go
func PutToolChoice(value BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putToolChoice.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

---

##### `PutTools` <a name="PutTools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putTools"></a>

```go
func PutTools(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.putTools.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetToolChoice` <a name="ResetToolChoice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resetToolChoice"></a>

```go
func ResetToolChoice()
```

##### `ResetTools` <a name="ResetTools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resetTools"></a>

```go
func ResetTools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice">ToolChoice</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools">Tools</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoiceInput">ToolChoiceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolsInput">ToolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ToolChoice`<sup>Required</sup> <a name="ToolChoice" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice"></a>

```go
func ToolChoice() BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a>

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools"></a>

```go
func Tools() BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList</a>

---

##### `ToolChoiceInput`<sup>Optional</sup> <a name="ToolChoiceInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoiceInput"></a>

```go
func ToolChoiceInput() interface{}
```

- *Type:* interface{}

---

##### `ToolsInput`<sup>Optional</sup> <a name="ToolsInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolsInput"></a>

```go
func ToolsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putTool">PutTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAny">ResetAny</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAuto">ResetAuto</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetTool">ResetTool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTool` <a name="PutTool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putTool"></a>

```go
func PutTool(value BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.putTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

---

##### `ResetAny` <a name="ResetAny" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAny"></a>

```go
func ResetAny()
```

##### `ResetAuto` <a name="ResetAuto" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetAuto"></a>

```go
func ResetAuto()
```

##### `ResetTool` <a name="ResetTool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resetTool"></a>

```go
func ResetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool">Tool</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.anyInput">AnyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.autoInput">AutoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.toolInput">ToolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any">Any</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto">Auto</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool"></a>

```go
func Tool() BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a>

---

##### `AnyInput`<sup>Optional</sup> <a name="AnyInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.anyInput"></a>

```go
func AnyInput() *string
```

- *Type:* *string

---

##### `AutoInput`<sup>Optional</sup> <a name="AutoInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.autoInput"></a>

```go
func AutoInput() *string
```

- *Type:* *string

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.toolInput"></a>

```go
func ToolInput() interface{}
```

- *Type:* interface{}

---

##### `Any`<sup>Required</sup> <a name="Any" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any"></a>

```go
func Any() *string
```

- *Type:* *string

---

##### `Auto`<sup>Required</sup> <a name="Auto" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto"></a>

```go
func Auto() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get"></a>

```go
func Get(index *f64) BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putCachePoint">PutCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putToolSpec">PutToolSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resetCachePoint">ResetCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resetToolSpec">ResetToolSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCachePoint` <a name="PutCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putCachePoint"></a>

```go
func PutCachePoint(value BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putCachePoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

---

##### `PutToolSpec` <a name="PutToolSpec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putToolSpec"></a>

```go
func PutToolSpec(value BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.putToolSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

---

##### `ResetCachePoint` <a name="ResetCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resetCachePoint"></a>

```go
func ResetCachePoint()
```

##### `ResetToolSpec` <a name="ResetToolSpec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resetToolSpec"></a>

```go
func ResetToolSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec">ToolSpec</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePointInput">CachePointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpecInput">ToolSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CachePoint`<sup>Required</sup> <a name="CachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint"></a>

```go
func CachePoint() BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a>

---

##### `ToolSpec`<sup>Required</sup> <a name="ToolSpec" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec"></a>

```go
func ToolSpec() BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a>

---

##### `CachePointInput`<sup>Optional</sup> <a name="CachePointInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePointInput"></a>

```go
func CachePointInput() interface{}
```

- *Type:* interface{}

---

##### `ToolSpecInput`<sup>Optional</sup> <a name="ToolSpecInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpecInput"></a>

```go
func ToolSpecInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resetJson">ResetJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJson` <a name="ResetJson" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resetJson"></a>

```go
func ResetJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.jsonInput">JsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json">Json</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.jsonInput"></a>

```go
func JsonInput() *string
```

- *Type:* *string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json"></a>

```go
func Json() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference <a name="BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.putInputSchema">PutInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetInputSchema">ResetInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputSchema` <a name="PutInputSchema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.putInputSchema"></a>

```go
func PutInputSchema(value BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.putInputSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetInputSchema` <a name="ResetInputSchema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetInputSchema"></a>

```go
func ResetInputSchema()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema">InputSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchemaInput">InputSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputSchema`<sup>Required</sup> <a name="InputSchema" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema"></a>

```go
func InputSchema() BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `InputSchemaInput`<sup>Optional</sup> <a name="InputSchemaInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchemaInput"></a>

```go
func InputSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationOutputReference <a name="BedrockPromptVariantsTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockPromptVariantsTemplateConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putChat">PutChat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putText">PutText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resetChat">ResetChat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChat` <a name="PutChat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putChat"></a>

```go
func PutChat(value BedrockPromptVariantsTemplateConfigurationChat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putChat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChat">BedrockPromptVariantsTemplateConfigurationChat</a>

---

##### `PutText` <a name="PutText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putText"></a>

```go
func PutText(value BedrockPromptVariantsTemplateConfigurationText)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationText">BedrockPromptVariantsTemplateConfigurationText</a>

---

##### `ResetChat` <a name="ResetChat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resetChat"></a>

```go
func ResetChat()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.chat">Chat</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference">BedrockPromptVariantsTemplateConfigurationChatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.text">Text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference">BedrockPromptVariantsTemplateConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.chatInput">ChatInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.textInput">TextInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Chat`<sup>Required</sup> <a name="Chat" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.chat"></a>

```go
func Chat() BedrockPromptVariantsTemplateConfigurationChatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationChatOutputReference">BedrockPromptVariantsTemplateConfigurationChatOutputReference</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.text"></a>

```go
func Text() BedrockPromptVariantsTemplateConfigurationTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference">BedrockPromptVariantsTemplateConfigurationTextOutputReference</a>

---

##### `ChatInput`<sup>Optional</sup> <a name="ChatInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.chatInput"></a>

```go
func ChatInput() interface{}
```

- *Type:* interface{}

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.textInput"></a>

```go
func TextInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference <a name="BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationTextInputVariablesList <a name="BedrockPromptVariantsTemplateConfigurationTextInputVariablesList" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationTextInputVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockPromptVariantsTemplateConfigurationTextInputVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get"></a>

```go
func Get(index *f64) BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference <a name="BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationTextOutputReference <a name="BedrockPromptVariantsTemplateConfigurationTextOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockPromptVariantsTemplateConfigurationTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putCachePoint">PutCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putInputVariables">PutInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putTextS3Location">PutTextS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetCachePoint">ResetCachePoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetInputVariables">ResetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetTextS3Location">ResetTextS3Location</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCachePoint` <a name="PutCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putCachePoint"></a>

```go
func PutCachePoint(value BedrockPromptVariantsTemplateConfigurationTextCachePoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putCachePoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePoint">BedrockPromptVariantsTemplateConfigurationTextCachePoint</a>

---

##### `PutInputVariables` <a name="PutInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putInputVariables"></a>

```go
func PutInputVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putInputVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTextS3Location` <a name="PutTextS3Location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putTextS3Location"></a>

```go
func PutTextS3Location(value BedrockPromptVariantsTemplateConfigurationTextTextS3Location)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.putTextS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3Location">BedrockPromptVariantsTemplateConfigurationTextTextS3Location</a>

---

##### `ResetCachePoint` <a name="ResetCachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetCachePoint"></a>

```go
func ResetCachePoint()
```

##### `ResetInputVariables` <a name="ResetInputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetInputVariables"></a>

```go
func ResetInputVariables()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetText"></a>

```go
func ResetText()
```

##### `ResetTextS3Location` <a name="ResetTextS3Location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.resetTextS3Location"></a>

```go
func ResetTextS3Location()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList">BedrockPromptVariantsTemplateConfigurationTextInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3Location">TextS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference">BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePointInput">CachePointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariablesInput">InputVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3LocationInput">TextS3LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CachePoint`<sup>Required</sup> <a name="CachePoint" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePoint"></a>

```go
func CachePoint() BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference">BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference</a>

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariables"></a>

```go
func InputVariables() BedrockPromptVariantsTemplateConfigurationTextInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextInputVariablesList">BedrockPromptVariantsTemplateConfigurationTextInputVariablesList</a>

---

##### `TextS3Location`<sup>Required</sup> <a name="TextS3Location" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3Location"></a>

```go
func TextS3Location() BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference">BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference</a>

---

##### `CachePointInput`<sup>Optional</sup> <a name="CachePointInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePointInput"></a>

```go
func CachePointInput() interface{}
```

- *Type:* interface{}

---

##### `InputVariablesInput`<sup>Optional</sup> <a name="InputVariablesInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariablesInput"></a>

```go
func InputVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `TextS3LocationInput`<sup>Optional</sup> <a name="TextS3LocationInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3LocationInput"></a>

```go
func TextS3LocationInput() interface{}
```

- *Type:* interface{}

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference <a name="BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockprompt"

bedrockprompt.NewBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockPrompt.BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



