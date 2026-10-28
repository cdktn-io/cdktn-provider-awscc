# `securityagentIntegration` Submodule <a name="`securityagentIntegration` Submodule" id="@cdktn/provider-awscc.securityagentIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentIntegration <a name="SecurityagentIntegration" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration awscc_securityagent_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

securityagentintegration.NewSecurityagentIntegration(scope Construct, id *string, config SecurityagentIntegrationConfig) SecurityagentIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig">SecurityagentIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig">SecurityagentIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putProviderInput">PutProviderInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetPrivateConnectionName">ResetPrivateConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetProviderInput">ResetProviderInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderInput` <a name="PutProviderInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putProviderInput"></a>

```go
func PutProviderInput(value SecurityagentIntegrationProviderInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putProviderInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetPrivateConnectionName` <a name="ResetPrivateConnectionName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetPrivateConnectionName"></a>

```go
func ResetPrivateConnectionName()
```

##### `ResetProviderInput` <a name="ResetProviderInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetProviderInput"></a>

```go
func ResetProviderInput()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityagentIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

securityagentintegration.SecurityagentIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

securityagentintegration.SecurityagentIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

securityagentintegration.SecurityagentIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

securityagentintegration.SecurityagentIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecurityagentIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityagentIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityagentIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.installationId">InstallationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.integrationId">IntegrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerInput">ProviderInput</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference">SecurityagentIntegrationProviderInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerType">ProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList">SecurityagentIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.targetUrl">TargetUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.privateConnectionNameInput">PrivateConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerInputInput">ProviderInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.privateConnectionName">PrivateConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.installationId"></a>

```go
func InstallationId() *string
```

- *Type:* *string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.integrationId"></a>

```go
func IntegrationId() *string
```

- *Type:* *string

---

##### `ProviderInput`<sup>Required</sup> <a name="ProviderInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerInput"></a>

```go
func ProviderInput() SecurityagentIntegrationProviderInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference">SecurityagentIntegrationProviderInputOutputReference</a>

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerType"></a>

```go
func ProviderType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tags"></a>

```go
func Tags() SecurityagentIntegrationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList">SecurityagentIntegrationTagsList</a>

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.targetUrl"></a>

```go
func TargetUrl() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `PrivateConnectionNameInput`<sup>Optional</sup> <a name="PrivateConnectionNameInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.privateConnectionNameInput"></a>

```go
func PrivateConnectionNameInput() *string
```

- *Type:* *string

---

##### `ProviderInputInput`<sup>Optional</sup> <a name="ProviderInputInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerInputInput"></a>

```go
func ProviderInputInput() interface{}
```

- *Type:* interface{}

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `PrivateConnectionName`<sup>Required</sup> <a name="PrivateConnectionName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.privateConnectionName"></a>

```go
func PrivateConnectionName() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentIntegrationConfig <a name="SecurityagentIntegrationConfig" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

&securityagentintegration.SecurityagentIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	ProviderName: *string,
	KmsKeyId: *string,
	PrivateConnectionName: *string,
	ProviderInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.securityagentIntegration.SecurityagentIntegrationProviderInput,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for the integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.providerName">ProviderName</a></code> | <code>*string</code> | The integration provider. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The identifier of the AWS KMS key to use for encrypting data associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.privateConnectionName">PrivateConnectionName</a></code> | <code>*string</code> | The name of an active private connection used to reach a self-hosted provider instance over private networking. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.providerInput">ProviderInput</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a></code> | The provider-specific input required to create the integration. Exactly one of the provider input objects must be specified. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags to associate with the integration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#display_name SecurityagentIntegration#display_name}

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

The integration provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#provider_name SecurityagentIntegration#provider_name}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The identifier of the AWS KMS key to use for encrypting data associated with the integration.

Can be a key ID, key ARN, alias name, or alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#kms_key_id SecurityagentIntegration#kms_key_id}

---

##### `PrivateConnectionName`<sup>Optional</sup> <a name="PrivateConnectionName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.privateConnectionName"></a>

```go
PrivateConnectionName *string
```

- *Type:* *string

The name of an active private connection used to reach a self-hosted provider instance over private networking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#private_connection_name SecurityagentIntegration#private_connection_name}

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.providerInput"></a>

