# `customerprofilesIntegration` Submodule <a name="`customerprofilesIntegration` Submodule" id="@cdktn/provider-awscc.customerprofilesIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesIntegration <a name="CustomerprofilesIntegration" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration awscc_customerprofiles_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegration(scope Construct, id *string, config CustomerprofilesIntegrationConfig) CustomerprofilesIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig">CustomerprofilesIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig">CustomerprofilesIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putFlowDefinition">PutFlowDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putObjectTypeNames">PutObjectTypeNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetEventTriggerNames">ResetEventTriggerNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetFlowDefinition">ResetFlowDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetObjectTypeName">ResetObjectTypeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetObjectTypeNames">ResetObjectTypeNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFlowDefinition` <a name="PutFlowDefinition" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putFlowDefinition"></a>

```go
func PutFlowDefinition(value CustomerprofilesIntegrationFlowDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putFlowDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a>

---

##### `PutObjectTypeNames` <a name="PutObjectTypeNames" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putObjectTypeNames"></a>

```go
func PutObjectTypeNames(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putObjectTypeNames.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEventTriggerNames` <a name="ResetEventTriggerNames" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetEventTriggerNames"></a>

```go
func ResetEventTriggerNames()
```

##### `ResetFlowDefinition` <a name="ResetFlowDefinition" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetFlowDefinition"></a>

```go
func ResetFlowDefinition()
```

##### `ResetObjectTypeName` <a name="ResetObjectTypeName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetObjectTypeName"></a>

```go
func ResetObjectTypeName()
```

##### `ResetObjectTypeNames` <a name="ResetObjectTypeNames" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetObjectTypeNames"></a>

```go
func ResetObjectTypeNames()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetScope"></a>

```go
func ResetScope()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUri` <a name="ResetUri" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.resetUri"></a>

```go
func ResetUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.CustomerprofilesIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.CustomerprofilesIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.CustomerprofilesIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.CustomerprofilesIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CustomerprofilesIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CustomerprofilesIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CustomerprofilesIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.flowDefinition">FlowDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference">CustomerprofilesIntegrationFlowDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNames">ObjectTypeNames</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList">CustomerprofilesIntegrationObjectTypeNamesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList">CustomerprofilesIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.eventTriggerNamesInput">EventTriggerNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.flowDefinitionInput">FlowDefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNameInput">ObjectTypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNamesInput">ObjectTypeNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.eventTriggerNames">EventTriggerNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeName">ObjectTypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `FlowDefinition`<sup>Required</sup> <a name="FlowDefinition" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.flowDefinition"></a>

```go
func FlowDefinition() CustomerprofilesIntegrationFlowDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference">CustomerprofilesIntegrationFlowDefinitionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `ObjectTypeNames`<sup>Required</sup> <a name="ObjectTypeNames" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNames"></a>

```go
func ObjectTypeNames() CustomerprofilesIntegrationObjectTypeNamesList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList">CustomerprofilesIntegrationObjectTypeNamesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tags"></a>

```go
func Tags() CustomerprofilesIntegrationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList">CustomerprofilesIntegrationTagsList</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `EventTriggerNamesInput`<sup>Optional</sup> <a name="EventTriggerNamesInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.eventTriggerNamesInput"></a>

```go
func EventTriggerNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FlowDefinitionInput`<sup>Optional</sup> <a name="FlowDefinitionInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.flowDefinitionInput"></a>

```go
func FlowDefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectTypeNameInput`<sup>Optional</sup> <a name="ObjectTypeNameInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNameInput"></a>

```go
func ObjectTypeNameInput() *string
```

- *Type:* *string

---

##### `ObjectTypeNamesInput`<sup>Optional</sup> <a name="ObjectTypeNamesInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeNamesInput"></a>

```go
func ObjectTypeNamesInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `EventTriggerNames`<sup>Required</sup> <a name="EventTriggerNames" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.eventTriggerNames"></a>

```go
func EventTriggerNames() *[]*string
```

- *Type:* *[]*string

---

##### `ObjectTypeName`<sup>Required</sup> <a name="ObjectTypeName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.objectTypeName"></a>

```go
func ObjectTypeName() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesIntegrationConfig <a name="CustomerprofilesIntegrationConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	EventTriggerNames: *[]*string,
	FlowDefinition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition,
	ObjectTypeName: *string,
	ObjectTypeNames: interface{},
	Scope: *string,
	Tags: interface{},
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.domainName">DomainName</a></code> | <code>*string</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.eventTriggerNames">EventTriggerNames</a></code> | <code>*[]*string</code> | A list of unique names for active event triggers associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.flowDefinition">FlowDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#flow_definition CustomerprofilesIntegration#flow_definition}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.objectTypeName">ObjectTypeName</a></code> | <code>*string</code> | The name of the ObjectType defined for the 3rd party data in Profile Service. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.objectTypeNames">ObjectTypeNames</a></code> | <code>interface{}</code> | The mapping between 3rd party event types and ObjectType names. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.scope">Scope</a></code> | <code>*string</code> | Scope of the integration, such as 'PROFILE' or 'DOMAIN'. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags (keys and values) associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.uri">Uri</a></code> | <code>*string</code> | The URI of the S3 bucket or any other type of data source. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#domain_name CustomerprofilesIntegration#domain_name}

---

##### `EventTriggerNames`<sup>Optional</sup> <a name="EventTriggerNames" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.eventTriggerNames"></a>

```go
EventTriggerNames *[]*string
```

- *Type:* *[]*string

A list of unique names for active event triggers associated with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#event_trigger_names CustomerprofilesIntegration#event_trigger_names}

---

##### `FlowDefinition`<sup>Optional</sup> <a name="FlowDefinition" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.flowDefinition"></a>

```go
FlowDefinition CustomerprofilesIntegrationFlowDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition">CustomerprofilesIntegrationFlowDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#flow_definition CustomerprofilesIntegration#flow_definition}.

---

##### `ObjectTypeName`<sup>Optional</sup> <a name="ObjectTypeName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.objectTypeName"></a>

```go
ObjectTypeName *string
```

- *Type:* *string

The name of the ObjectType defined for the 3rd party data in Profile Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#object_type_name CustomerprofilesIntegration#object_type_name}

---

##### `ObjectTypeNames`<sup>Optional</sup> <a name="ObjectTypeNames" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.objectTypeNames"></a>

```go
ObjectTypeNames interface{}
```

- *Type:* interface{}

The mapping between 3rd party event types and ObjectType names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#object_type_names CustomerprofilesIntegration#object_type_names}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Scope of the integration, such as 'PROFILE' or 'DOMAIN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#scope CustomerprofilesIntegration#scope}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags (keys and values) associated with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#tags CustomerprofilesIntegration#tags}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationConfig.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The URI of the S3 bucket or any other type of data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#uri CustomerprofilesIntegration#uri}

---

### CustomerprofilesIntegrationFlowDefinition <a name="CustomerprofilesIntegrationFlowDefinition" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationFlowDefinition {
	Description: *string,
	FlowName: *string,
	KmsArn: *string,
	SourceFlowConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig,
	Tasks: interface{},
	TriggerConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#description CustomerprofilesIntegration#description}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.flowName">FlowName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#flow_name CustomerprofilesIntegration#flow_name}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.kmsArn">KmsArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#kms_arn CustomerprofilesIntegration#kms_arn}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.sourceFlowConfig">SourceFlowConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#source_flow_config CustomerprofilesIntegration#source_flow_config}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.tasks">Tasks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#tasks CustomerprofilesIntegration#tasks}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.triggerConfig">TriggerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig">CustomerprofilesIntegrationFlowDefinitionTriggerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#trigger_config CustomerprofilesIntegration#trigger_config}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#description CustomerprofilesIntegration#description}.

---

##### `FlowName`<sup>Optional</sup> <a name="FlowName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.flowName"></a>

```go
FlowName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#flow_name CustomerprofilesIntegration#flow_name}.

---

##### `KmsArn`<sup>Optional</sup> <a name="KmsArn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.kmsArn"></a>

```go
KmsArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#kms_arn CustomerprofilesIntegration#kms_arn}.

---

##### `SourceFlowConfig`<sup>Optional</sup> <a name="SourceFlowConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.sourceFlowConfig"></a>

```go
SourceFlowConfig CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#source_flow_config CustomerprofilesIntegration#source_flow_config}.

---

##### `Tasks`<sup>Optional</sup> <a name="Tasks" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.tasks"></a>

```go
Tasks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#tasks CustomerprofilesIntegration#tasks}.

---

##### `TriggerConfig`<sup>Optional</sup> <a name="TriggerConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinition.property.triggerConfig"></a>

```go
TriggerConfig CustomerprofilesIntegrationFlowDefinitionTriggerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig">CustomerprofilesIntegrationFlowDefinitionTriggerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#trigger_config CustomerprofilesIntegration#trigger_config}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig {
	ConnectorProfileName: *string,
	ConnectorType: *string,
	IncrementalPullConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig,
	SourceConnectorProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.connectorProfileName">ConnectorProfileName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#connector_profile_name CustomerprofilesIntegration#connector_profile_name}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.connectorType">ConnectorType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#connector_type CustomerprofilesIntegration#connector_type}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.incrementalPullConfig">IncrementalPullConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#incremental_pull_config CustomerprofilesIntegration#incremental_pull_config}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.sourceConnectorProperties">SourceConnectorProperties</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#source_connector_properties CustomerprofilesIntegration#source_connector_properties}. |

---

##### `ConnectorProfileName`<sup>Optional</sup> <a name="ConnectorProfileName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.connectorProfileName"></a>

```go
ConnectorProfileName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#connector_profile_name CustomerprofilesIntegration#connector_profile_name}.

---

##### `ConnectorType`<sup>Optional</sup> <a name="ConnectorType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.connectorType"></a>

```go
ConnectorType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#connector_type CustomerprofilesIntegration#connector_type}.

---

##### `IncrementalPullConfig`<sup>Optional</sup> <a name="IncrementalPullConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.incrementalPullConfig"></a>

```go
IncrementalPullConfig CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#incremental_pull_config CustomerprofilesIntegration#incremental_pull_config}.

---

##### `SourceConnectorProperties`<sup>Optional</sup> <a name="SourceConnectorProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig.property.sourceConnectorProperties"></a>

```go
SourceConnectorProperties CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#source_connector_properties CustomerprofilesIntegration#source_connector_properties}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig {
	DatetimeTypeFieldName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig.property.datetimeTypeFieldName">DatetimeTypeFieldName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#datetime_type_field_name CustomerprofilesIntegration#datetime_type_field_name}. |

---

##### `DatetimeTypeFieldName`<sup>Optional</sup> <a name="DatetimeTypeFieldName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig.property.datetimeTypeFieldName"></a>

```go
DatetimeTypeFieldName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#datetime_type_field_name CustomerprofilesIntegration#datetime_type_field_name}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties {
	Marketo: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo,
	S3: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3,
	Salesforce: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce,
	ServiceNow: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow,
	Zendesk: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.marketo">Marketo</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#marketo CustomerprofilesIntegration#marketo}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#s3 CustomerprofilesIntegration#s3}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.salesforce">Salesforce</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#salesforce CustomerprofilesIntegration#salesforce}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#service_now CustomerprofilesIntegration#service_now}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.zendesk">Zendesk</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#zendesk CustomerprofilesIntegration#zendesk}. |

---

##### `Marketo`<sup>Optional</sup> <a name="Marketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.marketo"></a>

```go
Marketo CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#marketo CustomerprofilesIntegration#marketo}.

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.s3"></a>

```go
S3 CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#s3 CustomerprofilesIntegration#s3}.

---

##### `Salesforce`<sup>Optional</sup> <a name="Salesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.salesforce"></a>

```go
Salesforce CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#salesforce CustomerprofilesIntegration#salesforce}.

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.serviceNow"></a>

```go
ServiceNow CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#service_now CustomerprofilesIntegration#service_now}.

---

##### `Zendesk`<sup>Optional</sup> <a name="Zendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties.property.zendesk"></a>

```go
Zendesk CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#zendesk CustomerprofilesIntegration#zendesk}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo {
	Object: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo.property.object">Object</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}. |

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo.property.object"></a>

```go
Object *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 {
	BucketName: *string,
	BucketPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#bucket_name CustomerprofilesIntegration#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#bucket_prefix CustomerprofilesIntegration#bucket_prefix}. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#bucket_name CustomerprofilesIntegration#bucket_name}.

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3.property.bucketPrefix"></a>

```go
BucketPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#bucket_prefix CustomerprofilesIntegration#bucket_prefix}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce {
	EnableDynamicFieldUpdate: interface{},
	IncludeDeletedRecords: interface{},
	Object: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.enableDynamicFieldUpdate">EnableDynamicFieldUpdate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#enable_dynamic_field_update CustomerprofilesIntegration#enable_dynamic_field_update}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.includeDeletedRecords">IncludeDeletedRecords</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#include_deleted_records CustomerprofilesIntegration#include_deleted_records}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.object">Object</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}. |

---

##### `EnableDynamicFieldUpdate`<sup>Optional</sup> <a name="EnableDynamicFieldUpdate" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.enableDynamicFieldUpdate"></a>

```go
EnableDynamicFieldUpdate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#enable_dynamic_field_update CustomerprofilesIntegration#enable_dynamic_field_update}.

---

##### `IncludeDeletedRecords`<sup>Optional</sup> <a name="IncludeDeletedRecords" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.includeDeletedRecords"></a>

```go
IncludeDeletedRecords interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#include_deleted_records CustomerprofilesIntegration#include_deleted_records}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce.property.object"></a>

```go
Object *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow {
	Object: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow.property.object">Object</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}. |

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow.property.object"></a>

```go
Object *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}.

