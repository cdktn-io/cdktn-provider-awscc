# `lakeformationPrincipalPermissions` Submodule <a name="`lakeformationPrincipalPermissions` Submodule" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationPrincipalPermissions <a name="LakeformationPrincipalPermissions" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions awscc_lakeformation_principal_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

lakeformationprincipalpermissions.NewLakeformationPrincipalPermissions(scope Construct, id *string, config LakeformationPrincipalPermissionsConfig) LakeformationPrincipalPermissions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig">LakeformationPrincipalPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig">LakeformationPrincipalPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource">PutResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.resetCatalog">ResetCatalog</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putPrincipal"></a>

```go
func PutPrincipal(value LakeformationPrincipalPermissionsPrincipal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a>

---

##### `PutResource` <a name="PutResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource"></a>

```go
func PutResource(value LakeformationPrincipalPermissionsResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a>

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.resetCatalog"></a>

```go
func ResetCatalog()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LakeformationPrincipalPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

lakeformationprincipalpermissions.LakeformationPrincipalPermissions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

lakeformationprincipalpermissions.LakeformationPrincipalPermissions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

lakeformationprincipalpermissions.LakeformationPrincipalPermissions_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

lakeformationprincipalpermissions.LakeformationPrincipalPermissions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LakeformationPrincipalPermissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LakeformationPrincipalPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LakeformationPrincipalPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LakeformationPrincipalPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference">LakeformationPrincipalPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principalIdentifier">PrincipalIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resource">Resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference">LakeformationPrincipalPermissionsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsInput">PermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsWithGrantOptionInput">PermissionsWithGrantOptionInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principalInput">PrincipalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resourceInput">ResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsWithGrantOption">PermissionsWithGrantOption</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principal"></a>

```go
func Principal() LakeformationPrincipalPermissionsPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference">LakeformationPrincipalPermissionsPrincipalOutputReference</a>

---

##### `PrincipalIdentifier`<sup>Required</sup> <a name="PrincipalIdentifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principalIdentifier"></a>

```go
func PrincipalIdentifier() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resource"></a>

```go
func Resource() LakeformationPrincipalPermissionsResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference">LakeformationPrincipalPermissionsResourceOutputReference</a>

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resourceIdentifier"></a>

```go
func ResourceIdentifier() *string
```

- *Type:* *string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsInput"></a>

```go
func PermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PermissionsWithGrantOptionInput`<sup>Optional</sup> <a name="PermissionsWithGrantOptionInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsWithGrantOptionInput"></a>

```go
func PermissionsWithGrantOptionInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principalInput"></a>

```go
func PrincipalInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resourceInput"></a>

```go
func ResourceInput() interface{}
```

- *Type:* interface{}

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `PermissionsWithGrantOption`<sup>Required</sup> <a name="PermissionsWithGrantOption" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsWithGrantOption"></a>

```go
func PermissionsWithGrantOption() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationPrincipalPermissionsConfig <a name="LakeformationPrincipalPermissionsConfig" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

&lakeformationprincipalpermissions.LakeformationPrincipalPermissionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Permissions: *[]*string,
	PermissionsWithGrantOption: *[]*string,
	Principal: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal,
	Resource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource,
	Catalog: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.permissions">Permissions</a></code> | <code>*[]*string</code> | The permissions granted or revoked. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.permissionsWithGrantOption">PermissionsWithGrantOption</a></code> | <code>*[]*string</code> | Indicates the ability to grant permissions (as a subset of permissions granted). |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a></code> | The principal to be granted a permission. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.resource">Resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a></code> | The resource to be granted or revoked permissions. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.catalog">Catalog</a></code> | <code>*string</code> | The identifier for the GLUDC. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.permissions"></a>

```go
Permissions *[]*string
```

- *Type:* *[]*string

The permissions granted or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#permissions LakeformationPrincipalPermissions#permissions}

---

##### `PermissionsWithGrantOption`<sup>Required</sup> <a name="PermissionsWithGrantOption" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.permissionsWithGrantOption"></a>

```go
PermissionsWithGrantOption *[]*string
```

- *Type:* *[]*string

Indicates the ability to grant permissions (as a subset of permissions granted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#permissions_with_grant_option LakeformationPrincipalPermissions#permissions_with_grant_option}

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.principal"></a>

```go
Principal LakeformationPrincipalPermissionsPrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a>

The principal to be granted a permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#principal LakeformationPrincipalPermissions#principal}

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.resource"></a>

```go
Resource LakeformationPrincipalPermissionsResource
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a>

The resource to be granted or revoked permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#resource LakeformationPrincipalPermissions#resource}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

The identifier for the GLUDC.

By default, the account ID. The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog LakeformationPrincipalPermissions#catalog}

---

### LakeformationPrincipalPermissionsPrincipal <a name="LakeformationPrincipalPermissionsPrincipal" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

&lakeformationprincipalpermissions.LakeformationPrincipalPermissionsPrincipal {
	DataLakePrincipalIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal.property.dataLakePrincipalIdentifier">DataLakePrincipalIdentifier</a></code> | <code>*string</code> | An identifier for the LFlong principal. |

---

##### `DataLakePrincipalIdentifier`<sup>Optional</sup> <a name="DataLakePrincipalIdentifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal.property.dataLakePrincipalIdentifier"></a>

```go
DataLakePrincipalIdentifier *string
```

- *Type:* *string

An identifier for the LFlong principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#data_lake_principal_identifier LakeformationPrincipalPermissions#data_lake_principal_identifier}

---

### LakeformationPrincipalPermissionsResource <a name="LakeformationPrincipalPermissionsResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

&lakeformationprincipalpermissions.LakeformationPrincipalPermissionsResource {
	Catalog: *string,
	Database: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase,
	DataCellsFilter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter,
	DataLocation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation,
	LfTag: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag,
	LfTagPolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy,
	Table: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable,
	TableWithColumns: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.catalog">Catalog</a></code> | <code>*string</code> | The identifier for the Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.database">Database</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a></code> | The database for the resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.dataCellsFilter">DataCellsFilter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a></code> | A data cell filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.dataLocation">DataLocation</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a></code> | The location of an Amazon S3 path where permissions are granted or revoked. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.lfTag">LfTag</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a></code> | The LF-tag key and values attached to a resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.lfTagPolicy">LfTagPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a></code> | A list of LF-tag conditions that define a resource's LF-tag policy. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.table">Table</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a></code> | The table for the resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a></code> | The table with columns for the resource. |

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

The identifier for the Data Catalog.

By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog LakeformationPrincipalPermissions#catalog}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.database"></a>

```go
Database LakeformationPrincipalPermissionsResourceDatabase
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a>

The database for the resource.

Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#database LakeformationPrincipalPermissions#database}

---

##### `DataCellsFilter`<sup>Optional</sup> <a name="DataCellsFilter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.dataCellsFilter"></a>

```go
DataCellsFilter LakeformationPrincipalPermissionsResourceDataCellsFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a>

A data cell filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#data_cells_filter LakeformationPrincipalPermissions#data_cells_filter}

---

##### `DataLocation`<sup>Optional</sup> <a name="DataLocation" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.dataLocation"></a>

```go
DataLocation LakeformationPrincipalPermissionsResourceDataLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a>

The location of an Amazon S3 path where permissions are granted or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#data_location LakeformationPrincipalPermissions#data_location}

---

##### `LfTag`<sup>Optional</sup> <a name="LfTag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.lfTag"></a>

```go
LfTag LakeformationPrincipalPermissionsResourceLfTag
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a>

The LF-tag key and values attached to a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#lf_tag LakeformationPrincipalPermissions#lf_tag}

---

##### `LfTagPolicy`<sup>Optional</sup> <a name="LfTagPolicy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.lfTagPolicy"></a>

```go
LfTagPolicy LakeformationPrincipalPermissionsResourceLfTagPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a>

A list of LF-tag conditions that define a resource's LF-tag policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#lf_tag_policy LakeformationPrincipalPermissions#lf_tag_policy}

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.table"></a>

```go
Table LakeformationPrincipalPermissionsResourceTable
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a>

The table for the resource.

A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table LakeformationPrincipalPermissions#table}

---

##### `TableWithColumns`<sup>Optional</sup> <a name="TableWithColumns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.tableWithColumns"></a>

```go
TableWithColumns LakeformationPrincipalPermissionsResourceTableWithColumns
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a>

The table with columns for the resource.

A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table_with_columns LakeformationPrincipalPermissions#table_with_columns}

---

### LakeformationPrincipalPermissionsResourceDatabase <a name="LakeformationPrincipalPermissionsResourceDatabase" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

&lakeformationprincipalpermissions.LakeformationPrincipalPermissionsResourceDatabase {
	CatalogId: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.property.catalogId">CatalogId</a></code> | <code>*string</code> | The identifier for the Data Catalog. By default, it is the account ID of the caller. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.property.name">Name</a></code> | <code>*string</code> | The name of the database resource. Unique to the Data Catalog. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

The identifier for the Data Catalog. By default, it is the account ID of the caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the database resource. Unique to the Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

### LakeformationPrincipalPermissionsResourceDataCellsFilter <a name="LakeformationPrincipalPermissionsResourceDataCellsFilter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

&lakeformationprincipalpermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter {
	DatabaseName: *string,
	Name: *string,
	TableCatalogId: *string,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.databaseName">DatabaseName</a></code> | <code>*string</code> | A database in the GLUDC. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.name">Name</a></code> | <code>*string</code> | The name given by the user to the data filter cell. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.tableCatalogId">TableCatalogId</a></code> | <code>*string</code> | The ID of the catalog to which the table belongs. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.tableName">TableName</a></code> | <code>*string</code> | The name of the table. |

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

A database in the GLUDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#database_name LakeformationPrincipalPermissions#database_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name given by the user to the data filter cell.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

##### `TableCatalogId`<sup>Optional</sup> <a name="TableCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.tableCatalogId"></a>

```go
TableCatalogId *string
```

- *Type:* *string

The ID of the catalog to which the table belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table_catalog_id LakeformationPrincipalPermissions#table_catalog_id}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table_name LakeformationPrincipalPermissions#table_name}

---

### LakeformationPrincipalPermissionsResourceDataLocation <a name="LakeformationPrincipalPermissionsResourceDataLocation" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

&lakeformationprincipalpermissions.LakeformationPrincipalPermissionsResourceDataLocation {
	CatalogId: *string,
	ResourceArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.property.catalogId">CatalogId</a></code> | <code>*string</code> | The identifier for the GLUDC where the location is registered with LFlong. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) that uniquely identifies the data location resource. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

The identifier for the GLUDC where the location is registered with LFlong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.property.resourceArn"></a>

```go
ResourceArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) that uniquely identifies the data location resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#resource_arn LakeformationPrincipalPermissions#resource_arn}

---

### LakeformationPrincipalPermissionsResourceLfTag <a name="LakeformationPrincipalPermissionsResourceLfTag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

&lakeformationprincipalpermissions.LakeformationPrincipalPermissionsResourceLfTag {
	CatalogId: *string,
	TagKey: *string,
	TagValues: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.catalogId">CatalogId</a></code> | <code>*string</code> | The identifier for the GLUDC where the location is registered with GLUDC. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.tagKey">TagKey</a></code> | <code>*string</code> | The key-name for the LF-tag. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.tagValues">TagValues</a></code> | <code>*[]*string</code> | A list of possible values for the corresponding ``TagKey`` of an LF-tag key-value pair. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

The identifier for the GLUDC where the location is registered with GLUDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `TagKey`<sup>Optional</sup> <a name="TagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

The key-name for the LF-tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#tag_key LakeformationPrincipalPermissions#tag_key}

---

##### `TagValues`<sup>Optional</sup> <a name="TagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.tagValues"></a>

```go
TagValues *[]*string
```

- *Type:* *[]*string

A list of possible values for the corresponding ``TagKey`` of an LF-tag key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#tag_values LakeformationPrincipalPermissions#tag_values}

---

### LakeformationPrincipalPermissionsResourceLfTagPolicy <a name="LakeformationPrincipalPermissionsResourceLfTagPolicy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

&lakeformationprincipalpermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy {
	CatalogId: *string,
	Expression: interface{},
	ResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.catalogId">CatalogId</a></code> | <code>*string</code> | The identifier for the GLUDC. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.expression">Expression</a></code> | <code>interface{}</code> | A list of LF-tag conditions that apply to the resource's LF-tag policy. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.resourceType">ResourceType</a></code> | <code>*string</code> | The resource type for which the LF-tag policy applies. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

The identifier for the GLUDC.

The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.expression"></a>

```go
Expression interface{}
```

- *Type:* interface{}

A list of LF-tag conditions that apply to the resource's LF-tag policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#expression LakeformationPrincipalPermissions#expression}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

The resource type for which the LF-tag policy applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#resource_type LakeformationPrincipalPermissions#resource_type}

---

### LakeformationPrincipalPermissionsResourceLfTagPolicyExpression <a name="LakeformationPrincipalPermissionsResourceLfTagPolicyExpression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

&lakeformationprincipalpermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression {
	TagKey: *string,
	TagValues: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.property.tagKey">TagKey</a></code> | <code>*string</code> | The key-name for the LF-tag. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.property.tagValues">TagValues</a></code> | <code>*[]*string</code> | A list of possible values of the corresponding ``TagKey`` of an LF-tag key-value pair. |

---

##### `TagKey`<sup>Optional</sup> <a name="TagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

The key-name for the LF-tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#tag_key LakeformationPrincipalPermissions#tag_key}

---

##### `TagValues`<sup>Optional</sup> <a name="TagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.property.tagValues"></a>

```go
TagValues *[]*string
```

- *Type:* *[]*string

A list of possible values of the corresponding ``TagKey`` of an LF-tag key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#tag_values LakeformationPrincipalPermissions#tag_values}

---

### LakeformationPrincipalPermissionsResourceTable <a name="LakeformationPrincipalPermissionsResourceTable" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

&lakeformationprincipalpermissions.LakeformationPrincipalPermissionsResourceTable {
	CatalogId: *string,
	DatabaseName: *string,
	Name: *string,
	TableWildcard: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.catalogId">CatalogId</a></code> | <code>*string</code> | The identifier for the Data Catalog. By default, it is the account ID of the caller. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.databaseName">DatabaseName</a></code> | <code>*string</code> | The name of the database for the table. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.name">Name</a></code> | <code>*string</code> | The name of the table. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.tableWildcard">TableWildcard</a></code> | <code>*string</code> | A wildcard object representing every table under a database.  At least one of ``TableResource$Name`` or ``TableResource$TableWildcard`` is required. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

The identifier for the Data Catalog. By default, it is the account ID of the caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

The name of the database for the table.

Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#database_name LakeformationPrincipalPermissions#database_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

##### `TableWildcard`<sup>Optional</sup> <a name="TableWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.tableWildcard"></a>

```go
TableWildcard *string
```

- *Type:* *string

A wildcard object representing every table under a database.  At least one of ``TableResource$Name`` or ``TableResource$TableWildcard`` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table_wildcard LakeformationPrincipalPermissions#table_wildcard}

---

### LakeformationPrincipalPermissionsResourceTableWithColumns <a name="LakeformationPrincipalPermissionsResourceTableWithColumns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

&lakeformationprincipalpermissions.LakeformationPrincipalPermissionsResourceTableWithColumns {
	CatalogId: *string,
	ColumnNames: *[]*string,
	ColumnWildcard: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard,
	DatabaseName: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.catalogId">CatalogId</a></code> | <code>*string</code> | The identifier for the GLUDC where the location is registered with LFlong. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | The list of column names for the table. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.columnWildcard">ColumnWildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a></code> | A wildcard specified by a ``ColumnWildcard`` object. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.databaseName">DatabaseName</a></code> | <code>*string</code> | The name of the database for the table with columns resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.name">Name</a></code> | <code>*string</code> | The name of the table resource. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

The identifier for the GLUDC where the location is registered with LFlong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.columnNames"></a>

```go
ColumnNames *[]*string
```

- *Type:* *[]*string

The list of column names for the table. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#column_names LakeformationPrincipalPermissions#column_names}

---

##### `ColumnWildcard`<sup>Optional</sup> <a name="ColumnWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.columnWildcard"></a>

```go
ColumnWildcard LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a>

A wildcard specified by a ``ColumnWildcard`` object. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#column_wildcard LakeformationPrincipalPermissions#column_wildcard}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

The name of the database for the table with columns resource.

Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#database_name LakeformationPrincipalPermissions#database_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the table resource.

A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

### LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard <a name="LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

&lakeformationprincipalpermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard {
	ExcludedColumnNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>*[]*string</code> | Excludes column names. Any column with this name will be excluded. |

---

##### `ExcludedColumnNames`<sup>Optional</sup> <a name="ExcludedColumnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard.property.excludedColumnNames"></a>

```go
ExcludedColumnNames *[]*string
```

- *Type:* *[]*string

Excludes column names. Any column with this name will be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#excluded_column_names LakeformationPrincipalPermissions#excluded_column_names}

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationPrincipalPermissionsPrincipalOutputReference <a name="LakeformationPrincipalPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

lakeformationprincipalpermissions.NewLakeformationPrincipalPermissionsPrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationPrincipalPermissionsPrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier">ResetDataLakePrincipalIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataLakePrincipalIdentifier` <a name="ResetDataLakePrincipalIdentifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```go
func ResetDataLakePrincipalIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">DataLakePrincipalIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">DataLakePrincipalIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataLakePrincipalIdentifierInput`<sup>Optional</sup> <a name="DataLakePrincipalIdentifierInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```go
func DataLakePrincipalIdentifierInput() *string
```

- *Type:* *string

---

##### `DataLakePrincipalIdentifier`<sup>Required</sup> <a name="DataLakePrincipalIdentifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```go
func DataLakePrincipalIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationPrincipalPermissionsResourceDatabaseOutputReference <a name="LakeformationPrincipalPermissionsResourceDatabaseOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

lakeformationprincipalpermissions.NewLakeformationPrincipalPermissionsResourceDatabaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationPrincipalPermissionsResourceDatabaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference <a name="LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

lakeformationprincipalpermissions.NewLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetTableCatalogId">ResetTableCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetTableCatalogId` <a name="ResetTableCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetTableCatalogId"></a>

```go
func ResetTableCatalogId()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetTableName"></a>

```go
func ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogIdInput">TableCatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogId">TableCatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TableCatalogIdInput`<sup>Optional</sup> <a name="TableCatalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogIdInput"></a>

```go
func TableCatalogIdInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TableCatalogId`<sup>Required</sup> <a name="TableCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogId"></a>

```go
func TableCatalogId() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationPrincipalPermissionsResourceDataLocationOutputReference <a name="LakeformationPrincipalPermissionsResourceDataLocationOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

lakeformationprincipalpermissions.NewLakeformationPrincipalPermissionsResourceDataLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationPrincipalPermissionsResourceDataLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resetResourceArn"></a>

```go
func ResetResourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArnInput"></a>

```go
func ResourceArnInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationPrincipalPermissionsResourceLfTagOutputReference <a name="LakeformationPrincipalPermissionsResourceLfTagOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

lakeformationprincipalpermissions.NewLakeformationPrincipalPermissionsResourceLfTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationPrincipalPermissionsResourceLfTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetTagKey">ResetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetTagValues">ResetTagValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetTagKey` <a name="ResetTagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetTagKey"></a>

```go
func ResetTagKey()
```

##### `ResetTagValues` <a name="ResetTagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetTagValues"></a>

```go
func ResetTagValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValuesInput">TagValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValues">TagValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TagValuesInput`<sup>Optional</sup> <a name="TagValuesInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValuesInput"></a>

```go
func TagValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValues"></a>

```go
func TagValues() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList <a name="LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

lakeformationprincipalpermissions.NewLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get"></a>

```go
func Get(index *f64) LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference <a name="LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

lakeformationprincipalpermissions.NewLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resetTagKey">ResetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resetTagValues">ResetTagValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTagKey` <a name="ResetTagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resetTagKey"></a>

```go
func ResetTagKey()
```

##### `ResetTagValues` <a name="ResetTagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resetTagValues"></a>

```go
func ResetTagValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValuesInput">TagValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValues">TagValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TagValuesInput`<sup>Optional</sup> <a name="TagValuesInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValuesInput"></a>

```go
func TagValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValues"></a>

```go
func TagValues() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference <a name="LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

lakeformationprincipalpermissions.NewLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.putExpression">PutExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpression` <a name="PutExpression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.putExpression"></a>

```go
func PutExpression(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.putExpression.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetResourceType"></a>

```go
func ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expression">Expression</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList">LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expression"></a>

```go
func Expression() LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList">LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationPrincipalPermissionsResourceOutputReference <a name="LakeformationPrincipalPermissionsResourceOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

lakeformationprincipalpermissions.NewLakeformationPrincipalPermissionsResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationPrincipalPermissionsResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataCellsFilter">PutDataCellsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataLocation">PutDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTag">PutLfTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTagPolicy">PutLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTable">PutTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTableWithColumns">PutTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDataCellsFilter">ResetDataCellsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDataLocation">ResetDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetLfTag">ResetLfTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetLfTagPolicy">ResetLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetTableWithColumns">ResetTableWithColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabase` <a name="PutDatabase" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDatabase"></a>

```go
func PutDatabase(value LakeformationPrincipalPermissionsResourceDatabase)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a>

---

##### `PutDataCellsFilter` <a name="PutDataCellsFilter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataCellsFilter"></a>

```go
func PutDataCellsFilter(value LakeformationPrincipalPermissionsResourceDataCellsFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataCellsFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a>

---

##### `PutDataLocation` <a name="PutDataLocation" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataLocation"></a>

```go
func PutDataLocation(value LakeformationPrincipalPermissionsResourceDataLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a>

---

##### `PutLfTag` <a name="PutLfTag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTag"></a>

```go
func PutLfTag(value LakeformationPrincipalPermissionsResourceLfTag)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTag.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a>

---

##### `PutLfTagPolicy` <a name="PutLfTagPolicy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTagPolicy"></a>

```go
func PutLfTagPolicy(value LakeformationPrincipalPermissionsResourceLfTagPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTagPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a>

---

##### `PutTable` <a name="PutTable" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTable"></a>

```go
func PutTable(value LakeformationPrincipalPermissionsResourceTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a>

---

##### `PutTableWithColumns` <a name="PutTableWithColumns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTableWithColumns"></a>

```go
func PutTableWithColumns(value LakeformationPrincipalPermissionsResourceTableWithColumns)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTableWithColumns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a>

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetDataCellsFilter` <a name="ResetDataCellsFilter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDataCellsFilter"></a>

```go
func ResetDataCellsFilter()
```

##### `ResetDataLocation` <a name="ResetDataLocation" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDataLocation"></a>

```go
func ResetDataLocation()
```

##### `ResetLfTag` <a name="ResetLfTag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetLfTag"></a>

```go
func ResetLfTag()
```

##### `ResetLfTagPolicy` <a name="ResetLfTagPolicy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetLfTagPolicy"></a>

```go
func ResetLfTagPolicy()
```

##### `ResetTable` <a name="ResetTable" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetTable"></a>

```go
func ResetTable()
```

##### `ResetTableWithColumns` <a name="ResetTableWithColumns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetTableWithColumns"></a>

```go
func ResetTableWithColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.database">Database</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference">LakeformationPrincipalPermissionsResourceDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilter">DataCellsFilter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference">LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataLocation">DataLocation</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference">LakeformationPrincipalPermissionsResourceDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTag">LfTag</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference">LakeformationPrincipalPermissionsResourceLfTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicy">LfTagPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference">LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.table">Table</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference">LakeformationPrincipalPermissionsResourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference">LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilterInput">DataCellsFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataLocationInput">DataLocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagInput">LfTagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicyInput">LfTagPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableInput">TableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumnsInput">TableWithColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.database"></a>

```go
func Database() LakeformationPrincipalPermissionsResourceDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference">LakeformationPrincipalPermissionsResourceDatabaseOutputReference</a>

---

##### `DataCellsFilter`<sup>Required</sup> <a name="DataCellsFilter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilter"></a>

```go
func DataCellsFilter() LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference">LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference</a>

---

##### `DataLocation`<sup>Required</sup> <a name="DataLocation" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataLocation"></a>

```go
func DataLocation() LakeformationPrincipalPermissionsResourceDataLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference">LakeformationPrincipalPermissionsResourceDataLocationOutputReference</a>

---

##### `LfTag`<sup>Required</sup> <a name="LfTag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTag"></a>

```go
func LfTag() LakeformationPrincipalPermissionsResourceLfTagOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference">LakeformationPrincipalPermissionsResourceLfTagOutputReference</a>

---

##### `LfTagPolicy`<sup>Required</sup> <a name="LfTagPolicy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicy"></a>

```go
func LfTagPolicy() LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference">LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference</a>

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.table"></a>

```go
func Table() LakeformationPrincipalPermissionsResourceTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference">LakeformationPrincipalPermissionsResourceTableOutputReference</a>

---

##### `TableWithColumns`<sup>Required</sup> <a name="TableWithColumns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumns"></a>

```go
func TableWithColumns() LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference">LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() interface{}
```

- *Type:* interface{}

---

##### `DataCellsFilterInput`<sup>Optional</sup> <a name="DataCellsFilterInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilterInput"></a>

```go
func DataCellsFilterInput() interface{}
```

- *Type:* interface{}

---

##### `DataLocationInput`<sup>Optional</sup> <a name="DataLocationInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataLocationInput"></a>

```go
func DataLocationInput() interface{}
```

- *Type:* interface{}

---

##### `LfTagInput`<sup>Optional</sup> <a name="LfTagInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagInput"></a>

```go
func LfTagInput() interface{}
```

- *Type:* interface{}

---

##### `LfTagPolicyInput`<sup>Optional</sup> <a name="LfTagPolicyInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicyInput"></a>

```go
func LfTagPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableInput"></a>

```go
func TableInput() interface{}
```

- *Type:* interface{}

---

##### `TableWithColumnsInput`<sup>Optional</sup> <a name="TableWithColumnsInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumnsInput"></a>

```go
func TableWithColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationPrincipalPermissionsResourceTableOutputReference <a name="LakeformationPrincipalPermissionsResourceTableOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

lakeformationprincipalpermissions.NewLakeformationPrincipalPermissionsResourceTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationPrincipalPermissionsResourceTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetTableWildcard">ResetTableWildcard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetTableWildcard` <a name="ResetTableWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetTableWildcard"></a>

```go
func ResetTableWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcardInput">TableWildcardInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcard">TableWildcard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TableWildcardInput`<sup>Optional</sup> <a name="TableWildcardInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcardInput"></a>

```go
func TableWildcardInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TableWildcard`<sup>Required</sup> <a name="TableWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcard"></a>

```go
func TableWildcard() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference <a name="LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

lakeformationprincipalpermissions.NewLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resetExcludedColumnNames">ResetExcludedColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedColumnNames` <a name="ResetExcludedColumnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resetExcludedColumnNames"></a>

```go
func ResetExcludedColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNamesInput">ExcludedColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedColumnNamesInput`<sup>Optional</sup> <a name="ExcludedColumnNamesInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNamesInput"></a>

```go
func ExcludedColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedColumnNames`<sup>Required</sup> <a name="ExcludedColumnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames"></a>

```go
func ExcludedColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference <a name="LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationprincipalpermissions"

lakeformationprincipalpermissions.NewLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.putColumnWildcard">PutColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetColumnWildcard">ResetColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnWildcard` <a name="PutColumnWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.putColumnWildcard"></a>

```go
func PutColumnWildcard(value LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.putColumnWildcard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a>

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetColumnNames"></a>

```go
func ResetColumnNames()
```

##### `ResetColumnWildcard` <a name="ResetColumnWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetColumnWildcard"></a>

```go
func ResetColumnWildcard()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcard">ColumnWildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcardInput">ColumnWildcardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnWildcard`<sup>Required</sup> <a name="ColumnWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcard"></a>

```go
func ColumnWildcard() LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNamesInput"></a>

```go
func ColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ColumnWildcardInput`<sup>Optional</sup> <a name="ColumnWildcardInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcardInput"></a>

```go
func ColumnWildcardInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNames"></a>

```go
func ColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