```go
ProviderInput SecurityagentIntegrationProviderInput
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a>

The provider-specific input required to create the integration. Exactly one of the provider input objects must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#provider_input SecurityagentIntegration#provider_input}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags to associate with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#tags SecurityagentIntegration#tags}

---

### SecurityagentIntegrationProviderInput <a name="SecurityagentIntegrationProviderInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

&securityagentintegration.SecurityagentIntegrationProviderInput {
	Bitbucket: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket,
	Confluence: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence,
	Github: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.securityagentIntegration.SecurityagentIntegrationProviderInputGithub,
	Gitlab: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.bitbucket">Bitbucket</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a></code> | The input required to create a Bitbucket integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.confluence">Confluence</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a></code> | The input required to create a Confluence integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.github">Github</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a></code> | The input required to create a GitHub integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.gitlab">Gitlab</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a></code> | The input required to create a GitLab integration. |

---

##### `Bitbucket`<sup>Optional</sup> <a name="Bitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.bitbucket"></a>

```go
Bitbucket SecurityagentIntegrationProviderInputBitbucket
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a>

The input required to create a Bitbucket integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#bitbucket SecurityagentIntegration#bitbucket}

---

##### `Confluence`<sup>Optional</sup> <a name="Confluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.confluence"></a>

```go
Confluence SecurityagentIntegrationProviderInputConfluence
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a>

The input required to create a Confluence integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#confluence SecurityagentIntegration#confluence}

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.github"></a>

```go
Github SecurityagentIntegrationProviderInputGithub
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a>

The input required to create a GitHub integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#github SecurityagentIntegration#github}

---

##### `Gitlab`<sup>Optional</sup> <a name="Gitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.gitlab"></a>