---

### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk {
	Object: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk.property.object">Object</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}. |

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk.property.object"></a>

```go
Object *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}.

---

### CustomerprofilesIntegrationFlowDefinitionTasks <a name="CustomerprofilesIntegrationFlowDefinitionTasks" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationFlowDefinitionTasks {
	ConnectorOperator: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator,
	DestinationField: *string,
	SourceFields: *[]*string,
	TaskProperties: interface{},
	TaskType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.connectorOperator">ConnectorOperator</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#connector_operator CustomerprofilesIntegration#connector_operator}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.destinationField">DestinationField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#destination_field CustomerprofilesIntegration#destination_field}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.sourceFields">SourceFields</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#source_fields CustomerprofilesIntegration#source_fields}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.taskProperties">TaskProperties</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#task_properties CustomerprofilesIntegration#task_properties}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.taskType">TaskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#task_type CustomerprofilesIntegration#task_type}. |

---

##### `ConnectorOperator`<sup>Optional</sup> <a name="ConnectorOperator" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.connectorOperator"></a>

```go
ConnectorOperator CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#connector_operator CustomerprofilesIntegration#connector_operator}.

---

##### `DestinationField`<sup>Optional</sup> <a name="DestinationField" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.destinationField"></a>

```go
DestinationField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#destination_field CustomerprofilesIntegration#destination_field}.

---

##### `SourceFields`<sup>Optional</sup> <a name="SourceFields" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.sourceFields"></a>

```go
SourceFields *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#source_fields CustomerprofilesIntegration#source_fields}.

