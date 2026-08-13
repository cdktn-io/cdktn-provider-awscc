# `wisdomAssistantAssociation` Submodule <a name="`wisdomAssistantAssociation` Submodule" id="@cdktn/provider-awscc.wisdomAssistantAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomAssistantAssociation <a name="WisdomAssistantAssociation" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association awscc_wisdom_assistant_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomassistantassociation"

wisdomassistantassociation.NewWisdomAssistantAssociation(scope Construct, id *string, config WisdomAssistantAssociationConfig) WisdomAssistantAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig">WisdomAssistantAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig">WisdomAssistantAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.putAssociation">PutAssociation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssociation` <a name="PutAssociation" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.putAssociation"></a>

```go
func PutAssociation(value WisdomAssistantAssociationAssociation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.putAssociation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation">WisdomAssistantAssociationAssociation</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomAssistantAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomassistantassociation"

wisdomassistantassociation.WisdomAssistantAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomassistantassociation"

wisdomassistantassociation.WisdomAssistantAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomassistantassociation"

wisdomassistantassociation.WisdomAssistantAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomassistantassociation"

wisdomassistantassociation.WisdomAssistantAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WisdomAssistantAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WisdomAssistantAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WisdomAssistantAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WisdomAssistantAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantArn">AssistantArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantAssociationArn">AssistantAssociationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantAssociationId">AssistantAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.association">Association</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference">WisdomAssistantAssociationAssociationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList">WisdomAssistantAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantIdInput">AssistantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.associationInput">AssociationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.associationTypeInput">AssociationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantId">AssistantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.associationType">AssociationType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssistantArn`<sup>Required</sup> <a name="AssistantArn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantArn"></a>

```go
func AssistantArn() *string
```

- *Type:* *string

---

##### `AssistantAssociationArn`<sup>Required</sup> <a name="AssistantAssociationArn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantAssociationArn"></a>

```go
func AssistantAssociationArn() *string
```

- *Type:* *string

---

##### `AssistantAssociationId`<sup>Required</sup> <a name="AssistantAssociationId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantAssociationId"></a>

```go
func AssistantAssociationId() *string
```

- *Type:* *string

---

##### `Association`<sup>Required</sup> <a name="Association" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.association"></a>

```go
func Association() WisdomAssistantAssociationAssociationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference">WisdomAssistantAssociationAssociationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.tags"></a>

```go
func Tags() WisdomAssistantAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList">WisdomAssistantAssociationTagsList</a>

---

##### `AssistantIdInput`<sup>Optional</sup> <a name="AssistantIdInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantIdInput"></a>

```go
func AssistantIdInput() *string
```

- *Type:* *string

---

##### `AssociationInput`<sup>Optional</sup> <a name="AssociationInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.associationInput"></a>

```go
func AssociationInput() interface{}
```

- *Type:* interface{}

---

##### `AssociationTypeInput`<sup>Optional</sup> <a name="AssociationTypeInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.associationTypeInput"></a>

```go
func AssociationTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AssistantId`<sup>Required</sup> <a name="AssistantId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.assistantId"></a>

```go
func AssistantId() *string
```

- *Type:* *string

---

##### `AssociationType`<sup>Required</sup> <a name="AssociationType" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.associationType"></a>

```go
func AssociationType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomAssistantAssociationAssociation <a name="WisdomAssistantAssociationAssociation" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomassistantassociation"

&wisdomassistantassociation.WisdomAssistantAssociationAssociation {
	ExternalBedrockKnowledgeBaseConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig,
	KnowledgeBaseId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation.property.externalBedrockKnowledgeBaseConfig">ExternalBedrockKnowledgeBaseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig">WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#external_bedrock_knowledge_base_config WisdomAssistantAssociation#external_bedrock_knowledge_base_config}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#knowledge_base_id WisdomAssistantAssociation#knowledge_base_id}. |

---

##### `ExternalBedrockKnowledgeBaseConfig`<sup>Optional</sup> <a name="ExternalBedrockKnowledgeBaseConfig" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation.property.externalBedrockKnowledgeBaseConfig"></a>

```go
ExternalBedrockKnowledgeBaseConfig WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig">WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#external_bedrock_knowledge_base_config WisdomAssistantAssociation#external_bedrock_knowledge_base_config}.