```go
Gitlab SecurityagentIntegrationProviderInputGitlab
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a>

The input required to create a GitLab integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#gitlab SecurityagentIntegration#gitlab}

---

### SecurityagentIntegrationProviderInputBitbucket <a name="SecurityagentIntegrationProviderInputBitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

&securityagentintegration.SecurityagentIntegrationProviderInputBitbucket {
	Code: *string,
	InstallationId: *string,
	State: *string,
	Workspace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.code">Code</a></code> | <code>*string</code> | The OAuth 2.0 authorization code returned from the consent redirect. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.installationId">InstallationId</a></code> | <code>*string</code> | The Atlassian installation identifier, available from the Atlassian administration console. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.state">State</a></code> | <code>*string</code> | The CSRF state token echoed back from the OAuth redirect. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.workspace">Workspace</a></code> | <code>*string</code> | The Bitbucket workspace slug that identifies the workspace to integrate. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.code"></a>

```go
Code *string
```

- *Type:* *string

The OAuth 2.0 authorization code returned from the consent redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#code SecurityagentIntegration#code}

---

##### `InstallationId`<sup>Optional</sup> <a name="InstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.installationId"></a>

```go
InstallationId *string
```

- *Type:* *string

The Atlassian installation identifier, available from the Atlassian administration console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#installation_id SecurityagentIntegration#installation_id}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.state"></a>

```go
State *string
```

- *Type:* *string

The CSRF state token echoed back from the OAuth redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#state SecurityagentIntegration#state}

---

##### `Workspace`<sup>Optional</sup> <a name="Workspace" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.workspace"></a>

```go
Workspace *string
```

- *Type:* *string

The Bitbucket workspace slug that identifies the workspace to integrate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#workspace SecurityagentIntegration#workspace}

---

### SecurityagentIntegrationProviderInputConfluence <a name="SecurityagentIntegrationProviderInputConfluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

&securityagentintegration.SecurityagentIntegrationProviderInputConfluence {
	Code: *string,
	InstallationId: *string,
	SiteUrl: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.code">Code</a></code> | <code>*string</code> | The OAuth 2.0 authorization code returned from the consent redirect. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.installationId">InstallationId</a></code> | <code>*string</code> | The Atlassian installation identifier, available from the Atlassian administration console. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.siteUrl">SiteUrl</a></code> | <code>*string</code> | The Confluence Cloud site URL, for example https://mysite.atlassian.net. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.state">State</a></code> | <code>*string</code> | The CSRF state token echoed back from the OAuth redirect. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.code"></a>

```go
Code *string
```

- *Type:* *string

The OAuth 2.0 authorization code returned from the consent redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#code SecurityagentIntegration#code}

---

##### `InstallationId`<sup>Optional</sup> <a name="InstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.installationId"></a>

```go
InstallationId *string
```

- *Type:* *string

The Atlassian installation identifier, available from the Atlassian administration console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#installation_id SecurityagentIntegration#installation_id}

---

##### `SiteUrl`<sup>Optional</sup> <a name="SiteUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.siteUrl"></a>

```go
SiteUrl *string
```

- *Type:* *string

The Confluence Cloud site URL, for example https://mysite.atlassian.net.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#site_url SecurityagentIntegration#site_url}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.state"></a>

```go
State *string
```

- *Type:* *string

The CSRF state token echoed back from the OAuth redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#state SecurityagentIntegration#state}

---

### SecurityagentIntegrationProviderInputGithub <a name="SecurityagentIntegrationProviderInputGithub" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

&securityagentintegration.SecurityagentIntegrationProviderInputGithub {
	Code: *string,
	InstallationId: *string,
	OrganizationName: *string,
	State: *string,
	TargetUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.code">Code</a></code> | <code>*string</code> | The OAuth authorization code received from GitHub. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.installationId">InstallationId</a></code> | <code>*string</code> | The installation identifier provided by GitHub Enterprise Server on the install callback. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.organizationName">OrganizationName</a></code> | <code>*string</code> | The name of the GitHub organization to integrate with. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.state">State</a></code> | <code>*string</code> | The CSRF state token for validating the OAuth flow. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.targetUrl">TargetUrl</a></code> | <code>*string</code> | The HTTPS URL of a self-hosted GitHub Enterprise Server instance. Omit this value for GitHub.com. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.code"></a>

```go
Code *string
```

- *Type:* *string

The OAuth authorization code received from GitHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#code SecurityagentIntegration#code}

---

##### `InstallationId`<sup>Optional</sup> <a name="InstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.installationId"></a>

```go
InstallationId *string
```

- *Type:* *string

The installation identifier provided by GitHub Enterprise Server on the install callback.

Required for GitHub Enterprise Server integrations and ignored for GitHub.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#installation_id SecurityagentIntegration#installation_id}

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.organizationName"></a>

```go
OrganizationName *string
```

- *Type:* *string

The name of the GitHub organization to integrate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#organization_name SecurityagentIntegration#organization_name}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.state"></a>

```go
State *string
```

- *Type:* *string

The CSRF state token for validating the OAuth flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#state SecurityagentIntegration#state}

---

##### `TargetUrl`<sup>Optional</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.targetUrl"></a>

```go
TargetUrl *string
```

- *Type:* *string

The HTTPS URL of a self-hosted GitHub Enterprise Server instance. Omit this value for GitHub.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#target_url SecurityagentIntegration#target_url}

---

### SecurityagentIntegrationProviderInputGitlab <a name="SecurityagentIntegrationProviderInputGitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

&securityagentintegration.SecurityagentIntegrationProviderInputGitlab {
	AccessToken: *string,
	GroupId: *string,
	TargetUrl: *string,
	TokenType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.accessToken">AccessToken</a></code> | <code>*string</code> | The GitLab access token used to authenticate. This can be a personal access token or a group access token. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.groupId">GroupId</a></code> | <code>*string</code> | The identifier of the GitLab group. Required when TokenType is GROUP and ignored for personal tokens. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.targetUrl">TargetUrl</a></code> | <code>*string</code> | The HTTPS URL of a self-managed GitLab instance. Omit this value for GitLab SaaS (gitlab.com). |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.tokenType">TokenType</a></code> | <code>*string</code> | The type of GitLab access token. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.accessToken"></a>

```go
AccessToken *string
```

- *Type:* *string

The GitLab access token used to authenticate. This can be a personal access token or a group access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#access_token SecurityagentIntegration#access_token}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

The identifier of the GitLab group. Required when TokenType is GROUP and ignored for personal tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#group_id SecurityagentIntegration#group_id}

---

##### `TargetUrl`<sup>Optional</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.targetUrl"></a>

```go
TargetUrl *string
```

- *Type:* *string

The HTTPS URL of a self-managed GitLab instance. Omit this value for GitLab SaaS (gitlab.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#target_url SecurityagentIntegration#target_url}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.tokenType"></a>

```go
TokenType *string
```

- *Type:* *string

The type of GitLab access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#token_type SecurityagentIntegration#token_type}

---

### SecurityagentIntegrationTags <a name="SecurityagentIntegrationTags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

&securityagentintegration.SecurityagentIntegrationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#key SecurityagentIntegration#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#value SecurityagentIntegration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityagentIntegrationProviderInputBitbucketOutputReference <a name="SecurityagentIntegrationProviderInputBitbucketOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

securityagentintegration.NewSecurityagentIntegrationProviderInputBitbucketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityagentIntegrationProviderInputBitbucketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetInstallationId">ResetInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetWorkspace">ResetWorkspace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetCode"></a>

```go
func ResetCode()
```

##### `ResetInstallationId` <a name="ResetInstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetInstallationId"></a>

```go
func ResetInstallationId()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetWorkspace` <a name="ResetWorkspace" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetWorkspace"></a>

```go
func ResetWorkspace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.codeInput">CodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationIdInput">InstallationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspaceInput">WorkspaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationId">InstallationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspace">Workspace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.codeInput"></a>