---

##### `TaskProperties`<sup>Optional</sup> <a name="TaskProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.taskProperties"></a>

```go
TaskProperties interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#task_properties CustomerprofilesIntegration#task_properties}.

---

##### `TaskType`<sup>Optional</sup> <a name="TaskType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasks.property.taskType"></a>

```go
TaskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#task_type CustomerprofilesIntegration#task_type}.

---

### CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator <a name="CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator {
	Marketo: *string,
	S3: *string,
	Salesforce: *string,
	ServiceNow: *string,
	Zendesk: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.marketo">Marketo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#marketo CustomerprofilesIntegration#marketo}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.s3">S3</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#s3 CustomerprofilesIntegration#s3}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.salesforce">Salesforce</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#salesforce CustomerprofilesIntegration#salesforce}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.serviceNow">ServiceNow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#service_now CustomerprofilesIntegration#service_now}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.zendesk">Zendesk</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#zendesk CustomerprofilesIntegration#zendesk}. |

---

##### `Marketo`<sup>Optional</sup> <a name="Marketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.marketo"></a>

```go
Marketo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#marketo CustomerprofilesIntegration#marketo}.

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.s3"></a>

```go
S3 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#s3 CustomerprofilesIntegration#s3}.

---

##### `Salesforce`<sup>Optional</sup> <a name="Salesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.salesforce"></a>

```go
Salesforce *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#salesforce CustomerprofilesIntegration#salesforce}.

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.serviceNow"></a>

```go
ServiceNow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#service_now CustomerprofilesIntegration#service_now}.

---

##### `Zendesk`<sup>Optional</sup> <a name="Zendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator.property.zendesk"></a>

```go
Zendesk *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#zendesk CustomerprofilesIntegration#zendesk}.

---

### CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties <a name="CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties {
	OperatorPropertyKey: *string,
	Property: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties.property.operatorPropertyKey">OperatorPropertyKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#operator_property_key CustomerprofilesIntegration#operator_property_key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties.property.property">Property</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#property CustomerprofilesIntegration#property}. |

---

##### `OperatorPropertyKey`<sup>Optional</sup> <a name="OperatorPropertyKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties.property.operatorPropertyKey"></a>

```go
OperatorPropertyKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#operator_property_key CustomerprofilesIntegration#operator_property_key}.

---

##### `Property`<sup>Optional</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties.property.property"></a>