---

##### `KnowledgeBaseId`<sup>Optional</sup> <a name="KnowledgeBaseId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation.property.knowledgeBaseId"></a>

```go
KnowledgeBaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#knowledge_base_id WisdomAssistantAssociation#knowledge_base_id}.

---

### WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig <a name="WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomassistantassociation"

&wisdomassistantassociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig {
	AccessRoleArn: *string,
	BedrockKnowledgeBaseArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig.property.accessRoleArn">AccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#access_role_arn WisdomAssistantAssociation#access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig.property.bedrockKnowledgeBaseArn">BedrockKnowledgeBaseArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#bedrock_knowledge_base_arn WisdomAssistantAssociation#bedrock_knowledge_base_arn}. |

---

##### `AccessRoleArn`<sup>Optional</sup> <a name="AccessRoleArn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig.property.accessRoleArn"></a>

```go
AccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#access_role_arn WisdomAssistantAssociation#access_role_arn}.

---

##### `BedrockKnowledgeBaseArn`<sup>Optional</sup> <a name="BedrockKnowledgeBaseArn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig.property.bedrockKnowledgeBaseArn"></a>

```go
BedrockKnowledgeBaseArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#bedrock_knowledge_base_arn WisdomAssistantAssociation#bedrock_knowledge_base_arn}.

---

### WisdomAssistantAssociationConfig <a name="WisdomAssistantAssociationConfig" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomassistantassociation"

&wisdomassistantassociation.WisdomAssistantAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AssistantId: *string,
	Association: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation,
	AssociationType: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.assistantId">AssistantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#assistant_id WisdomAssistantAssociation#assistant_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.association">Association</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation">WisdomAssistantAssociationAssociation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#association WisdomAssistantAssociation#association}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.associationType">AssociationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#association_type WisdomAssistantAssociation#association_type}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#tags WisdomAssistantAssociation#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssistantId`<sup>Required</sup> <a name="AssistantId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.assistantId"></a>

```go
AssistantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#assistant_id WisdomAssistantAssociation#assistant_id}.

---

##### `Association`<sup>Required</sup> <a name="Association" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.association"></a>

```go
Association WisdomAssistantAssociationAssociation
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociation">WisdomAssistantAssociationAssociation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#association WisdomAssistantAssociation#association}.

---

##### `AssociationType`<sup>Required</sup> <a name="AssociationType" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.associationType"></a>

```go
AssociationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#association_type WisdomAssistantAssociation#association_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#tags WisdomAssistantAssociation#tags}.

---

### WisdomAssistantAssociationTags <a name="WisdomAssistantAssociationTags" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomassistantassociation"

&wisdomassistantassociation.WisdomAssistantAssociationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#key WisdomAssistantAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#value WisdomAssistantAssociation#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#key WisdomAssistantAssociation#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_assistant_association#value WisdomAssistantAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference <a name="WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomassistantassociation"

wisdomassistantassociation.NewWisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.resetAccessRoleArn">ResetAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.resetBedrockKnowledgeBaseArn">ResetBedrockKnowledgeBaseArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessRoleArn` <a name="ResetAccessRoleArn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.resetAccessRoleArn"></a>

```go
func ResetAccessRoleArn()
```

##### `ResetBedrockKnowledgeBaseArn` <a name="ResetBedrockKnowledgeBaseArn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.resetBedrockKnowledgeBaseArn"></a>

```go
func ResetBedrockKnowledgeBaseArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.accessRoleArnInput">AccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.bedrockKnowledgeBaseArnInput">BedrockKnowledgeBaseArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.accessRoleArn">AccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.bedrockKnowledgeBaseArn">BedrockKnowledgeBaseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessRoleArnInput`<sup>Optional</sup> <a name="AccessRoleArnInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.accessRoleArnInput"></a>