```go
func CodeInput() *string
```

- *Type:* *string

---

##### `InstallationIdInput`<sup>Optional</sup> <a name="InstallationIdInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationIdInput"></a>

```go
func InstallationIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspaceInput"></a>

```go
func WorkspaceInput() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationId"></a>

```go
func InstallationId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspace"></a>

```go
func Workspace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityagentIntegrationProviderInputConfluenceOutputReference <a name="SecurityagentIntegrationProviderInputConfluenceOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

securityagentintegration.NewSecurityagentIntegrationProviderInputConfluenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityagentIntegrationProviderInputConfluenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetInstallationId">ResetInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetSiteUrl">ResetSiteUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetCode"></a>

```go
func ResetCode()
```

##### `ResetInstallationId` <a name="ResetInstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetInstallationId"></a>

```go
func ResetInstallationId()
```

##### `ResetSiteUrl` <a name="ResetSiteUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetSiteUrl"></a>

```go
func ResetSiteUrl()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetState"></a>

```go
func ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.codeInput">CodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationIdInput">InstallationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrlInput">SiteUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationId">InstallationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrl">SiteUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.codeInput"></a>

```go
func CodeInput() *string
```

- *Type:* *string

---

##### `InstallationIdInput`<sup>Optional</sup> <a name="InstallationIdInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationIdInput"></a>

```go
func InstallationIdInput() *string
```

- *Type:* *string

---

##### `SiteUrlInput`<sup>Optional</sup> <a name="SiteUrlInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrlInput"></a>

```go
func SiteUrlInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationId"></a>

```go
func InstallationId() *string
```

- *Type:* *string

---

##### `SiteUrl`<sup>Required</sup> <a name="SiteUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrl"></a>

```go
func SiteUrl() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityagentIntegrationProviderInputGithubOutputReference <a name="SecurityagentIntegrationProviderInputGithubOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

securityagentintegration.NewSecurityagentIntegrationProviderInputGithubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityagentIntegrationProviderInputGithubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetInstallationId">ResetInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetTargetUrl">ResetTargetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetCode"></a>

```go
func ResetCode()
```

##### `ResetInstallationId` <a name="ResetInstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetInstallationId"></a>

```go
func ResetInstallationId()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetOrganizationName"></a>

```go
func ResetOrganizationName()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetTargetUrl` <a name="ResetTargetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetTargetUrl"></a>

```go
func ResetTargetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.codeInput">CodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.installationIdInput">InstallationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrlInput">TargetUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.installationId">InstallationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrl">TargetUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.codeInput"></a>

```go
func CodeInput() *string
```

- *Type:* *string

---

##### `InstallationIdInput`<sup>Optional</sup> <a name="InstallationIdInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.installationIdInput"></a>

```go
func InstallationIdInput() *string
```

- *Type:* *string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.organizationNameInput"></a>

```go
func OrganizationNameInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TargetUrlInput`<sup>Optional</sup> <a name="TargetUrlInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrlInput"></a>

```go
func TargetUrlInput() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.installationId"></a>

```go
func InstallationId() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrl"></a>

```go
func TargetUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityagentIntegrationProviderInputGitlabOutputReference <a name="SecurityagentIntegrationProviderInputGitlabOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

securityagentintegration.NewSecurityagentIntegrationProviderInputGitlabOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityagentIntegrationProviderInputGitlabOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetTargetUrl">ResetTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetAccessToken"></a>

```go
func ResetAccessToken()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetTargetUrl` <a name="ResetTargetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetTargetUrl"></a>

```go
func ResetTargetUrl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetTokenType"></a>