```go
Property *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#property CustomerprofilesIntegration#property}.

---

### CustomerprofilesIntegrationFlowDefinitionTriggerConfig <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig {
	TriggerProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties,
	TriggerType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig.property.triggerProperties">TriggerProperties</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#trigger_properties CustomerprofilesIntegration#trigger_properties}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig.property.triggerType">TriggerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#trigger_type CustomerprofilesIntegration#trigger_type}. |

---

##### `TriggerProperties`<sup>Optional</sup> <a name="TriggerProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig.property.triggerProperties"></a>

```go
TriggerProperties CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#trigger_properties CustomerprofilesIntegration#trigger_properties}.

---

##### `TriggerType`<sup>Optional</sup> <a name="TriggerType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig.property.triggerType"></a>

```go
TriggerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#trigger_type CustomerprofilesIntegration#trigger_type}.

---

### CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties {
	Scheduled: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties.property.scheduled">Scheduled</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#scheduled CustomerprofilesIntegration#scheduled}. |

---

##### `Scheduled`<sup>Optional</sup> <a name="Scheduled" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties.property.scheduled"></a>

```go
Scheduled CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#scheduled CustomerprofilesIntegration#scheduled}.

---

### CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled {
	DataPullMode: *string,
	FirstExecutionFrom: *f64,
	ScheduleEndTime: *f64,
	ScheduleExpression: *string,
	ScheduleOffset: *f64,
	ScheduleStartTime: *f64,
	Timezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.dataPullMode">DataPullMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#data_pull_mode CustomerprofilesIntegration#data_pull_mode}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.firstExecutionFrom">FirstExecutionFrom</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#first_execution_from CustomerprofilesIntegration#first_execution_from}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleEndTime">ScheduleEndTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#schedule_end_time CustomerprofilesIntegration#schedule_end_time}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#schedule_expression CustomerprofilesIntegration#schedule_expression}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleOffset">ScheduleOffset</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#schedule_offset CustomerprofilesIntegration#schedule_offset}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleStartTime">ScheduleStartTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#schedule_start_time CustomerprofilesIntegration#schedule_start_time}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.timezone">Timezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#timezone CustomerprofilesIntegration#timezone}. |

---

##### `DataPullMode`<sup>Optional</sup> <a name="DataPullMode" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.dataPullMode"></a>

```go
DataPullMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#data_pull_mode CustomerprofilesIntegration#data_pull_mode}.

---

##### `FirstExecutionFrom`<sup>Optional</sup> <a name="FirstExecutionFrom" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.firstExecutionFrom"></a>

```go
FirstExecutionFrom *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#first_execution_from CustomerprofilesIntegration#first_execution_from}.

---

##### `ScheduleEndTime`<sup>Optional</sup> <a name="ScheduleEndTime" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleEndTime"></a>

```go
ScheduleEndTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#schedule_end_time CustomerprofilesIntegration#schedule_end_time}.

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleExpression"></a>

```go
ScheduleExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#schedule_expression CustomerprofilesIntegration#schedule_expression}.

---

##### `ScheduleOffset`<sup>Optional</sup> <a name="ScheduleOffset" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleOffset"></a>

```go
ScheduleOffset *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#schedule_offset CustomerprofilesIntegration#schedule_offset}.

---

##### `ScheduleStartTime`<sup>Optional</sup> <a name="ScheduleStartTime" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.scheduleStartTime"></a>

```go
ScheduleStartTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#schedule_start_time CustomerprofilesIntegration#schedule_start_time}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#timezone CustomerprofilesIntegration#timezone}.

---

### CustomerprofilesIntegrationObjectTypeNames <a name="CustomerprofilesIntegrationObjectTypeNames" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationObjectTypeNames {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#key CustomerprofilesIntegration#key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#value CustomerprofilesIntegration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#key CustomerprofilesIntegration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNames.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#value CustomerprofilesIntegration#value}.

---

### CustomerprofilesIntegrationTags <a name="CustomerprofilesIntegrationTags" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

&customerprofilesintegration.CustomerprofilesIntegrationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#key CustomerprofilesIntegration#key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#value CustomerprofilesIntegration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#key CustomerprofilesIntegration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_integration#value CustomerprofilesIntegration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesIntegrationFlowDefinitionOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationFlowDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesIntegrationFlowDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putSourceFlowConfig">PutSourceFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTasks">PutTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTriggerConfig">PutTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetFlowName">ResetFlowName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetKmsArn">ResetKmsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetSourceFlowConfig">ResetSourceFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetTasks">ResetTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetTriggerConfig">ResetTriggerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceFlowConfig` <a name="PutSourceFlowConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putSourceFlowConfig"></a>