```go
func AccessRoleArnInput() *string
```

- *Type:* *string

---

##### `BedrockKnowledgeBaseArnInput`<sup>Optional</sup> <a name="BedrockKnowledgeBaseArnInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.bedrockKnowledgeBaseArnInput"></a>

```go
func BedrockKnowledgeBaseArnInput() *string
```

- *Type:* *string

---

##### `AccessRoleArn`<sup>Required</sup> <a name="AccessRoleArn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.accessRoleArn"></a>

```go
func AccessRoleArn() *string
```

- *Type:* *string

---

##### `BedrockKnowledgeBaseArn`<sup>Required</sup> <a name="BedrockKnowledgeBaseArn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.bedrockKnowledgeBaseArn"></a>

```go
func BedrockKnowledgeBaseArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAssistantAssociationAssociationOutputReference <a name="WisdomAssistantAssociationAssociationOutputReference" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomassistantassociation"

wisdomassistantassociation.NewWisdomAssistantAssociationAssociationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomAssistantAssociationAssociationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.putExternalBedrockKnowledgeBaseConfig">PutExternalBedrockKnowledgeBaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.resetExternalBedrockKnowledgeBaseConfig">ResetExternalBedrockKnowledgeBaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.resetKnowledgeBaseId">ResetKnowledgeBaseId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExternalBedrockKnowledgeBaseConfig` <a name="PutExternalBedrockKnowledgeBaseConfig" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.putExternalBedrockKnowledgeBaseConfig"></a>

```go
func PutExternalBedrockKnowledgeBaseConfig(value WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.putExternalBedrockKnowledgeBaseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig">WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfig</a>

---

##### `ResetExternalBedrockKnowledgeBaseConfig` <a name="ResetExternalBedrockKnowledgeBaseConfig" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.resetExternalBedrockKnowledgeBaseConfig"></a>

```go
func ResetExternalBedrockKnowledgeBaseConfig()
```

##### `ResetKnowledgeBaseId` <a name="ResetKnowledgeBaseId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.resetKnowledgeBaseId"></a>

```go
func ResetKnowledgeBaseId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.externalBedrockKnowledgeBaseConfig">ExternalBedrockKnowledgeBaseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference">WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.externalBedrockKnowledgeBaseConfigInput">ExternalBedrockKnowledgeBaseConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.knowledgeBaseIdInput">KnowledgeBaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalBedrockKnowledgeBaseConfig`<sup>Required</sup> <a name="ExternalBedrockKnowledgeBaseConfig" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.externalBedrockKnowledgeBaseConfig"></a>

```go
func ExternalBedrockKnowledgeBaseConfig() WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference">WisdomAssistantAssociationAssociationExternalBedrockKnowledgeBaseConfigOutputReference</a>

---

##### `ExternalBedrockKnowledgeBaseConfigInput`<sup>Optional</sup> <a name="ExternalBedrockKnowledgeBaseConfigInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.externalBedrockKnowledgeBaseConfigInput"></a>

```go
func ExternalBedrockKnowledgeBaseConfigInput() interface{}
```

- *Type:* interface{}

---

##### `KnowledgeBaseIdInput`<sup>Optional</sup> <a name="KnowledgeBaseIdInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.knowledgeBaseIdInput"></a>

```go
func KnowledgeBaseIdInput() *string
```

- *Type:* *string

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.knowledgeBaseId"></a>

```go
func KnowledgeBaseId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationAssociationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAssistantAssociationTagsList <a name="WisdomAssistantAssociationTagsList" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomassistantassociation"

wisdomassistantassociation.NewWisdomAssistantAssociationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WisdomAssistantAssociationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.get"></a>

```go
func Get(index *f64) WisdomAssistantAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAssistantAssociationTagsOutputReference <a name="WisdomAssistantAssociationTagsOutputReference" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomassistantassociation"

wisdomassistantassociation.NewWisdomAssistantAssociationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WisdomAssistantAssociationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAssistantAssociation.WisdomAssistantAssociationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