```go
func ResetTokenType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrlInput">TargetUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenTypeInput">TokenTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrl">TargetUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.accessTokenInput"></a>

```go
func AccessTokenInput() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `TargetUrlInput`<sup>Optional</sup> <a name="TargetUrlInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrlInput"></a>

```go
func TargetUrlInput() *string
```

- *Type:* *string

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenTypeInput"></a>

```go
func TokenTypeInput() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrl"></a>

```go
func TargetUrl() *string
```

- *Type:* *string

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityagentIntegrationProviderInputOutputReference <a name="SecurityagentIntegrationProviderInputOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

securityagentintegration.NewSecurityagentIntegrationProviderInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityagentIntegrationProviderInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putBitbucket">PutBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putConfluence">PutConfluence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGitlab">PutGitlab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetBitbucket">ResetBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetConfluence">ResetConfluence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetGitlab">ResetGitlab</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBitbucket` <a name="PutBitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putBitbucket"></a>

```go
func PutBitbucket(value SecurityagentIntegrationProviderInputBitbucket)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putBitbucket.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a>

---

##### `PutConfluence` <a name="PutConfluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putConfluence"></a>

```go
func PutConfluence(value SecurityagentIntegrationProviderInputConfluence)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putConfluence.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a>

---

##### `PutGithub` <a name="PutGithub" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGithub"></a>

```go
func PutGithub(value SecurityagentIntegrationProviderInputGithub)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGithub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a>

---

##### `PutGitlab` <a name="PutGitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGitlab"></a>

```go
func PutGitlab(value SecurityagentIntegrationProviderInputGitlab)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGitlab.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a>

---

##### `ResetBitbucket` <a name="ResetBitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetBitbucket"></a>

```go
func ResetBitbucket()
```

##### `ResetConfluence` <a name="ResetConfluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetConfluence"></a>

```go
func ResetConfluence()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetGithub"></a>

```go
func ResetGithub()
```

##### `ResetGitlab` <a name="ResetGitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetGitlab"></a>

```go
func ResetGitlab()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.bitbucket">Bitbucket</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference">SecurityagentIntegrationProviderInputBitbucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.confluence">Confluence</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference">SecurityagentIntegrationProviderInputConfluenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.github">Github</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference">SecurityagentIntegrationProviderInputGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.gitlab">Gitlab</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference">SecurityagentIntegrationProviderInputGitlabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.bitbucketInput">BitbucketInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.confluenceInput">ConfluenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.githubInput">GithubInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.gitlabInput">GitlabInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bitbucket`<sup>Required</sup> <a name="Bitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.bitbucket"></a>

```go
func Bitbucket() SecurityagentIntegrationProviderInputBitbucketOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference">SecurityagentIntegrationProviderInputBitbucketOutputReference</a>

---

##### `Confluence`<sup>Required</sup> <a name="Confluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.confluence"></a>

```go
func Confluence() SecurityagentIntegrationProviderInputConfluenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference">SecurityagentIntegrationProviderInputConfluenceOutputReference</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.github"></a>

```go
func Github() SecurityagentIntegrationProviderInputGithubOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference">SecurityagentIntegrationProviderInputGithubOutputReference</a>

---

##### `Gitlab`<sup>Required</sup> <a name="Gitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.gitlab"></a>

```go
func Gitlab() SecurityagentIntegrationProviderInputGitlabOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference">SecurityagentIntegrationProviderInputGitlabOutputReference</a>

---

##### `BitbucketInput`<sup>Optional</sup> <a name="BitbucketInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.bitbucketInput"></a>

```go
func BitbucketInput() interface{}
```

- *Type:* interface{}

---

##### `ConfluenceInput`<sup>Optional</sup> <a name="ConfluenceInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.confluenceInput"></a>

```go
func ConfluenceInput() interface{}
```

- *Type:* interface{}

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.githubInput"></a>

```go
func GithubInput() interface{}
```

- *Type:* interface{}

---

##### `GitlabInput`<sup>Optional</sup> <a name="GitlabInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.gitlabInput"></a>

```go
func GitlabInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityagentIntegrationTagsList <a name="SecurityagentIntegrationTagsList" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

securityagentintegration.NewSecurityagentIntegrationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityagentIntegrationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.get"></a>

```go
func Get(index *f64) SecurityagentIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityagentIntegrationTagsOutputReference <a name="SecurityagentIntegrationTagsOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentintegration"

securityagentintegration.NewSecurityagentIntegrationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityagentIntegrationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



