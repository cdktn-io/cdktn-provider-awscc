# `redshiftSnapshotCopyGrant` Submodule <a name="`redshiftSnapshotCopyGrant` Submodule" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftSnapshotCopyGrant <a name="RedshiftSnapshotCopyGrant" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant awscc_redshift_snapshot_copy_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftsnapshotcopygrant"

redshiftsnapshotcopygrant.NewRedshiftSnapshotCopyGrant(scope Construct, id *string, config RedshiftSnapshotCopyGrantConfig) RedshiftSnapshotCopyGrant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig">RedshiftSnapshotCopyGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig">RedshiftSnapshotCopyGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftSnapshotCopyGrant resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftsnapshotcopygrant"

redshiftsnapshotcopygrant.RedshiftSnapshotCopyGrant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftsnapshotcopygrant"

redshiftsnapshotcopygrant.RedshiftSnapshotCopyGrant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftsnapshotcopygrant"

redshiftsnapshotcopygrant.RedshiftSnapshotCopyGrant_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftsnapshotcopygrant"

redshiftsnapshotcopygrant.RedshiftSnapshotCopyGrant_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RedshiftSnapshotCopyGrant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RedshiftSnapshotCopyGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RedshiftSnapshotCopyGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftSnapshotCopyGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList">RedshiftSnapshotCopyGrantTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantNameInput">SnapshotCopyGrantNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantName">SnapshotCopyGrantName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tags"></a>

```go
func Tags() RedshiftSnapshotCopyGrantTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList">RedshiftSnapshotCopyGrantTagsList</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `SnapshotCopyGrantNameInput`<sup>Optional</sup> <a name="SnapshotCopyGrantNameInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantNameInput"></a>

```go
func SnapshotCopyGrantNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SnapshotCopyGrantName`<sup>Required</sup> <a name="SnapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantName"></a>

```go
func SnapshotCopyGrantName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftSnapshotCopyGrantConfig <a name="RedshiftSnapshotCopyGrantConfig" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftsnapshotcopygrant"

&redshiftsnapshotcopygrant.RedshiftSnapshotCopyGrantConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	SnapshotCopyGrantName: *string,
	KmsKeyId: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.snapshotCopyGrantName">SnapshotCopyGrantName</a></code> | <code>*string</code> | The name of the snapshot copy grant. This name must be unique in the region for the AWS account. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of tag instances. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SnapshotCopyGrantName`<sup>Required</sup> <a name="SnapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.snapshotCopyGrantName"></a>

```go
SnapshotCopyGrantName *string
```

- *Type:* *string

The name of the snapshot copy grant. This name must be unique in the region for the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#snapshot_copy_grant_name RedshiftSnapshotCopyGrant#snapshot_copy_grant_name}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission.

If no key is specified, the default key is used. Marked writeOnly because Create accepts aliases/key-ids but Describe returns the resolved key ARN, which would fail drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#kms_key_id RedshiftSnapshotCopyGrant#kms_key_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of tag instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#tags RedshiftSnapshotCopyGrant#tags}

---

### RedshiftSnapshotCopyGrantTags <a name="RedshiftSnapshotCopyGrantTags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftsnapshotcopygrant"

&redshiftsnapshotcopygrant.RedshiftSnapshotCopyGrantTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.key">Key</a></code> | <code>*string</code> | The key, or name, for the resource tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.value">Value</a></code> | <code>*string</code> | The value for the resource tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key, or name, for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#key RedshiftSnapshotCopyGrant#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#value RedshiftSnapshotCopyGrant#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftSnapshotCopyGrantTagsList <a name="RedshiftSnapshotCopyGrantTagsList" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftsnapshotcopygrant"

redshiftsnapshotcopygrant.NewRedshiftSnapshotCopyGrantTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftSnapshotCopyGrantTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.get"></a>

```go
func Get(index *f64) RedshiftSnapshotCopyGrantTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftSnapshotCopyGrantTagsOutputReference <a name="RedshiftSnapshotCopyGrantTagsOutputReference" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftsnapshotcopygrant"

redshiftsnapshotcopygrant.NewRedshiftSnapshotCopyGrantTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftSnapshotCopyGrantTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