```go
func PutSourceFlowConfig(value CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putSourceFlowConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig</a>

---

##### `PutTasks` <a name="PutTasks" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTasks"></a>

```go
func PutTasks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTasks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTriggerConfig` <a name="PutTriggerConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTriggerConfig"></a>

```go
func PutTriggerConfig(value CustomerprofilesIntegrationFlowDefinitionTriggerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.putTriggerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfig">CustomerprofilesIntegrationFlowDefinitionTriggerConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFlowName` <a name="ResetFlowName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetFlowName"></a>

```go
func ResetFlowName()
```

##### `ResetKmsArn` <a name="ResetKmsArn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetKmsArn"></a>

```go
func ResetKmsArn()
```

##### `ResetSourceFlowConfig` <a name="ResetSourceFlowConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetSourceFlowConfig"></a>

```go
func ResetSourceFlowConfig()
```

##### `ResetTasks` <a name="ResetTasks" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetTasks"></a>

```go
func ResetTasks()
```

##### `ResetTriggerConfig` <a name="ResetTriggerConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.resetTriggerConfig"></a>

```go
func ResetTriggerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.sourceFlowConfig">SourceFlowConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.tasks">Tasks</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList">CustomerprofilesIntegrationFlowDefinitionTasksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.triggerConfig">TriggerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.flowNameInput">FlowNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.kmsArnInput">KmsArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.sourceFlowConfigInput">SourceFlowConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.tasksInput">TasksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.triggerConfigInput">TriggerConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.flowName">FlowName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.kmsArn">KmsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceFlowConfig`<sup>Required</sup> <a name="SourceFlowConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.sourceFlowConfig"></a>

```go
func SourceFlowConfig() CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference</a>

---

##### `Tasks`<sup>Required</sup> <a name="Tasks" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.tasks"></a>

```go
func Tasks() CustomerprofilesIntegrationFlowDefinitionTasksList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList">CustomerprofilesIntegrationFlowDefinitionTasksList</a>

---

##### `TriggerConfig`<sup>Required</sup> <a name="TriggerConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.triggerConfig"></a>

```go
func TriggerConfig() CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FlowNameInput`<sup>Optional</sup> <a name="FlowNameInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.flowNameInput"></a>

```go
func FlowNameInput() *string
```

- *Type:* *string

---

##### `KmsArnInput`<sup>Optional</sup> <a name="KmsArnInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.kmsArnInput"></a>

```go
func KmsArnInput() *string
```

- *Type:* *string

---

##### `SourceFlowConfigInput`<sup>Optional</sup> <a name="SourceFlowConfigInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.sourceFlowConfigInput"></a>

```go
func SourceFlowConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TasksInput`<sup>Optional</sup> <a name="TasksInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.tasksInput"></a>

```go
func TasksInput() interface{}
```

- *Type:* interface{}

---

##### `TriggerConfigInput`<sup>Optional</sup> <a name="TriggerConfigInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.triggerConfigInput"></a>

```go
func TriggerConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FlowName`<sup>Required</sup> <a name="FlowName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.flowName"></a>

```go
func FlowName() *string
```

- *Type:* *string

---

##### `KmsArn`<sup>Required</sup> <a name="KmsArn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.kmsArn"></a>

```go
func KmsArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resetDatetimeTypeFieldName">ResetDatetimeTypeFieldName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatetimeTypeFieldName` <a name="ResetDatetimeTypeFieldName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.resetDatetimeTypeFieldName"></a>

```go
func ResetDatetimeTypeFieldName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.datetimeTypeFieldNameInput">DatetimeTypeFieldNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.datetimeTypeFieldName">DatetimeTypeFieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatetimeTypeFieldNameInput`<sup>Optional</sup> <a name="DatetimeTypeFieldNameInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.datetimeTypeFieldNameInput"></a>

```go
func DatetimeTypeFieldNameInput() *string
```

- *Type:* *string

---

##### `DatetimeTypeFieldName`<sup>Required</sup> <a name="DatetimeTypeFieldName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.datetimeTypeFieldName"></a>

```go
func DatetimeTypeFieldName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putIncrementalPullConfig">PutIncrementalPullConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putSourceConnectorProperties">PutSourceConnectorProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetConnectorProfileName">ResetConnectorProfileName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetConnectorType">ResetConnectorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetIncrementalPullConfig">ResetIncrementalPullConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetSourceConnectorProperties">ResetSourceConnectorProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncrementalPullConfig` <a name="PutIncrementalPullConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putIncrementalPullConfig"></a>

```go
func PutIncrementalPullConfig(value CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putIncrementalPullConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig</a>

---

##### `PutSourceConnectorProperties` <a name="PutSourceConnectorProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putSourceConnectorProperties"></a>

```go
func PutSourceConnectorProperties(value CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.putSourceConnectorProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties</a>

---

##### `ResetConnectorProfileName` <a name="ResetConnectorProfileName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetConnectorProfileName"></a>

```go
func ResetConnectorProfileName()
```

##### `ResetConnectorType` <a name="ResetConnectorType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetConnectorType"></a>

```go
func ResetConnectorType()
```

##### `ResetIncrementalPullConfig` <a name="ResetIncrementalPullConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetIncrementalPullConfig"></a>

```go
func ResetIncrementalPullConfig()
```

##### `ResetSourceConnectorProperties` <a name="ResetSourceConnectorProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.resetSourceConnectorProperties"></a>

```go
func ResetSourceConnectorProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.incrementalPullConfig">IncrementalPullConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.sourceConnectorProperties">SourceConnectorProperties</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorProfileNameInput">ConnectorProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorTypeInput">ConnectorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.incrementalPullConfigInput">IncrementalPullConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.sourceConnectorPropertiesInput">SourceConnectorPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorProfileName">ConnectorProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorType">ConnectorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncrementalPullConfig`<sup>Required</sup> <a name="IncrementalPullConfig" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.incrementalPullConfig"></a>

```go
func IncrementalPullConfig() CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference</a>

---

##### `SourceConnectorProperties`<sup>Required</sup> <a name="SourceConnectorProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.sourceConnectorProperties"></a>

```go
func SourceConnectorProperties() CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference</a>

---

##### `ConnectorProfileNameInput`<sup>Optional</sup> <a name="ConnectorProfileNameInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorProfileNameInput"></a>

```go
func ConnectorProfileNameInput() *string
```

- *Type:* *string

---

##### `ConnectorTypeInput`<sup>Optional</sup> <a name="ConnectorTypeInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorTypeInput"></a>

```go
func ConnectorTypeInput() *string
```

- *Type:* *string

---

##### `IncrementalPullConfigInput`<sup>Optional</sup> <a name="IncrementalPullConfigInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.incrementalPullConfigInput"></a>

```go
func IncrementalPullConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SourceConnectorPropertiesInput`<sup>Optional</sup> <a name="SourceConnectorPropertiesInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.sourceConnectorPropertiesInput"></a>

```go
func SourceConnectorPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectorProfileName`<sup>Required</sup> <a name="ConnectorProfileName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorProfileName"></a>

```go
func ConnectorProfileName() *string
```

- *Type:* *string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.connectorType"></a>

```go
func ConnectorType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetObject` <a name="ResetObject" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.resetObject"></a>

```go
func ResetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putMarketo">PutMarketo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putSalesforce">PutSalesforce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putServiceNow">PutServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putZendesk">PutZendesk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetMarketo">ResetMarketo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetS3">ResetS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetSalesforce">ResetSalesforce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetZendesk">ResetZendesk</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMarketo` <a name="PutMarketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putMarketo"></a>

```go
func PutMarketo(value CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putMarketo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo</a>

---

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putS3"></a>

```go
func PutS3(value CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3</a>

---

##### `PutSalesforce` <a name="PutSalesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putSalesforce"></a>

```go
func PutSalesforce(value CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putSalesforce.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce</a>

---

##### `PutServiceNow` <a name="PutServiceNow" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putServiceNow"></a>

```go
func PutServiceNow(value CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow</a>

---

##### `PutZendesk` <a name="PutZendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putZendesk"></a>

```go
func PutZendesk(value CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.putZendesk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk</a>

---

##### `ResetMarketo` <a name="ResetMarketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetMarketo"></a>

```go
func ResetMarketo()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetS3"></a>

```go
func ResetS3()
```

##### `ResetSalesforce` <a name="ResetSalesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetSalesforce"></a>

```go
func ResetSalesforce()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetServiceNow"></a>

```go
func ResetServiceNow()
```

##### `ResetZendesk` <a name="ResetZendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.resetZendesk"></a>

```go
func ResetZendesk()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.marketo">Marketo</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.salesforce">Salesforce</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.zendesk">Zendesk</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.marketoInput">MarketoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.s3Input">S3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.salesforceInput">SalesforceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.zendeskInput">ZendeskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Marketo`<sup>Required</sup> <a name="Marketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.marketo"></a>

```go
func Marketo() CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.s3"></a>

```go
func S3() CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference</a>

---

##### `Salesforce`<sup>Required</sup> <a name="Salesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.salesforce"></a>

```go
func Salesforce() CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.serviceNow"></a>

```go
func ServiceNow() CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference</a>

---

##### `Zendesk`<sup>Required</sup> <a name="Zendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.zendesk"></a>

```go
func Zendesk() CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference">CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference</a>

---

##### `MarketoInput`<sup>Optional</sup> <a name="MarketoInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.marketoInput"></a>

```go
func MarketoInput() interface{}
```

- *Type:* interface{}

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.s3Input"></a>

```go
func S3Input() interface{}
```

- *Type:* interface{}

---

##### `SalesforceInput`<sup>Optional</sup> <a name="SalesforceInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.salesforceInput"></a>

```go
func SalesforceInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.serviceNowInput"></a>

```go
func ServiceNowInput() interface{}
```

- *Type:* interface{}

---

##### `ZendeskInput`<sup>Optional</sup> <a name="ZendeskInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.zendeskInput"></a>

```go
func ZendeskInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.resetBucketPrefix"></a>

```go
func ResetBucketPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketPrefixInput"></a>

```go
func BucketPrefixInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.bucketPrefix"></a>

```go
func BucketPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetEnableDynamicFieldUpdate">ResetEnableDynamicFieldUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetIncludeDeletedRecords">ResetIncludeDeletedRecords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableDynamicFieldUpdate` <a name="ResetEnableDynamicFieldUpdate" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetEnableDynamicFieldUpdate"></a>

```go
func ResetEnableDynamicFieldUpdate()
```

##### `ResetIncludeDeletedRecords` <a name="ResetIncludeDeletedRecords" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetIncludeDeletedRecords"></a>

```go
func ResetIncludeDeletedRecords()
```

##### `ResetObject` <a name="ResetObject" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.resetObject"></a>

```go
func ResetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.enableDynamicFieldUpdateInput">EnableDynamicFieldUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.includeDeletedRecordsInput">IncludeDeletedRecordsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.enableDynamicFieldUpdate">EnableDynamicFieldUpdate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.includeDeletedRecords">IncludeDeletedRecords</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableDynamicFieldUpdateInput`<sup>Optional</sup> <a name="EnableDynamicFieldUpdateInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.enableDynamicFieldUpdateInput"></a>

```go
func EnableDynamicFieldUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeDeletedRecordsInput`<sup>Optional</sup> <a name="IncludeDeletedRecordsInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.includeDeletedRecordsInput"></a>

```go
func IncludeDeletedRecordsInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `EnableDynamicFieldUpdate`<sup>Required</sup> <a name="EnableDynamicFieldUpdate" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.enableDynamicFieldUpdate"></a>

```go
func EnableDynamicFieldUpdate() interface{}
```

- *Type:* interface{}

---

##### `IncludeDeletedRecords`<sup>Required</sup> <a name="IncludeDeletedRecords" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.includeDeletedRecords"></a>

```go
func IncludeDeletedRecords() interface{}
```

- *Type:* interface{}

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetObject` <a name="ResetObject" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.resetObject"></a>

```go
func ResetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetObject` <a name="ResetObject" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.resetObject"></a>

```go
func ResetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetMarketo">ResetMarketo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetS3">ResetS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetSalesforce">ResetSalesforce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetZendesk">ResetZendesk</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMarketo` <a name="ResetMarketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetMarketo"></a>

```go
func ResetMarketo()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetS3"></a>

```go
func ResetS3()
```

##### `ResetSalesforce` <a name="ResetSalesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetSalesforce"></a>

```go
func ResetSalesforce()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetServiceNow"></a>

```go
func ResetServiceNow()
```

##### `ResetZendesk` <a name="ResetZendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.resetZendesk"></a>

```go
func ResetZendesk()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.marketoInput">MarketoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.s3Input">S3Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.salesforceInput">SalesforceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.zendeskInput">ZendeskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.marketo">Marketo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.s3">S3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.salesforce">Salesforce</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.serviceNow">ServiceNow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.zendesk">Zendesk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MarketoInput`<sup>Optional</sup> <a name="MarketoInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.marketoInput"></a>

```go
func MarketoInput() *string
```

- *Type:* *string

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.s3Input"></a>

```go
func S3Input() *string
```

- *Type:* *string

---

##### `SalesforceInput`<sup>Optional</sup> <a name="SalesforceInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.salesforceInput"></a>

```go
func SalesforceInput() *string
```

- *Type:* *string

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.serviceNowInput"></a>

```go
func ServiceNowInput() *string
```

- *Type:* *string

---

##### `ZendeskInput`<sup>Optional</sup> <a name="ZendeskInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.zendeskInput"></a>

```go
func ZendeskInput() *string
```

- *Type:* *string

---

##### `Marketo`<sup>Required</sup> <a name="Marketo" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.marketo"></a>

```go
func Marketo() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.s3"></a>

```go
func S3() *string
```

- *Type:* *string

---

##### `Salesforce`<sup>Required</sup> <a name="Salesforce" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.salesforce"></a>

```go
func Salesforce() *string
```

- *Type:* *string

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.serviceNow"></a>

```go
func ServiceNow() *string
```

- *Type:* *string

---

##### `Zendesk`<sup>Required</sup> <a name="Zendesk" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.zendesk"></a>

```go
func Zendesk() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationFlowDefinitionTasksList <a name="CustomerprofilesIntegrationFlowDefinitionTasksList" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationFlowDefinitionTasksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomerprofilesIntegrationFlowDefinitionTasksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.get"></a>

```go
func Get(index *f64) CustomerprofilesIntegrationFlowDefinitionTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationFlowDefinitionTasksOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTasksOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationFlowDefinitionTasksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomerprofilesIntegrationFlowDefinitionTasksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putConnectorOperator">PutConnectorOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putTaskProperties">PutTaskProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetConnectorOperator">ResetConnectorOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetDestinationField">ResetDestinationField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetSourceFields">ResetSourceFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetTaskProperties">ResetTaskProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetTaskType">ResetTaskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnectorOperator` <a name="PutConnectorOperator" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putConnectorOperator"></a>

```go
func PutConnectorOperator(value CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putConnectorOperator.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator</a>

---

##### `PutTaskProperties` <a name="PutTaskProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putTaskProperties"></a>

```go
func PutTaskProperties(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.putTaskProperties.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConnectorOperator` <a name="ResetConnectorOperator" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetConnectorOperator"></a>

```go
func ResetConnectorOperator()
```

##### `ResetDestinationField` <a name="ResetDestinationField" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetDestinationField"></a>

```go
func ResetDestinationField()
```

##### `ResetSourceFields` <a name="ResetSourceFields" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetSourceFields"></a>

```go
func ResetSourceFields()
```

##### `ResetTaskProperties` <a name="ResetTaskProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetTaskProperties"></a>

```go
func ResetTaskProperties()
```

##### `ResetTaskType` <a name="ResetTaskType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.resetTaskType"></a>

```go
func ResetTaskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.connectorOperator">ConnectorOperator</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskProperties">TaskProperties</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList">CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.connectorOperatorInput">ConnectorOperatorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.destinationFieldInput">DestinationFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.sourceFieldsInput">SourceFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskPropertiesInput">TaskPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskTypeInput">TaskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.destinationField">DestinationField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.sourceFields">SourceFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskType">TaskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectorOperator`<sup>Required</sup> <a name="ConnectorOperator" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.connectorOperator"></a>

```go
func ConnectorOperator() CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference">CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference</a>

---

##### `TaskProperties`<sup>Required</sup> <a name="TaskProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskProperties"></a>

```go
func TaskProperties() CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList">CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList</a>

---

##### `ConnectorOperatorInput`<sup>Optional</sup> <a name="ConnectorOperatorInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.connectorOperatorInput"></a>

```go
func ConnectorOperatorInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationFieldInput`<sup>Optional</sup> <a name="DestinationFieldInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.destinationFieldInput"></a>

```go
func DestinationFieldInput() *string
```

- *Type:* *string

---

##### `SourceFieldsInput`<sup>Optional</sup> <a name="SourceFieldsInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.sourceFieldsInput"></a>

```go
func SourceFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TaskPropertiesInput`<sup>Optional</sup> <a name="TaskPropertiesInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskPropertiesInput"></a>

```go
func TaskPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskTypeInput"></a>

```go
func TaskTypeInput() *string
```

- *Type:* *string

---

##### `DestinationField`<sup>Required</sup> <a name="DestinationField" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.destinationField"></a>

```go
func DestinationField() *string
```

- *Type:* *string

---

##### `SourceFields`<sup>Required</sup> <a name="SourceFields" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.sourceFields"></a>

```go
func SourceFields() *[]*string
```

- *Type:* *[]*string

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.taskType"></a>

```go
func TaskType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList <a name="CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.get"></a>

```go
func Get(index *f64) CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resetOperatorPropertyKey">ResetOperatorPropertyKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resetProperty">ResetProperty</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperatorPropertyKey` <a name="ResetOperatorPropertyKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resetOperatorPropertyKey"></a>

```go
func ResetOperatorPropertyKey()
```

##### `ResetProperty` <a name="ResetProperty" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.resetProperty"></a>

```go
func ResetProperty()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.operatorPropertyKeyInput">OperatorPropertyKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.propertyInput">PropertyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.operatorPropertyKey">OperatorPropertyKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.property">Property</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorPropertyKeyInput`<sup>Optional</sup> <a name="OperatorPropertyKeyInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.operatorPropertyKeyInput"></a>

```go
func OperatorPropertyKeyInput() *string
```

- *Type:* *string

---

##### `PropertyInput`<sup>Optional</sup> <a name="PropertyInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.propertyInput"></a>

```go
func PropertyInput() *string
```

- *Type:* *string

---

##### `OperatorPropertyKey`<sup>Required</sup> <a name="OperatorPropertyKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.operatorPropertyKey"></a>

```go
func OperatorPropertyKey() *string
```

- *Type:* *string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.property"></a>

```go
func Property() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.putTriggerProperties">PutTriggerProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resetTriggerProperties">ResetTriggerProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resetTriggerType">ResetTriggerType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTriggerProperties` <a name="PutTriggerProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.putTriggerProperties"></a>

```go
func PutTriggerProperties(value CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.putTriggerProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties</a>

---

##### `ResetTriggerProperties` <a name="ResetTriggerProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resetTriggerProperties"></a>

```go
func ResetTriggerProperties()
```

##### `ResetTriggerType` <a name="ResetTriggerType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.resetTriggerType"></a>

```go
func ResetTriggerType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerProperties">TriggerProperties</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerPropertiesInput">TriggerPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerTypeInput">TriggerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerType">TriggerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TriggerProperties`<sup>Required</sup> <a name="TriggerProperties" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerProperties"></a>

```go
func TriggerProperties() CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference</a>

---

##### `TriggerPropertiesInput`<sup>Optional</sup> <a name="TriggerPropertiesInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerPropertiesInput"></a>

```go
func TriggerPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `TriggerTypeInput`<sup>Optional</sup> <a name="TriggerTypeInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerTypeInput"></a>

```go
func TriggerTypeInput() *string
```

- *Type:* *string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.triggerType"></a>

```go
func TriggerType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.putScheduled">PutScheduled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resetScheduled">ResetScheduled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScheduled` <a name="PutScheduled" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.putScheduled"></a>

```go
func PutScheduled(value CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.putScheduled.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled</a>

---

##### `ResetScheduled` <a name="ResetScheduled" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.resetScheduled"></a>

```go
func ResetScheduled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.scheduled">Scheduled</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.scheduledInput">ScheduledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Scheduled`<sup>Required</sup> <a name="Scheduled" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.scheduled"></a>

```go
func Scheduled() CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference">CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference</a>

---

##### `ScheduledInput`<sup>Optional</sup> <a name="ScheduledInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.scheduledInput"></a>

```go
func ScheduledInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference <a name="CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetDataPullMode">ResetDataPullMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetFirstExecutionFrom">ResetFirstExecutionFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleEndTime">ResetScheduleEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleOffset">ResetScheduleOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleStartTime">ResetScheduleStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataPullMode` <a name="ResetDataPullMode" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetDataPullMode"></a>

```go
func ResetDataPullMode()
```

##### `ResetFirstExecutionFrom` <a name="ResetFirstExecutionFrom" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetFirstExecutionFrom"></a>

```go
func ResetFirstExecutionFrom()
```

##### `ResetScheduleEndTime` <a name="ResetScheduleEndTime" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleEndTime"></a>

```go
func ResetScheduleEndTime()
```

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleExpression"></a>

```go
func ResetScheduleExpression()
```

##### `ResetScheduleOffset` <a name="ResetScheduleOffset" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleOffset"></a>

```go
func ResetScheduleOffset()
```

##### `ResetScheduleStartTime` <a name="ResetScheduleStartTime" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetScheduleStartTime"></a>

```go
func ResetScheduleStartTime()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.resetTimezone"></a>

```go
func ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.dataPullModeInput">DataPullModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.firstExecutionFromInput">FirstExecutionFromInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleEndTimeInput">ScheduleEndTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleOffsetInput">ScheduleOffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleStartTimeInput">ScheduleStartTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.dataPullMode">DataPullMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.firstExecutionFrom">FirstExecutionFrom</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleEndTime">ScheduleEndTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleOffset">ScheduleOffset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleStartTime">ScheduleStartTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataPullModeInput`<sup>Optional</sup> <a name="DataPullModeInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.dataPullModeInput"></a>

```go
func DataPullModeInput() *string
```

- *Type:* *string

---

##### `FirstExecutionFromInput`<sup>Optional</sup> <a name="FirstExecutionFromInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.firstExecutionFromInput"></a>

```go
func FirstExecutionFromInput() *f64
```

- *Type:* *f64

---

##### `ScheduleEndTimeInput`<sup>Optional</sup> <a name="ScheduleEndTimeInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleEndTimeInput"></a>

```go
func ScheduleEndTimeInput() *f64
```

- *Type:* *f64

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleExpressionInput"></a>

```go
func ScheduleExpressionInput() *string
```

- *Type:* *string

---

##### `ScheduleOffsetInput`<sup>Optional</sup> <a name="ScheduleOffsetInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleOffsetInput"></a>

```go
func ScheduleOffsetInput() *f64
```

- *Type:* *f64

---

##### `ScheduleStartTimeInput`<sup>Optional</sup> <a name="ScheduleStartTimeInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleStartTimeInput"></a>

```go
func ScheduleStartTimeInput() *f64
```

- *Type:* *f64

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `DataPullMode`<sup>Required</sup> <a name="DataPullMode" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.dataPullMode"></a>

```go
func DataPullMode() *string
```

- *Type:* *string

---

##### `FirstExecutionFrom`<sup>Required</sup> <a name="FirstExecutionFrom" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.firstExecutionFrom"></a>

```go
func FirstExecutionFrom() *f64
```

- *Type:* *f64

---

##### `ScheduleEndTime`<sup>Required</sup> <a name="ScheduleEndTime" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleEndTime"></a>

```go
func ScheduleEndTime() *f64
```

- *Type:* *f64

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `ScheduleOffset`<sup>Required</sup> <a name="ScheduleOffset" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleOffset"></a>

```go
func ScheduleOffset() *f64
```

- *Type:* *f64

---

##### `ScheduleStartTime`<sup>Required</sup> <a name="ScheduleStartTime" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.scheduleStartTime"></a>

```go
func ScheduleStartTime() *f64
```

- *Type:* *f64

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationObjectTypeNamesList <a name="CustomerprofilesIntegrationObjectTypeNamesList" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationObjectTypeNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomerprofilesIntegrationObjectTypeNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.get"></a>

```go
func Get(index *f64) CustomerprofilesIntegrationObjectTypeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationObjectTypeNamesOutputReference <a name="CustomerprofilesIntegrationObjectTypeNamesOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationObjectTypeNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomerprofilesIntegrationObjectTypeNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationObjectTypeNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationTagsList <a name="CustomerprofilesIntegrationTagsList" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomerprofilesIntegrationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.get"></a>

```go
func Get(index *f64) CustomerprofilesIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesIntegrationTagsOutputReference <a name="CustomerprofilesIntegrationTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesintegration"

customerprofilesintegration.NewCustomerprofilesIntegrationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomerprofilesIntegrationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesIntegration.CustomerprofilesIntegrationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



