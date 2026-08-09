# `personalizeSolution` Submodule <a name="`personalizeSolution` Submodule" id="@cdktn/provider-awscc.personalizeSolution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeSolution <a name="PersonalizeSolution" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution awscc_personalize_solution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

personalizesolution.NewPersonalizeSolution(scope Construct, id *string, config PersonalizeSolutionConfig) PersonalizeSolution
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig">PersonalizeSolutionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig">PersonalizeSolutionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.putSolutionConfig">PutSolutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetEventType">ResetEventType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetPerformAutoMl">ResetPerformAutoMl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetPerformHpo">ResetPerformHpo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetRecipeArn">ResetRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetSolutionConfig">ResetSolutionConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSolutionConfig` <a name="PutSolutionConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.putSolutionConfig"></a>

```go
func PutSolutionConfig(value PersonalizeSolutionSolutionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.putSolutionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig">PersonalizeSolutionSolutionConfig</a>

---

##### `ResetEventType` <a name="ResetEventType" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetEventType"></a>

```go
func ResetEventType()
```

##### `ResetPerformAutoMl` <a name="ResetPerformAutoMl" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetPerformAutoMl"></a>

```go
func ResetPerformAutoMl()
```

##### `ResetPerformHpo` <a name="ResetPerformHpo" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetPerformHpo"></a>

```go
func ResetPerformHpo()
```

##### `ResetRecipeArn` <a name="ResetRecipeArn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetRecipeArn"></a>

```go
func ResetRecipeArn()
```

##### `ResetSolutionConfig` <a name="ResetSolutionConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetSolutionConfig"></a>

```go
func ResetSolutionConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PersonalizeSolution resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

personalizesolution.PersonalizeSolution_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

personalizesolution.PersonalizeSolution_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

personalizesolution.PersonalizeSolution_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

personalizesolution.PersonalizeSolution_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PersonalizeSolution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PersonalizeSolution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PersonalizeSolution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeSolution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.solutionArn">SolutionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.solutionConfig">SolutionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference">PersonalizeSolutionSolutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.datasetGroupArnInput">DatasetGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.eventTypeInput">EventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.performAutoMlInput">PerformAutoMlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.performHpoInput">PerformHpoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.recipeArnInput">RecipeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.solutionConfigInput">SolutionConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.datasetGroupArn">DatasetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.performAutoMl">PerformAutoMl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.performHpo">PerformHpo</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.recipeArn">RecipeArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SolutionArn`<sup>Required</sup> <a name="SolutionArn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.solutionArn"></a>

```go
func SolutionArn() *string
```

- *Type:* *string

---

##### `SolutionConfig`<sup>Required</sup> <a name="SolutionConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.solutionConfig"></a>

```go
func SolutionConfig() PersonalizeSolutionSolutionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference">PersonalizeSolutionSolutionConfigOutputReference</a>

---

##### `DatasetGroupArnInput`<sup>Optional</sup> <a name="DatasetGroupArnInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.datasetGroupArnInput"></a>

```go
func DatasetGroupArnInput() *string
```

- *Type:* *string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.eventTypeInput"></a>

```go
func EventTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PerformAutoMlInput`<sup>Optional</sup> <a name="PerformAutoMlInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.performAutoMlInput"></a>

```go
func PerformAutoMlInput() interface{}
```

- *Type:* interface{}

---

##### `PerformHpoInput`<sup>Optional</sup> <a name="PerformHpoInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.performHpoInput"></a>

```go
func PerformHpoInput() interface{}
```

- *Type:* interface{}

---

##### `RecipeArnInput`<sup>Optional</sup> <a name="RecipeArnInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.recipeArnInput"></a>

```go
func RecipeArnInput() *string
```

- *Type:* *string

---

##### `SolutionConfigInput`<sup>Optional</sup> <a name="SolutionConfigInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.solutionConfigInput"></a>

```go
func SolutionConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DatasetGroupArn`<sup>Required</sup> <a name="DatasetGroupArn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.datasetGroupArn"></a>

```go
func DatasetGroupArn() *string
```

- *Type:* *string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PerformAutoMl`<sup>Required</sup> <a name="PerformAutoMl" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.performAutoMl"></a>

```go
func PerformAutoMl() interface{}
```

- *Type:* interface{}

---

##### `PerformHpo`<sup>Required</sup> <a name="PerformHpo" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.performHpo"></a>

```go
func PerformHpo() interface{}
```

- *Type:* interface{}

---

##### `RecipeArn`<sup>Required</sup> <a name="RecipeArn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.recipeArn"></a>

```go
func RecipeArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeSolutionConfig <a name="PersonalizeSolutionConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

&personalizesolution.PersonalizeSolutionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DatasetGroupArn: *string,
	Name: *string,
	EventType: *string,
	PerformAutoMl: interface{},
	PerformHpo: interface{},
	RecipeArn: *string,
	SolutionConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.personalizeSolution.PersonalizeSolutionSolutionConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.datasetGroupArn">DatasetGroupArn</a></code> | <code>*string</code> | The ARN of the dataset group that provides the training data. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.name">Name</a></code> | <code>*string</code> | The name for the solution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.eventType">EventType</a></code> | <code>*string</code> | When your have multiple event types (using an EVENT_TYPE schema field), this parameter specifies which event type (for example, 'click' or 'like') is used for training the model. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.performAutoMl">PerformAutoMl</a></code> | <code>interface{}</code> | Whether to perform automated machine learning (AutoML). The default is false. For this case, you must specify recipeArn. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.performHpo">PerformHpo</a></code> | <code>interface{}</code> | Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.recipeArn">RecipeArn</a></code> | <code>*string</code> | The ARN of the recipe to use for model training. Only specified when performAutoML is false. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.solutionConfig">SolutionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig">PersonalizeSolutionSolutionConfig</a></code> | The configuration to use with the solution. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatasetGroupArn`<sup>Required</sup> <a name="DatasetGroupArn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.datasetGroupArn"></a>

```go
DatasetGroupArn *string
```

- *Type:* *string

The ARN of the dataset group that provides the training data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#dataset_group_arn PersonalizeSolution#dataset_group_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for the solution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#name PersonalizeSolution#name}

---

##### `EventType`<sup>Optional</sup> <a name="EventType" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.eventType"></a>

```go
EventType *string
```

- *Type:* *string

When your have multiple event types (using an EVENT_TYPE schema field), this parameter specifies which event type (for example, 'click' or 'like') is used for training the model.

If you do not provide an eventType, Amazon Personalize will use all interactions for training with equal weight regardless of type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#event_type PersonalizeSolution#event_type}

---

##### `PerformAutoMl`<sup>Optional</sup> <a name="PerformAutoMl" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.performAutoMl"></a>

```go
PerformAutoMl interface{}
```

- *Type:* interface{}

Whether to perform automated machine learning (AutoML). The default is false. For this case, you must specify recipeArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#perform_auto_ml PersonalizeSolution#perform_auto_ml}

---

##### `PerformHpo`<sup>Optional</sup> <a name="PerformHpo" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.performHpo"></a>

```go
PerformHpo interface{}
```

- *Type:* interface{}

Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe.

The default is false. When performing AutoML, this parameter is always true and you should not set it to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#perform_hpo PersonalizeSolution#perform_hpo}

---

##### `RecipeArn`<sup>Optional</sup> <a name="RecipeArn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.recipeArn"></a>

```go
RecipeArn *string
```

- *Type:* *string

The ARN of the recipe to use for model training. Only specified when performAutoML is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#recipe_arn PersonalizeSolution#recipe_arn}

---

##### `SolutionConfig`<sup>Optional</sup> <a name="SolutionConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.solutionConfig"></a>

```go
SolutionConfig PersonalizeSolutionSolutionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig">PersonalizeSolutionSolutionConfig</a>

The configuration to use with the solution.

When performAutoML is set to true, Amazon Personalize only evaluates the autoMLConfig section of the solution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#solution_config PersonalizeSolution#solution_config}

---

### PersonalizeSolutionSolutionConfig <a name="PersonalizeSolutionSolutionConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

&personalizesolution.PersonalizeSolutionSolutionConfig {
	AlgorithmHyperParameters: *map[string]*string,
	AutoMlConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig,
	EventValueThreshold: *string,
	FeatureTransformationParameters: *map[string]*string,
	HpoConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.algorithmHyperParameters">AlgorithmHyperParameters</a></code> | <code>*map[string]*string</code> | Lists the hyperparameter names and ranges. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.autoMlConfig">AutoMlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig">PersonalizeSolutionSolutionConfigAutoMlConfig</a></code> | The AutoMLConfig object containing a list of recipes to search when AutoML is performed. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.eventValueThreshold">EventValueThreshold</a></code> | <code>*string</code> | Only events with a value greater than or equal to this threshold are used for training a model. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.featureTransformationParameters">FeatureTransformationParameters</a></code> | <code>*map[string]*string</code> | Lists the feature transformation parameters. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.hpoConfig">HpoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig">PersonalizeSolutionSolutionConfigHpoConfig</a></code> | Describes the properties for hyperparameter optimization (HPO). |

---

##### `AlgorithmHyperParameters`<sup>Optional</sup> <a name="AlgorithmHyperParameters" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.algorithmHyperParameters"></a>

```go
AlgorithmHyperParameters *map[string]*string
```

- *Type:* *map[string]*string

Lists the hyperparameter names and ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#algorithm_hyper_parameters PersonalizeSolution#algorithm_hyper_parameters}

---

##### `AutoMlConfig`<sup>Optional</sup> <a name="AutoMlConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.autoMlConfig"></a>

```go
AutoMlConfig PersonalizeSolutionSolutionConfigAutoMlConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig">PersonalizeSolutionSolutionConfigAutoMlConfig</a>

The AutoMLConfig object containing a list of recipes to search when AutoML is performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#auto_ml_config PersonalizeSolution#auto_ml_config}

---

##### `EventValueThreshold`<sup>Optional</sup> <a name="EventValueThreshold" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.eventValueThreshold"></a>

```go
EventValueThreshold *string
```

- *Type:* *string

Only events with a value greater than or equal to this threshold are used for training a model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#event_value_threshold PersonalizeSolution#event_value_threshold}

---

##### `FeatureTransformationParameters`<sup>Optional</sup> <a name="FeatureTransformationParameters" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.featureTransformationParameters"></a>

```go
FeatureTransformationParameters *map[string]*string
```

- *Type:* *map[string]*string

Lists the feature transformation parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#feature_transformation_parameters PersonalizeSolution#feature_transformation_parameters}

---

##### `HpoConfig`<sup>Optional</sup> <a name="HpoConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.hpoConfig"></a>

```go
HpoConfig PersonalizeSolutionSolutionConfigHpoConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig">PersonalizeSolutionSolutionConfigHpoConfig</a>

Describes the properties for hyperparameter optimization (HPO).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#hpo_config PersonalizeSolution#hpo_config}

---

### PersonalizeSolutionSolutionConfigAutoMlConfig <a name="PersonalizeSolutionSolutionConfigAutoMlConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

&personalizesolution.PersonalizeSolutionSolutionConfigAutoMlConfig {
	MetricName: *string,
	RecipeList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig.property.metricName">MetricName</a></code> | <code>*string</code> | The metric to optimize. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig.property.recipeList">RecipeList</a></code> | <code>*[]*string</code> | The list of candidate recipes. |

---

##### `MetricName`<sup>Optional</sup> <a name="MetricName" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

The metric to optimize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#metric_name PersonalizeSolution#metric_name}

---

##### `RecipeList`<sup>Optional</sup> <a name="RecipeList" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig.property.recipeList"></a>

```go
RecipeList *[]*string
```

- *Type:* *[]*string

The list of candidate recipes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#recipe_list PersonalizeSolution#recipe_list}

---

### PersonalizeSolutionSolutionConfigHpoConfig <a name="PersonalizeSolutionSolutionConfigHpoConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

&personalizesolution.PersonalizeSolutionSolutionConfigHpoConfig {
	AlgorithmHyperParameterRanges: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges,
	HpoObjective: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective,
	HpoResourceConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig.property.algorithmHyperParameterRanges">AlgorithmHyperParameterRanges</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges</a></code> | The hyperparameters and their allowable ranges. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig.property.hpoObjective">HpoObjective</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective">PersonalizeSolutionSolutionConfigHpoConfigHpoObjective</a></code> | The metric to optimize during HPO. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig.property.hpoResourceConfig">HpoResourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig">PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig</a></code> | Describes the resource configuration for hyperparameter optimization (HPO). |

---

##### `AlgorithmHyperParameterRanges`<sup>Optional</sup> <a name="AlgorithmHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig.property.algorithmHyperParameterRanges"></a>

```go
AlgorithmHyperParameterRanges PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges</a>

The hyperparameters and their allowable ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#algorithm_hyper_parameter_ranges PersonalizeSolution#algorithm_hyper_parameter_ranges}

---

##### `HpoObjective`<sup>Optional</sup> <a name="HpoObjective" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig.property.hpoObjective"></a>

```go
HpoObjective PersonalizeSolutionSolutionConfigHpoConfigHpoObjective
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective">PersonalizeSolutionSolutionConfigHpoConfigHpoObjective</a>

The metric to optimize during HPO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#hpo_objective PersonalizeSolution#hpo_objective}

---

##### `HpoResourceConfig`<sup>Optional</sup> <a name="HpoResourceConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig.property.hpoResourceConfig"></a>

```go
HpoResourceConfig PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig">PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig</a>

Describes the resource configuration for hyperparameter optimization (HPO).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#hpo_resource_config PersonalizeSolution#hpo_resource_config}

---

### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

&personalizesolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges {
	CategoricalHyperParameterRanges: interface{},
	ContinuousHyperParameterRanges: interface{},
	IntegerHyperParameterRanges: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.categoricalHyperParameterRanges">CategoricalHyperParameterRanges</a></code> | <code>interface{}</code> | The categorical hyperparameters and their ranges. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.continuousHyperParameterRanges">ContinuousHyperParameterRanges</a></code> | <code>interface{}</code> | The continuous hyperparameters and their ranges. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.integerHyperParameterRanges">IntegerHyperParameterRanges</a></code> | <code>interface{}</code> | The integer hyperparameters and their ranges. |

---

##### `CategoricalHyperParameterRanges`<sup>Optional</sup> <a name="CategoricalHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.categoricalHyperParameterRanges"></a>

```go
CategoricalHyperParameterRanges interface{}
```

- *Type:* interface{}

The categorical hyperparameters and their ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#categorical_hyper_parameter_ranges PersonalizeSolution#categorical_hyper_parameter_ranges}

---

##### `ContinuousHyperParameterRanges`<sup>Optional</sup> <a name="ContinuousHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.continuousHyperParameterRanges"></a>

```go
ContinuousHyperParameterRanges interface{}
```

- *Type:* interface{}

The continuous hyperparameters and their ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#continuous_hyper_parameter_ranges PersonalizeSolution#continuous_hyper_parameter_ranges}

---

##### `IntegerHyperParameterRanges`<sup>Optional</sup> <a name="IntegerHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.integerHyperParameterRanges"></a>

```go
IntegerHyperParameterRanges interface{}
```

- *Type:* interface{}

The integer hyperparameters and their ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#integer_hyper_parameter_ranges PersonalizeSolution#integer_hyper_parameter_ranges}

---

### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

&personalizesolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges.property.name">Name</a></code> | <code>*string</code> | The name of the hyperparameter. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges.property.values">Values</a></code> | <code>*[]*string</code> | A list of the categories for the hyperparameter. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#name PersonalizeSolution#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

A list of the categories for the hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#values PersonalizeSolution#values}

---

### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

&personalizesolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges {
	MaxValue: *f64,
	MinValue: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges.property.maxValue">MaxValue</a></code> | <code>*f64</code> | The maximum allowable value for the hyperparameter. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges.property.minValue">MinValue</a></code> | <code>*f64</code> | The minimum allowable value for the hyperparameter. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges.property.name">Name</a></code> | <code>*string</code> | The name of the hyperparameter. |

---

##### `MaxValue`<sup>Optional</sup> <a name="MaxValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges.property.maxValue"></a>

```go
MaxValue *f64
```

- *Type:* *f64

The maximum allowable value for the hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#max_value PersonalizeSolution#max_value}

---

##### `MinValue`<sup>Optional</sup> <a name="MinValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges.property.minValue"></a>

```go
MinValue *f64
```

- *Type:* *f64

The minimum allowable value for the hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#min_value PersonalizeSolution#min_value}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#name PersonalizeSolution#name}

---

### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

&personalizesolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges {
	MaxValue: *f64,
	MinValue: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges.property.maxValue">MaxValue</a></code> | <code>*f64</code> | The maximum allowable value for the hyperparameter. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges.property.minValue">MinValue</a></code> | <code>*f64</code> | The minimum allowable value for the hyperparameter. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges.property.name">Name</a></code> | <code>*string</code> | The name of the hyperparameter. |

---

##### `MaxValue`<sup>Optional</sup> <a name="MaxValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges.property.maxValue"></a>

```go
MaxValue *f64
```

- *Type:* *f64

The maximum allowable value for the hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#max_value PersonalizeSolution#max_value}

---

##### `MinValue`<sup>Optional</sup> <a name="MinValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges.property.minValue"></a>

```go
MinValue *f64
```

- *Type:* *f64

The minimum allowable value for the hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#min_value PersonalizeSolution#min_value}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#name PersonalizeSolution#name}

---

### PersonalizeSolutionSolutionConfigHpoConfigHpoObjective <a name="PersonalizeSolutionSolutionConfigHpoConfigHpoObjective" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

&personalizesolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective {
	MetricName: *string,
	MetricRegex: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective.property.metricName">MetricName</a></code> | <code>*string</code> | The name of the metric. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective.property.metricRegex">MetricRegex</a></code> | <code>*string</code> | A regular expression for finding the metric in the training job logs. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective.property.type">Type</a></code> | <code>*string</code> | The type of the metric. Valid values are Maximize and Minimize. |

---

##### `MetricName`<sup>Optional</sup> <a name="MetricName" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

The name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#metric_name PersonalizeSolution#metric_name}

---

##### `MetricRegex`<sup>Optional</sup> <a name="MetricRegex" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective.property.metricRegex"></a>

```go
MetricRegex *string
```

- *Type:* *string

A regular expression for finding the metric in the training job logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#metric_regex PersonalizeSolution#metric_regex}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the metric. Valid values are Maximize and Minimize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#type PersonalizeSolution#type}

---

### PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig <a name="PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

&personalizesolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig {
	MaxNumberOfTrainingJobs: *string,
	MaxParallelTrainingJobs: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig.property.maxNumberOfTrainingJobs">MaxNumberOfTrainingJobs</a></code> | <code>*string</code> | The maximum number of training jobs when you create a solution version. The maximum value for maxNumberOfTrainingJobs is 40. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig.property.maxParallelTrainingJobs">MaxParallelTrainingJobs</a></code> | <code>*string</code> | The maximum number of parallel training jobs when you create a solution version. |

---

##### `MaxNumberOfTrainingJobs`<sup>Optional</sup> <a name="MaxNumberOfTrainingJobs" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig.property.maxNumberOfTrainingJobs"></a>

```go
MaxNumberOfTrainingJobs *string
```

- *Type:* *string

The maximum number of training jobs when you create a solution version. The maximum value for maxNumberOfTrainingJobs is 40.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#max_number_of_training_jobs PersonalizeSolution#max_number_of_training_jobs}

---

##### `MaxParallelTrainingJobs`<sup>Optional</sup> <a name="MaxParallelTrainingJobs" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig.property.maxParallelTrainingJobs"></a>

```go
MaxParallelTrainingJobs *string
```

- *Type:* *string

The maximum number of parallel training jobs when you create a solution version.

The maximum value for maxParallelTrainingJobs is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/personalize_solution#max_parallel_training_jobs PersonalizeSolution#max_parallel_training_jobs}

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference <a name="PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

personalizesolution.NewPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resetMetricName">ResetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resetRecipeList">ResetRecipeList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricName` <a name="ResetMetricName" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resetMetricName"></a>

```go
func ResetMetricName()
```

##### `ResetRecipeList` <a name="ResetRecipeList" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resetRecipeList"></a>

```go
func ResetRecipeList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.recipeListInput">RecipeListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.recipeList">RecipeList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `RecipeListInput`<sup>Optional</sup> <a name="RecipeListInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.recipeListInput"></a>

```go
func RecipeListInput() *[]*string
```

- *Type:* *[]*string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `RecipeList`<sup>Required</sup> <a name="RecipeList" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.recipeList"></a>

```go
func RecipeList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

personalizesolution.NewPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.get"></a>

```go
func Get(index *f64) PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

personalizesolution.NewPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

personalizesolution.NewPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.get"></a>

```go
func Get(index *f64) PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

personalizesolution.NewPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resetMaxValue">ResetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resetMinValue">ResetMinValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxValue` <a name="ResetMaxValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resetMaxValue"></a>

```go
func ResetMaxValue()
```

##### `ResetMinValue` <a name="ResetMinValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resetMinValue"></a>

```go
func ResetMinValue()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.maxValueInput">MaxValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.minValueInput">MinValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.maxValue">MaxValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.minValue">MinValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxValueInput`<sup>Optional</sup> <a name="MaxValueInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.maxValueInput"></a>

```go
func MaxValueInput() *f64
```

- *Type:* *f64

---

##### `MinValueInput`<sup>Optional</sup> <a name="MinValueInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.minValueInput"></a>

```go
func MinValueInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.maxValue"></a>

```go
func MaxValue() *f64
```

- *Type:* *f64

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.minValue"></a>

```go
func MinValue() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

personalizesolution.NewPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.get"></a>

```go
func Get(index *f64) PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

personalizesolution.NewPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resetMaxValue">ResetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resetMinValue">ResetMinValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxValue` <a name="ResetMaxValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resetMaxValue"></a>

```go
func ResetMaxValue()
```

##### `ResetMinValue` <a name="ResetMinValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resetMinValue"></a>

```go
func ResetMinValue()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.maxValueInput">MaxValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.minValueInput">MinValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.maxValue">MaxValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.minValue">MinValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxValueInput`<sup>Optional</sup> <a name="MaxValueInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.maxValueInput"></a>

```go
func MaxValueInput() *f64
```

- *Type:* *f64

---

##### `MinValueInput`<sup>Optional</sup> <a name="MinValueInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.minValueInput"></a>

```go
func MinValueInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.maxValue"></a>

```go
func MaxValue() *f64
```

- *Type:* *f64

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.minValue"></a>

```go
func MinValue() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

personalizesolution.NewPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putCategoricalHyperParameterRanges">PutCategoricalHyperParameterRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putContinuousHyperParameterRanges">PutContinuousHyperParameterRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putIntegerHyperParameterRanges">PutIntegerHyperParameterRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resetCategoricalHyperParameterRanges">ResetCategoricalHyperParameterRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resetContinuousHyperParameterRanges">ResetContinuousHyperParameterRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resetIntegerHyperParameterRanges">ResetIntegerHyperParameterRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCategoricalHyperParameterRanges` <a name="PutCategoricalHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putCategoricalHyperParameterRanges"></a>

```go
func PutCategoricalHyperParameterRanges(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putCategoricalHyperParameterRanges.parameter.value"></a>

- *Type:* interface{}

---

##### `PutContinuousHyperParameterRanges` <a name="PutContinuousHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putContinuousHyperParameterRanges"></a>

```go
func PutContinuousHyperParameterRanges(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putContinuousHyperParameterRanges.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIntegerHyperParameterRanges` <a name="PutIntegerHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putIntegerHyperParameterRanges"></a>

```go
func PutIntegerHyperParameterRanges(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putIntegerHyperParameterRanges.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCategoricalHyperParameterRanges` <a name="ResetCategoricalHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resetCategoricalHyperParameterRanges"></a>

```go
func ResetCategoricalHyperParameterRanges()
```

##### `ResetContinuousHyperParameterRanges` <a name="ResetContinuousHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resetContinuousHyperParameterRanges"></a>

```go
func ResetContinuousHyperParameterRanges()
```

##### `ResetIntegerHyperParameterRanges` <a name="ResetIntegerHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resetIntegerHyperParameterRanges"></a>

```go
func ResetIntegerHyperParameterRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.categoricalHyperParameterRanges">CategoricalHyperParameterRanges</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.continuousHyperParameterRanges">ContinuousHyperParameterRanges</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.integerHyperParameterRanges">IntegerHyperParameterRanges</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.categoricalHyperParameterRangesInput">CategoricalHyperParameterRangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.continuousHyperParameterRangesInput">ContinuousHyperParameterRangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.integerHyperParameterRangesInput">IntegerHyperParameterRangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoricalHyperParameterRanges`<sup>Required</sup> <a name="CategoricalHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.categoricalHyperParameterRanges"></a>

```go
func CategoricalHyperParameterRanges() PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList</a>

---

##### `ContinuousHyperParameterRanges`<sup>Required</sup> <a name="ContinuousHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.continuousHyperParameterRanges"></a>

```go
func ContinuousHyperParameterRanges() PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList</a>

---

##### `IntegerHyperParameterRanges`<sup>Required</sup> <a name="IntegerHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.integerHyperParameterRanges"></a>

```go
func IntegerHyperParameterRanges() PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList</a>

---

##### `CategoricalHyperParameterRangesInput`<sup>Optional</sup> <a name="CategoricalHyperParameterRangesInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.categoricalHyperParameterRangesInput"></a>

```go
func CategoricalHyperParameterRangesInput() interface{}
```

- *Type:* interface{}

---

##### `ContinuousHyperParameterRangesInput`<sup>Optional</sup> <a name="ContinuousHyperParameterRangesInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.continuousHyperParameterRangesInput"></a>

```go
func ContinuousHyperParameterRangesInput() interface{}
```

- *Type:* interface{}

---

##### `IntegerHyperParameterRangesInput`<sup>Optional</sup> <a name="IntegerHyperParameterRangesInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.integerHyperParameterRangesInput"></a>

```go
func IntegerHyperParameterRangesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference <a name="PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

personalizesolution.NewPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resetMetricName">ResetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resetMetricRegex">ResetMetricRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricName` <a name="ResetMetricName" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resetMetricName"></a>

```go
func ResetMetricName()
```

##### `ResetMetricRegex` <a name="ResetMetricRegex" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resetMetricRegex"></a>

```go
func ResetMetricRegex()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricRegexInput">MetricRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricRegex">MetricRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `MetricRegexInput`<sup>Optional</sup> <a name="MetricRegexInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricRegexInput"></a>

```go
func MetricRegexInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `MetricRegex`<sup>Required</sup> <a name="MetricRegex" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricRegex"></a>

```go
func MetricRegex() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference <a name="PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

personalizesolution.NewPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resetMaxNumberOfTrainingJobs">ResetMaxNumberOfTrainingJobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resetMaxParallelTrainingJobs">ResetMaxParallelTrainingJobs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxNumberOfTrainingJobs` <a name="ResetMaxNumberOfTrainingJobs" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resetMaxNumberOfTrainingJobs"></a>

```go
func ResetMaxNumberOfTrainingJobs()
```

##### `ResetMaxParallelTrainingJobs` <a name="ResetMaxParallelTrainingJobs" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resetMaxParallelTrainingJobs"></a>

```go
func ResetMaxParallelTrainingJobs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxNumberOfTrainingJobsInput">MaxNumberOfTrainingJobsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxParallelTrainingJobsInput">MaxParallelTrainingJobsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxNumberOfTrainingJobs">MaxNumberOfTrainingJobs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxParallelTrainingJobs">MaxParallelTrainingJobs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxNumberOfTrainingJobsInput`<sup>Optional</sup> <a name="MaxNumberOfTrainingJobsInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxNumberOfTrainingJobsInput"></a>

```go
func MaxNumberOfTrainingJobsInput() *string
```

- *Type:* *string

---

##### `MaxParallelTrainingJobsInput`<sup>Optional</sup> <a name="MaxParallelTrainingJobsInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxParallelTrainingJobsInput"></a>

```go
func MaxParallelTrainingJobsInput() *string
```

- *Type:* *string

---

##### `MaxNumberOfTrainingJobs`<sup>Required</sup> <a name="MaxNumberOfTrainingJobs" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxNumberOfTrainingJobs"></a>

```go
func MaxNumberOfTrainingJobs() *string
```

- *Type:* *string

---

##### `MaxParallelTrainingJobs`<sup>Required</sup> <a name="MaxParallelTrainingJobs" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxParallelTrainingJobs"></a>

```go
func MaxParallelTrainingJobs() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PersonalizeSolutionSolutionConfigHpoConfigOutputReference <a name="PersonalizeSolutionSolutionConfigHpoConfigOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

personalizesolution.NewPersonalizeSolutionSolutionConfigHpoConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PersonalizeSolutionSolutionConfigHpoConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putAlgorithmHyperParameterRanges">PutAlgorithmHyperParameterRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putHpoObjective">PutHpoObjective</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putHpoResourceConfig">PutHpoResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resetAlgorithmHyperParameterRanges">ResetAlgorithmHyperParameterRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resetHpoObjective">ResetHpoObjective</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resetHpoResourceConfig">ResetHpoResourceConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlgorithmHyperParameterRanges` <a name="PutAlgorithmHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putAlgorithmHyperParameterRanges"></a>

```go
func PutAlgorithmHyperParameterRanges(value PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putAlgorithmHyperParameterRanges.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges</a>

---

##### `PutHpoObjective` <a name="PutHpoObjective" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putHpoObjective"></a>

```go
func PutHpoObjective(value PersonalizeSolutionSolutionConfigHpoConfigHpoObjective)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putHpoObjective.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective">PersonalizeSolutionSolutionConfigHpoConfigHpoObjective</a>

---

##### `PutHpoResourceConfig` <a name="PutHpoResourceConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putHpoResourceConfig"></a>

```go
func PutHpoResourceConfig(value PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putHpoResourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig">PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig</a>

---

##### `ResetAlgorithmHyperParameterRanges` <a name="ResetAlgorithmHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resetAlgorithmHyperParameterRanges"></a>

```go
func ResetAlgorithmHyperParameterRanges()
```

##### `ResetHpoObjective` <a name="ResetHpoObjective" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resetHpoObjective"></a>

```go
func ResetHpoObjective()
```

##### `ResetHpoResourceConfig` <a name="ResetHpoResourceConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resetHpoResourceConfig"></a>

```go
func ResetHpoResourceConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.algorithmHyperParameterRanges">AlgorithmHyperParameterRanges</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoObjective">HpoObjective</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference">PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoResourceConfig">HpoResourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference">PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.algorithmHyperParameterRangesInput">AlgorithmHyperParameterRangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoObjectiveInput">HpoObjectiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoResourceConfigInput">HpoResourceConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmHyperParameterRanges`<sup>Required</sup> <a name="AlgorithmHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.algorithmHyperParameterRanges"></a>

```go
func AlgorithmHyperParameterRanges() PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference</a>

---

##### `HpoObjective`<sup>Required</sup> <a name="HpoObjective" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoObjective"></a>

```go
func HpoObjective() PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference">PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference</a>

---

##### `HpoResourceConfig`<sup>Required</sup> <a name="HpoResourceConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoResourceConfig"></a>

```go
func HpoResourceConfig() PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference">PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference</a>

---

##### `AlgorithmHyperParameterRangesInput`<sup>Optional</sup> <a name="AlgorithmHyperParameterRangesInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.algorithmHyperParameterRangesInput"></a>

```go
func AlgorithmHyperParameterRangesInput() interface{}
```

- *Type:* interface{}

---

##### `HpoObjectiveInput`<sup>Optional</sup> <a name="HpoObjectiveInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoObjectiveInput"></a>

```go
func HpoObjectiveInput() interface{}
```

- *Type:* interface{}

---

##### `HpoResourceConfigInput`<sup>Optional</sup> <a name="HpoResourceConfigInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoResourceConfigInput"></a>

```go
func HpoResourceConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PersonalizeSolutionSolutionConfigOutputReference <a name="PersonalizeSolutionSolutionConfigOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizesolution"

personalizesolution.NewPersonalizeSolutionSolutionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PersonalizeSolutionSolutionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.putAutoMlConfig">PutAutoMlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.putHpoConfig">PutHpoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetAlgorithmHyperParameters">ResetAlgorithmHyperParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetAutoMlConfig">ResetAutoMlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetEventValueThreshold">ResetEventValueThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetFeatureTransformationParameters">ResetFeatureTransformationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetHpoConfig">ResetHpoConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoMlConfig` <a name="PutAutoMlConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.putAutoMlConfig"></a>

```go
func PutAutoMlConfig(value PersonalizeSolutionSolutionConfigAutoMlConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.putAutoMlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig">PersonalizeSolutionSolutionConfigAutoMlConfig</a>

---

##### `PutHpoConfig` <a name="PutHpoConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.putHpoConfig"></a>

```go
func PutHpoConfig(value PersonalizeSolutionSolutionConfigHpoConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.putHpoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig">PersonalizeSolutionSolutionConfigHpoConfig</a>

---

##### `ResetAlgorithmHyperParameters` <a name="ResetAlgorithmHyperParameters" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetAlgorithmHyperParameters"></a>

```go
func ResetAlgorithmHyperParameters()
```

##### `ResetAutoMlConfig` <a name="ResetAutoMlConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetAutoMlConfig"></a>

```go
func ResetAutoMlConfig()
```

##### `ResetEventValueThreshold` <a name="ResetEventValueThreshold" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetEventValueThreshold"></a>

```go
func ResetEventValueThreshold()
```

##### `ResetFeatureTransformationParameters` <a name="ResetFeatureTransformationParameters" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetFeatureTransformationParameters"></a>

```go
func ResetFeatureTransformationParameters()
```

##### `ResetHpoConfig` <a name="ResetHpoConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetHpoConfig"></a>

```go
func ResetHpoConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.autoMlConfig">AutoMlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference">PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.hpoConfig">HpoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference">PersonalizeSolutionSolutionConfigHpoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.algorithmHyperParametersInput">AlgorithmHyperParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.autoMlConfigInput">AutoMlConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.eventValueThresholdInput">EventValueThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.featureTransformationParametersInput">FeatureTransformationParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.hpoConfigInput">HpoConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.algorithmHyperParameters">AlgorithmHyperParameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.eventValueThreshold">EventValueThreshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.featureTransformationParameters">FeatureTransformationParameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoMlConfig`<sup>Required</sup> <a name="AutoMlConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.autoMlConfig"></a>

```go
func AutoMlConfig() PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference">PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference</a>

---

##### `HpoConfig`<sup>Required</sup> <a name="HpoConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.hpoConfig"></a>

```go
func HpoConfig() PersonalizeSolutionSolutionConfigHpoConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference">PersonalizeSolutionSolutionConfigHpoConfigOutputReference</a>

---

##### `AlgorithmHyperParametersInput`<sup>Optional</sup> <a name="AlgorithmHyperParametersInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.algorithmHyperParametersInput"></a>

```go
func AlgorithmHyperParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AutoMlConfigInput`<sup>Optional</sup> <a name="AutoMlConfigInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.autoMlConfigInput"></a>

```go
func AutoMlConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EventValueThresholdInput`<sup>Optional</sup> <a name="EventValueThresholdInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.eventValueThresholdInput"></a>

```go
func EventValueThresholdInput() *string
```

- *Type:* *string

---

##### `FeatureTransformationParametersInput`<sup>Optional</sup> <a name="FeatureTransformationParametersInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.featureTransformationParametersInput"></a>

```go
func FeatureTransformationParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HpoConfigInput`<sup>Optional</sup> <a name="HpoConfigInput" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.hpoConfigInput"></a>

```go
func HpoConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AlgorithmHyperParameters`<sup>Required</sup> <a name="AlgorithmHyperParameters" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.algorithmHyperParameters"></a>

```go
func AlgorithmHyperParameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EventValueThreshold`<sup>Required</sup> <a name="EventValueThreshold" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.eventValueThreshold"></a>

```go
func EventValueThreshold() *string
```

- *Type:* *string

---

##### `FeatureTransformationParameters`<sup>Required</sup> <a name="FeatureTransformationParameters" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.featureTransformationParameters"></a>

```go
func FeatureTransformationParameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



