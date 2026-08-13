# `wisdomAiPromptVersion` Submodule <a name="`wisdomAiPromptVersion` Submodule" id="@cdktn/provider-awscc.wisdomAiPromptVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomAiPromptVersion <a name="WisdomAiPromptVersion" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt_version awscc_wisdom_ai_prompt_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaipromptversion"

wisdomaipromptversion.NewWisdomAiPromptVersion(scope Construct, id *string, config WisdomAiPromptVersionConfig) WisdomAiPromptVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig">WisdomAiPromptVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig">WisdomAiPromptVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.resetModifiedTimeSeconds">ResetModifiedTimeSeconds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetModifiedTimeSeconds` <a name="ResetModifiedTimeSeconds" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.resetModifiedTimeSeconds"></a>

```go
func ResetModifiedTimeSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomAiPromptVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaipromptversion"

wisdomaipromptversion.WisdomAiPromptVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaipromptversion"

wisdomaipromptversion.WisdomAiPromptVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaipromptversion"

wisdomaipromptversion.WisdomAiPromptVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaipromptversion"

wisdomaipromptversion.WisdomAiPromptVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WisdomAiPromptVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WisdomAiPromptVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WisdomAiPromptVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WisdomAiPromptVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.aiPromptArn">AiPromptArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.aiPromptVersionId">AiPromptVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.assistantArn">AssistantArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.versionNumber">VersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.aiPromptIdInput">AiPromptIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.assistantIdInput">AssistantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.modifiedTimeSecondsInput">ModifiedTimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.aiPromptId">AiPromptId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.assistantId">AssistantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.modifiedTimeSeconds">ModifiedTimeSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AiPromptArn`<sup>Required</sup> <a name="AiPromptArn" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.aiPromptArn"></a>

```go
func AiPromptArn() *string
```

- *Type:* *string

---

##### `AiPromptVersionId`<sup>Required</sup> <a name="AiPromptVersionId" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.aiPromptVersionId"></a>

```go
func AiPromptVersionId() *string
```

- *Type:* *string

---

##### `AssistantArn`<sup>Required</sup> <a name="AssistantArn" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.assistantArn"></a>

```go
func AssistantArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.versionNumber"></a>

```go
func VersionNumber() *f64
```

- *Type:* *f64

---

##### `AiPromptIdInput`<sup>Optional</sup> <a name="AiPromptIdInput" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.aiPromptIdInput"></a>

```go
func AiPromptIdInput() *string
```

- *Type:* *string

---

##### `AssistantIdInput`<sup>Optional</sup> <a name="AssistantIdInput" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.assistantIdInput"></a>

```go
func AssistantIdInput() *string
```

- *Type:* *string

---

##### `ModifiedTimeSecondsInput`<sup>Optional</sup> <a name="ModifiedTimeSecondsInput" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.modifiedTimeSecondsInput"></a>

```go
func ModifiedTimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `AiPromptId`<sup>Required</sup> <a name="AiPromptId" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.aiPromptId"></a>

```go
func AiPromptId() *string
```

- *Type:* *string

---

##### `AssistantId`<sup>Required</sup> <a name="AssistantId" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.assistantId"></a>

```go
func AssistantId() *string
```

- *Type:* *string

---

##### `ModifiedTimeSeconds`<sup>Required</sup> <a name="ModifiedTimeSeconds" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.modifiedTimeSeconds"></a>

```go
func ModifiedTimeSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomAiPromptVersionConfig <a name="WisdomAiPromptVersionConfig" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaipromptversion"

&wisdomaipromptversion.WisdomAiPromptVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AiPromptId: *string,
	AssistantId: *string,
	ModifiedTimeSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.aiPromptId">AiPromptId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt_version#ai_prompt_id WisdomAiPromptVersion#ai_prompt_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.assistantId">AssistantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt_version#assistant_id WisdomAiPromptVersion#assistant_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.modifiedTimeSeconds">ModifiedTimeSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt_version#modified_time_seconds WisdomAiPromptVersion#modified_time_seconds}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AiPromptId`<sup>Required</sup> <a name="AiPromptId" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.aiPromptId"></a>

```go
AiPromptId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt_version#ai_prompt_id WisdomAiPromptVersion#ai_prompt_id}.

---

##### `AssistantId`<sup>Required</sup> <a name="AssistantId" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.assistantId"></a>

```go
AssistantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt_version#assistant_id WisdomAiPromptVersion#assistant_id}.

---

##### `ModifiedTimeSeconds`<sup>Optional</sup> <a name="ModifiedTimeSeconds" id="@cdktn/provider-awscc.wisdomAiPromptVersion.WisdomAiPromptVersionConfig.property.modifiedTimeSeconds"></a>

```go
ModifiedTimeSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt_version#modified_time_seconds WisdomAiPromptVersion#modified_time_seconds}.

---



