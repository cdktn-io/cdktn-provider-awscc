# `datazonePolicyGrant` Submodule <a name="`datazonePolicyGrant` Submodule" id="@cdktn/provider-awscc.datazonePolicyGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazonePolicyGrant <a name="DatazonePolicyGrant" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant awscc_datazone_policy_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrant(scope Construct, id *string, config DatazonePolicyGrantConfig) DatazonePolicyGrant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig">DatazonePolicyGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig">DatazonePolicyGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.putDetail">PutDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.resetDetail">ResetDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.resetPrincipal">ResetPrincipal</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetail` <a name="PutDetail" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.putDetail"></a>

```go
func PutDetail(value DatazonePolicyGrantDetail)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.putDetail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>

---

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.putPrincipal"></a>

```go
func PutPrincipal(value DatazonePolicyGrantPrincipal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>

---

##### `ResetDetail` <a name="ResetDetail" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.resetDetail"></a>

```go
func ResetDetail()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.resetPrincipal"></a>

```go
func ResetPrincipal()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatazonePolicyGrant resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.DatazonePolicyGrant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.DatazonePolicyGrant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.DatazonePolicyGrant_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.DatazonePolicyGrant_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DatazonePolicyGrant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatazonePolicyGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatazonePolicyGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DatazonePolicyGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.detail">Detail</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference">DatazonePolicyGrantDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.grantId">GrantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference">DatazonePolicyGrantPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.detailInput">DetailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifierInput">EntityIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.entityTypeInput">EntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.policyTypeInput">PolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.principalInput">PrincipalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifier">EntityIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Detail`<sup>Required</sup> <a name="Detail" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.detail"></a>

```go
func Detail() DatazonePolicyGrantDetailOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference">DatazonePolicyGrantDetailOutputReference</a>

---

##### `GrantId`<sup>Required</sup> <a name="GrantId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.grantId"></a>

```go
func GrantId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.principal"></a>

```go
func Principal() DatazonePolicyGrantPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference">DatazonePolicyGrantPrincipalOutputReference</a>

---

##### `DetailInput`<sup>Optional</sup> <a name="DetailInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.detailInput"></a>

```go
func DetailInput() interface{}
```

- *Type:* interface{}

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifierInput"></a>

```go
func DomainIdentifierInput() *string
```

- *Type:* *string

---

##### `EntityIdentifierInput`<sup>Optional</sup> <a name="EntityIdentifierInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifierInput"></a>

```go
func EntityIdentifierInput() *string
```

- *Type:* *string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.entityTypeInput"></a>

```go
func EntityTypeInput() *string
```

- *Type:* *string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.policyTypeInput"></a>

```go
func PolicyTypeInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.principalInput"></a>

```go
func PrincipalInput() interface{}
```

- *Type:* interface{}

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifier"></a>

```go
func DomainIdentifier() *string
```

- *Type:* *string

---

##### `EntityIdentifier`<sup>Required</sup> <a name="EntityIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifier"></a>

```go
func EntityIdentifier() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazonePolicyGrantConfig <a name="DatazonePolicyGrantConfig" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DomainIdentifier: *string,
	EntityIdentifier: *string,
	EntityType: *string,
	PolicyType: *string,
	Detail: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantDetail,
	Principal: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#domain_identifier DatazonePolicyGrant#domain_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityIdentifier">EntityIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#entity_identifier DatazonePolicyGrant#entity_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityType">EntityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#entity_type DatazonePolicyGrant#entity_type}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.policyType">PolicyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#policy_type DatazonePolicyGrant#policy_type}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.detail">Detail</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#detail DatazonePolicyGrant#detail}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#principal DatazonePolicyGrant#principal}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.domainIdentifier"></a>

```go
DomainIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#domain_identifier DatazonePolicyGrant#domain_identifier}.

---

##### `EntityIdentifier`<sup>Required</sup> <a name="EntityIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityIdentifier"></a>

```go
EntityIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#entity_identifier DatazonePolicyGrant#entity_identifier}.

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityType"></a>

```go
EntityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#entity_type DatazonePolicyGrant#entity_type}.

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.policyType"></a>

```go
PolicyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#policy_type DatazonePolicyGrant#policy_type}.

---

##### `Detail`<sup>Optional</sup> <a name="Detail" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.detail"></a>

```go
Detail DatazonePolicyGrantDetail
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#detail DatazonePolicyGrant#detail}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.principal"></a>

```go
Principal DatazonePolicyGrantPrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#principal DatazonePolicyGrant#principal}.

---

### DatazonePolicyGrantDetail <a name="DatazonePolicyGrantDetail" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantDetail {
	AddToProjectMemberPool: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool,
	CreateAssetType: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType,
	CreateDomainUnit: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit,
	CreateEnvironment: *string,
	CreateEnvironmentFromBlueprint: *string,
	CreateEnvironmentProfile: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile,
	CreateFormType: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType,
	CreateGlossary: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary,
	CreateProject: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject,
	CreateProjectFromProjectProfile: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile,
	DelegateCreateEnvironmentProfile: *string,
	OverrideDomainUnitOwners: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners,
	OverrideProjectOwners: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.addToProjectMemberPool">AddToProjectMemberPool</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#add_to_project_member_pool DatazonePolicyGrant#add_to_project_member_pool}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createAssetType">CreateAssetType</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_asset_type DatazonePolicyGrant#create_asset_type}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createDomainUnit">CreateDomainUnit</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_domain_unit DatazonePolicyGrant#create_domain_unit}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironment">CreateEnvironment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_environment DatazonePolicyGrant#create_environment}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentFromBlueprint">CreateEnvironmentFromBlueprint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_environment_from_blueprint DatazonePolicyGrant#create_environment_from_blueprint}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentProfile">CreateEnvironmentProfile</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_environment_profile DatazonePolicyGrant#create_environment_profile}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createFormType">CreateFormType</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_form_type DatazonePolicyGrant#create_form_type}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createGlossary">CreateGlossary</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_glossary DatazonePolicyGrant#create_glossary}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProject">CreateProject</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_project DatazonePolicyGrant#create_project}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProjectFromProjectProfile">CreateProjectFromProjectProfile</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_project_from_project_profile DatazonePolicyGrant#create_project_from_project_profile}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.delegateCreateEnvironmentProfile">DelegateCreateEnvironmentProfile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#delegate_create_environment_profile DatazonePolicyGrant#delegate_create_environment_profile}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideDomainUnitOwners">OverrideDomainUnitOwners</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#override_domain_unit_owners DatazonePolicyGrant#override_domain_unit_owners}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideProjectOwners">OverrideProjectOwners</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#override_project_owners DatazonePolicyGrant#override_project_owners}. |

---

##### `AddToProjectMemberPool`<sup>Optional</sup> <a name="AddToProjectMemberPool" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.addToProjectMemberPool"></a>

```go
AddToProjectMemberPool DatazonePolicyGrantDetailAddToProjectMemberPool
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#add_to_project_member_pool DatazonePolicyGrant#add_to_project_member_pool}.

---

##### `CreateAssetType`<sup>Optional</sup> <a name="CreateAssetType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createAssetType"></a>

```go
CreateAssetType DatazonePolicyGrantDetailCreateAssetType
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_asset_type DatazonePolicyGrant#create_asset_type}.

---

##### `CreateDomainUnit`<sup>Optional</sup> <a name="CreateDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createDomainUnit"></a>

```go
CreateDomainUnit DatazonePolicyGrantDetailCreateDomainUnit
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_domain_unit DatazonePolicyGrant#create_domain_unit}.

---

##### `CreateEnvironment`<sup>Optional</sup> <a name="CreateEnvironment" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironment"></a>

```go
CreateEnvironment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_environment DatazonePolicyGrant#create_environment}.

---

##### `CreateEnvironmentFromBlueprint`<sup>Optional</sup> <a name="CreateEnvironmentFromBlueprint" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentFromBlueprint"></a>

```go
CreateEnvironmentFromBlueprint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_environment_from_blueprint DatazonePolicyGrant#create_environment_from_blueprint}.

---

##### `CreateEnvironmentProfile`<sup>Optional</sup> <a name="CreateEnvironmentProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentProfile"></a>

```go
CreateEnvironmentProfile DatazonePolicyGrantDetailCreateEnvironmentProfile
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_environment_profile DatazonePolicyGrant#create_environment_profile}.

---

##### `CreateFormType`<sup>Optional</sup> <a name="CreateFormType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createFormType"></a>

```go
CreateFormType DatazonePolicyGrantDetailCreateFormType
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_form_type DatazonePolicyGrant#create_form_type}.

---

##### `CreateGlossary`<sup>Optional</sup> <a name="CreateGlossary" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createGlossary"></a>

```go
CreateGlossary DatazonePolicyGrantDetailCreateGlossary
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_glossary DatazonePolicyGrant#create_glossary}.

---

##### `CreateProject`<sup>Optional</sup> <a name="CreateProject" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProject"></a>

```go
CreateProject DatazonePolicyGrantDetailCreateProject
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_project DatazonePolicyGrant#create_project}.

---

##### `CreateProjectFromProjectProfile`<sup>Optional</sup> <a name="CreateProjectFromProjectProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProjectFromProjectProfile"></a>

```go
CreateProjectFromProjectProfile DatazonePolicyGrantDetailCreateProjectFromProjectProfile
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#create_project_from_project_profile DatazonePolicyGrant#create_project_from_project_profile}.

---

##### `DelegateCreateEnvironmentProfile`<sup>Optional</sup> <a name="DelegateCreateEnvironmentProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.delegateCreateEnvironmentProfile"></a>

```go
DelegateCreateEnvironmentProfile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#delegate_create_environment_profile DatazonePolicyGrant#delegate_create_environment_profile}.

---

##### `OverrideDomainUnitOwners`<sup>Optional</sup> <a name="OverrideDomainUnitOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideDomainUnitOwners"></a>

```go
OverrideDomainUnitOwners DatazonePolicyGrantDetailOverrideDomainUnitOwners
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#override_domain_unit_owners DatazonePolicyGrant#override_domain_unit_owners}.

---

##### `OverrideProjectOwners`<sup>Optional</sup> <a name="OverrideProjectOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideProjectOwners"></a>

```go
OverrideProjectOwners DatazonePolicyGrantDetailOverrideProjectOwners
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#override_project_owners DatazonePolicyGrant#override_project_owners}.

---

### DatazonePolicyGrantDetailAddToProjectMemberPool <a name="DatazonePolicyGrantDetailAddToProjectMemberPool" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantDetailAddToProjectMemberPool {
	IncludeChildDomainUnits: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool.property.includeChildDomainUnits"></a>

```go
IncludeChildDomainUnits interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateAssetType <a name="DatazonePolicyGrantDetailCreateAssetType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantDetailCreateAssetType {
	IncludeChildDomainUnits: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType.property.includeChildDomainUnits"></a>

```go
IncludeChildDomainUnits interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateDomainUnit <a name="DatazonePolicyGrantDetailCreateDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantDetailCreateDomainUnit {
	IncludeChildDomainUnits: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit.property.includeChildDomainUnits"></a>

```go
IncludeChildDomainUnits interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateEnvironmentProfile <a name="DatazonePolicyGrantDetailCreateEnvironmentProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantDetailCreateEnvironmentProfile {
	DomainUnitId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile.property.domainUnitId">DomainUnitId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}. |

---

##### `DomainUnitId`<sup>Optional</sup> <a name="DomainUnitId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile.property.domainUnitId"></a>

```go
DomainUnitId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}.

---

### DatazonePolicyGrantDetailCreateFormType <a name="DatazonePolicyGrantDetailCreateFormType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantDetailCreateFormType {
	IncludeChildDomainUnits: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType.property.includeChildDomainUnits"></a>

```go
IncludeChildDomainUnits interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateGlossary <a name="DatazonePolicyGrantDetailCreateGlossary" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantDetailCreateGlossary {
	IncludeChildDomainUnits: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary.property.includeChildDomainUnits"></a>

```go
IncludeChildDomainUnits interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateProject <a name="DatazonePolicyGrantDetailCreateProject" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantDetailCreateProject {
	IncludeChildDomainUnits: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject.property.includeChildDomainUnits"></a>

```go
IncludeChildDomainUnits interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateProjectFromProjectProfile <a name="DatazonePolicyGrantDetailCreateProjectFromProjectProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile {
	IncludeChildDomainUnits: interface{},
	ProjectProfiles: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.projectProfiles">ProjectProfiles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#project_profiles DatazonePolicyGrant#project_profiles}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.includeChildDomainUnits"></a>

```go
IncludeChildDomainUnits interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

##### `ProjectProfiles`<sup>Optional</sup> <a name="ProjectProfiles" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.projectProfiles"></a>

```go
ProjectProfiles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#project_profiles DatazonePolicyGrant#project_profiles}.

---

### DatazonePolicyGrantDetailOverrideDomainUnitOwners <a name="DatazonePolicyGrantDetailOverrideDomainUnitOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners {
	IncludeChildDomainUnits: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners.property.includeChildDomainUnits"></a>

```go
IncludeChildDomainUnits interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailOverrideProjectOwners <a name="DatazonePolicyGrantDetailOverrideProjectOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantDetailOverrideProjectOwners {
	IncludeChildDomainUnits: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners.property.includeChildDomainUnits"></a>

```go
IncludeChildDomainUnits interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantPrincipal <a name="DatazonePolicyGrantPrincipal" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantPrincipal {
	DomainUnit: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit,
	Group: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup,
	Project: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject,
	User: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.domainUnit">DomainUnit</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.group">Group</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#group DatazonePolicyGrant#group}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.project">Project</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#project DatazonePolicyGrant#project}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.user">User</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#user DatazonePolicyGrant#user}. |

---

##### `DomainUnit`<sup>Optional</sup> <a name="DomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.domainUnit"></a>

```go
DomainUnit DatazonePolicyGrantPrincipalDomainUnit
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}.

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.group"></a>

```go
Group DatazonePolicyGrantPrincipalGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#group DatazonePolicyGrant#group}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.project"></a>

```go
Project DatazonePolicyGrantPrincipalProject
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#project DatazonePolicyGrant#project}.

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.user"></a>

```go
User DatazonePolicyGrantPrincipalUser
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#user DatazonePolicyGrant#user}.

---

### DatazonePolicyGrantPrincipalDomainUnit <a name="DatazonePolicyGrantPrincipalDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantPrincipalDomainUnit {
	DomainUnitDesignation: *string,
	DomainUnitGrantFilter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter,
	DomainUnitIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitDesignation">DomainUnitDesignation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#domain_unit_designation DatazonePolicyGrant#domain_unit_designation}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitGrantFilter">DomainUnitGrantFilter</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter">DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#domain_unit_grant_filter DatazonePolicyGrant#domain_unit_grant_filter}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitIdentifier">DomainUnitIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#domain_unit_identifier DatazonePolicyGrant#domain_unit_identifier}. |

---

##### `DomainUnitDesignation`<sup>Optional</sup> <a name="DomainUnitDesignation" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitDesignation"></a>

```go
DomainUnitDesignation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#domain_unit_designation DatazonePolicyGrant#domain_unit_designation}.

---

##### `DomainUnitGrantFilter`<sup>Optional</sup> <a name="DomainUnitGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitGrantFilter"></a>

```go
DomainUnitGrantFilter DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter">DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#domain_unit_grant_filter DatazonePolicyGrant#domain_unit_grant_filter}.

---

##### `DomainUnitIdentifier`<sup>Optional</sup> <a name="DomainUnitIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitIdentifier"></a>

```go
DomainUnitIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#domain_unit_identifier DatazonePolicyGrant#domain_unit_identifier}.

---

### DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter <a name="DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter {
	AllDomainUnitsGrantFilter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter.property.allDomainUnitsGrantFilter">AllDomainUnitsGrantFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#all_domain_units_grant_filter DatazonePolicyGrant#all_domain_units_grant_filter}. |

---

##### `AllDomainUnitsGrantFilter`<sup>Optional</sup> <a name="AllDomainUnitsGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter.property.allDomainUnitsGrantFilter"></a>

```go
AllDomainUnitsGrantFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#all_domain_units_grant_filter DatazonePolicyGrant#all_domain_units_grant_filter}.

---

### DatazonePolicyGrantPrincipalGroup <a name="DatazonePolicyGrantPrincipalGroup" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantPrincipalGroup {
	GroupIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup.property.groupIdentifier">GroupIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#group_identifier DatazonePolicyGrant#group_identifier}. |

---

##### `GroupIdentifier`<sup>Optional</sup> <a name="GroupIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup.property.groupIdentifier"></a>

```go
GroupIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#group_identifier DatazonePolicyGrant#group_identifier}.

---

### DatazonePolicyGrantPrincipalProject <a name="DatazonePolicyGrantPrincipalProject" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantPrincipalProject {
	ProjectDesignation: *string,
	ProjectGrantFilter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter,
	ProjectIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectDesignation">ProjectDesignation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#project_designation DatazonePolicyGrant#project_designation}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectGrantFilter">ProjectGrantFilter</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#project_grant_filter DatazonePolicyGrant#project_grant_filter}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectIdentifier">ProjectIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#project_identifier DatazonePolicyGrant#project_identifier}. |

---

##### `ProjectDesignation`<sup>Optional</sup> <a name="ProjectDesignation" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectDesignation"></a>

```go
ProjectDesignation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#project_designation DatazonePolicyGrant#project_designation}.

---

##### `ProjectGrantFilter`<sup>Optional</sup> <a name="ProjectGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectGrantFilter"></a>

```go
ProjectGrantFilter DatazonePolicyGrantPrincipalProjectProjectGrantFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#project_grant_filter DatazonePolicyGrant#project_grant_filter}.

---

##### `ProjectIdentifier`<sup>Optional</sup> <a name="ProjectIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectIdentifier"></a>

```go
ProjectIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#project_identifier DatazonePolicyGrant#project_identifier}.

---

### DatazonePolicyGrantPrincipalProjectProjectGrantFilter <a name="DatazonePolicyGrantPrincipalProjectProjectGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter {
	DomainUnitFilter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter.property.domainUnitFilter">DomainUnitFilter</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#domain_unit_filter DatazonePolicyGrant#domain_unit_filter}. |

---

##### `DomainUnitFilter`<sup>Optional</sup> <a name="DomainUnitFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter.property.domainUnitFilter"></a>

```go
DomainUnitFilter DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#domain_unit_filter DatazonePolicyGrant#domain_unit_filter}.

---

### DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter <a name="DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter {
	DomainUnit: *string,
	IncludeChildDomainUnits: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter.property.domainUnit">DomainUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `DomainUnit`<sup>Optional</sup> <a name="DomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter.property.domainUnit"></a>

```go
DomainUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}.

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter.property.includeChildDomainUnits"></a>

```go
IncludeChildDomainUnits interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantPrincipalUser <a name="DatazonePolicyGrantPrincipalUser" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

&datazonepolicygrant.DatazonePolicyGrantPrincipalUser {
	AllUsersGrantFilter: *string,
	UserIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.allUsersGrantFilter">AllUsersGrantFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#all_users_grant_filter DatazonePolicyGrant#all_users_grant_filter}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.userIdentifier">UserIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#user_identifier DatazonePolicyGrant#user_identifier}. |

---

##### `AllUsersGrantFilter`<sup>Optional</sup> <a name="AllUsersGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.allUsersGrantFilter"></a>

```go
AllUsersGrantFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#all_users_grant_filter DatazonePolicyGrant#all_users_grant_filter}.

---

##### `UserIdentifier`<sup>Optional</sup> <a name="UserIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.userIdentifier"></a>

```go
UserIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_policy_grant#user_identifier DatazonePolicyGrant#user_identifier}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference <a name="DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resetIncludeChildDomainUnits"></a>

```go
func ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnitsInput"></a>

```go
func IncludeChildDomainUnitsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnits"></a>

```go
func IncludeChildDomainUnits() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantDetailCreateAssetTypeOutputReference <a name="DatazonePolicyGrantDetailCreateAssetTypeOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantDetailCreateAssetTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantDetailCreateAssetTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resetIncludeChildDomainUnits"></a>

```go
func ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnitsInput"></a>

```go
func IncludeChildDomainUnitsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnits"></a>

```go
func IncludeChildDomainUnits() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantDetailCreateDomainUnitOutputReference <a name="DatazonePolicyGrantDetailCreateDomainUnitOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantDetailCreateDomainUnitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantDetailCreateDomainUnitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resetIncludeChildDomainUnits"></a>

```go
func ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnitsInput"></a>

```go
func IncludeChildDomainUnitsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnits"></a>

```go
func IncludeChildDomainUnits() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference <a name="DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resetDomainUnitId">ResetDomainUnitId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainUnitId` <a name="ResetDomainUnitId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resetDomainUnitId"></a>

```go
func ResetDomainUnitId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitIdInput">DomainUnitIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitId">DomainUnitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainUnitIdInput`<sup>Optional</sup> <a name="DomainUnitIdInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitIdInput"></a>

```go
func DomainUnitIdInput() *string
```

- *Type:* *string

---

##### `DomainUnitId`<sup>Required</sup> <a name="DomainUnitId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitId"></a>

```go
func DomainUnitId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantDetailCreateFormTypeOutputReference <a name="DatazonePolicyGrantDetailCreateFormTypeOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantDetailCreateFormTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantDetailCreateFormTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resetIncludeChildDomainUnits"></a>

```go
func ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnitsInput"></a>

```go
func IncludeChildDomainUnitsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnits"></a>

```go
func IncludeChildDomainUnits() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantDetailCreateGlossaryOutputReference <a name="DatazonePolicyGrantDetailCreateGlossaryOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantDetailCreateGlossaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantDetailCreateGlossaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resetIncludeChildDomainUnits"></a>

```go
func ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnitsInput"></a>

```go
func IncludeChildDomainUnitsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnits"></a>

```go
func IncludeChildDomainUnits() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference <a name="DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetProjectProfiles">ResetProjectProfiles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetIncludeChildDomainUnits"></a>

```go
func ResetIncludeChildDomainUnits()
```

##### `ResetProjectProfiles` <a name="ResetProjectProfiles" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetProjectProfiles"></a>

```go
func ResetProjectProfiles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfilesInput">ProjectProfilesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfiles">ProjectProfiles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnitsInput"></a>

```go
func IncludeChildDomainUnitsInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectProfilesInput`<sup>Optional</sup> <a name="ProjectProfilesInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfilesInput"></a>

```go
func ProjectProfilesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnits"></a>

```go
func IncludeChildDomainUnits() interface{}
```

- *Type:* interface{}

---

##### `ProjectProfiles`<sup>Required</sup> <a name="ProjectProfiles" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfiles"></a>

```go
func ProjectProfiles() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantDetailCreateProjectOutputReference <a name="DatazonePolicyGrantDetailCreateProjectOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantDetailCreateProjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantDetailCreateProjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resetIncludeChildDomainUnits"></a>

```go
func ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnitsInput"></a>

```go
func IncludeChildDomainUnitsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnits"></a>

```go
func IncludeChildDomainUnits() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantDetailOutputReference <a name="DatazonePolicyGrantDetailOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantDetailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantDetailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putAddToProjectMemberPool">PutAddToProjectMemberPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateAssetType">PutCreateAssetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateDomainUnit">PutCreateDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentProfile">PutCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateFormType">PutCreateFormType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateGlossary">PutCreateGlossary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProject">PutCreateProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProjectFromProjectProfile">PutCreateProjectFromProjectProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideDomainUnitOwners">PutOverrideDomainUnitOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideProjectOwners">PutOverrideProjectOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetAddToProjectMemberPool">ResetAddToProjectMemberPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateAssetType">ResetCreateAssetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateDomainUnit">ResetCreateDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironment">ResetCreateEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentFromBlueprint">ResetCreateEnvironmentFromBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentProfile">ResetCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateFormType">ResetCreateFormType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateGlossary">ResetCreateGlossary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProject">ResetCreateProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProjectFromProjectProfile">ResetCreateProjectFromProjectProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetDelegateCreateEnvironmentProfile">ResetDelegateCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideDomainUnitOwners">ResetOverrideDomainUnitOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideProjectOwners">ResetOverrideProjectOwners</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAddToProjectMemberPool` <a name="PutAddToProjectMemberPool" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putAddToProjectMemberPool"></a>

```go
func PutAddToProjectMemberPool(value DatazonePolicyGrantDetailAddToProjectMemberPool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putAddToProjectMemberPool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>

---

##### `PutCreateAssetType` <a name="PutCreateAssetType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateAssetType"></a>

```go
func PutCreateAssetType(value DatazonePolicyGrantDetailCreateAssetType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateAssetType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>

---

##### `PutCreateDomainUnit` <a name="PutCreateDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateDomainUnit"></a>

```go
func PutCreateDomainUnit(value DatazonePolicyGrantDetailCreateDomainUnit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateDomainUnit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>

---

##### `PutCreateEnvironmentProfile` <a name="PutCreateEnvironmentProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentProfile"></a>

```go
func PutCreateEnvironmentProfile(value DatazonePolicyGrantDetailCreateEnvironmentProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>

---

##### `PutCreateFormType` <a name="PutCreateFormType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateFormType"></a>

```go
func PutCreateFormType(value DatazonePolicyGrantDetailCreateFormType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateFormType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>

---

##### `PutCreateGlossary` <a name="PutCreateGlossary" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateGlossary"></a>

```go
func PutCreateGlossary(value DatazonePolicyGrantDetailCreateGlossary)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateGlossary.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>

---

##### `PutCreateProject` <a name="PutCreateProject" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProject"></a>

```go
func PutCreateProject(value DatazonePolicyGrantDetailCreateProject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProject.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>

---

##### `PutCreateProjectFromProjectProfile` <a name="PutCreateProjectFromProjectProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProjectFromProjectProfile"></a>

```go
func PutCreateProjectFromProjectProfile(value DatazonePolicyGrantDetailCreateProjectFromProjectProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProjectFromProjectProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>

---

##### `PutOverrideDomainUnitOwners` <a name="PutOverrideDomainUnitOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideDomainUnitOwners"></a>

```go
func PutOverrideDomainUnitOwners(value DatazonePolicyGrantDetailOverrideDomainUnitOwners)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideDomainUnitOwners.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>

---

##### `PutOverrideProjectOwners` <a name="PutOverrideProjectOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideProjectOwners"></a>

```go
func PutOverrideProjectOwners(value DatazonePolicyGrantDetailOverrideProjectOwners)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideProjectOwners.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>

---

##### `ResetAddToProjectMemberPool` <a name="ResetAddToProjectMemberPool" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetAddToProjectMemberPool"></a>

```go
func ResetAddToProjectMemberPool()
```

##### `ResetCreateAssetType` <a name="ResetCreateAssetType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateAssetType"></a>

```go
func ResetCreateAssetType()
```

##### `ResetCreateDomainUnit` <a name="ResetCreateDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateDomainUnit"></a>

```go
func ResetCreateDomainUnit()
```

##### `ResetCreateEnvironment` <a name="ResetCreateEnvironment" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironment"></a>

```go
func ResetCreateEnvironment()
```

##### `ResetCreateEnvironmentFromBlueprint` <a name="ResetCreateEnvironmentFromBlueprint" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentFromBlueprint"></a>

```go
func ResetCreateEnvironmentFromBlueprint()
```

##### `ResetCreateEnvironmentProfile` <a name="ResetCreateEnvironmentProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentProfile"></a>

```go
func ResetCreateEnvironmentProfile()
```

##### `ResetCreateFormType` <a name="ResetCreateFormType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateFormType"></a>

```go
func ResetCreateFormType()
```

##### `ResetCreateGlossary` <a name="ResetCreateGlossary" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateGlossary"></a>

```go
func ResetCreateGlossary()
```

##### `ResetCreateProject` <a name="ResetCreateProject" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProject"></a>

```go
func ResetCreateProject()
```

##### `ResetCreateProjectFromProjectProfile` <a name="ResetCreateProjectFromProjectProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProjectFromProjectProfile"></a>

```go
func ResetCreateProjectFromProjectProfile()
```

##### `ResetDelegateCreateEnvironmentProfile` <a name="ResetDelegateCreateEnvironmentProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetDelegateCreateEnvironmentProfile"></a>

```go
func ResetDelegateCreateEnvironmentProfile()
```

##### `ResetOverrideDomainUnitOwners` <a name="ResetOverrideDomainUnitOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideDomainUnitOwners"></a>

```go
func ResetOverrideDomainUnitOwners()
```

##### `ResetOverrideProjectOwners` <a name="ResetOverrideProjectOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideProjectOwners"></a>

```go
func ResetOverrideProjectOwners()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPool">AddToProjectMemberPool</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference">DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetType">CreateAssetType</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference">DatazonePolicyGrantDetailCreateAssetTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnit">CreateDomainUnit</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference">DatazonePolicyGrantDetailCreateDomainUnitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfile">CreateEnvironmentProfile</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference">DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormType">CreateFormType</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference">DatazonePolicyGrantDetailCreateFormTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossary">CreateGlossary</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference">DatazonePolicyGrantDetailCreateGlossaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProject">CreateProject</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference">DatazonePolicyGrantDetailCreateProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfile">CreateProjectFromProjectProfile</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference">DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwners">OverrideDomainUnitOwners</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference">DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwners">OverrideProjectOwners</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference">DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPoolInput">AddToProjectMemberPoolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetTypeInput">CreateAssetTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnitInput">CreateDomainUnitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprintInput">CreateEnvironmentFromBlueprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentInput">CreateEnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfileInput">CreateEnvironmentProfileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormTypeInput">CreateFormTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossaryInput">CreateGlossaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfileInput">CreateProjectFromProjectProfileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectInput">CreateProjectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfileInput">DelegateCreateEnvironmentProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwnersInput">OverrideDomainUnitOwnersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwnersInput">OverrideProjectOwnersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironment">CreateEnvironment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprint">CreateEnvironmentFromBlueprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfile">DelegateCreateEnvironmentProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddToProjectMemberPool`<sup>Required</sup> <a name="AddToProjectMemberPool" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPool"></a>

```go
func AddToProjectMemberPool() DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference">DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference</a>

---

##### `CreateAssetType`<sup>Required</sup> <a name="CreateAssetType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetType"></a>

```go
func CreateAssetType() DatazonePolicyGrantDetailCreateAssetTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference">DatazonePolicyGrantDetailCreateAssetTypeOutputReference</a>

---

##### `CreateDomainUnit`<sup>Required</sup> <a name="CreateDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnit"></a>

```go
func CreateDomainUnit() DatazonePolicyGrantDetailCreateDomainUnitOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference">DatazonePolicyGrantDetailCreateDomainUnitOutputReference</a>

---

##### `CreateEnvironmentProfile`<sup>Required</sup> <a name="CreateEnvironmentProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfile"></a>

```go
func CreateEnvironmentProfile() DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference">DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference</a>

---

##### `CreateFormType`<sup>Required</sup> <a name="CreateFormType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormType"></a>

```go
func CreateFormType() DatazonePolicyGrantDetailCreateFormTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference">DatazonePolicyGrantDetailCreateFormTypeOutputReference</a>

---

##### `CreateGlossary`<sup>Required</sup> <a name="CreateGlossary" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossary"></a>

```go
func CreateGlossary() DatazonePolicyGrantDetailCreateGlossaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference">DatazonePolicyGrantDetailCreateGlossaryOutputReference</a>

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProject"></a>

```go
func CreateProject() DatazonePolicyGrantDetailCreateProjectOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference">DatazonePolicyGrantDetailCreateProjectOutputReference</a>

---

##### `CreateProjectFromProjectProfile`<sup>Required</sup> <a name="CreateProjectFromProjectProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfile"></a>

```go
func CreateProjectFromProjectProfile() DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference">DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference</a>

---

##### `OverrideDomainUnitOwners`<sup>Required</sup> <a name="OverrideDomainUnitOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwners"></a>

```go
func OverrideDomainUnitOwners() DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference">DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference</a>

---

##### `OverrideProjectOwners`<sup>Required</sup> <a name="OverrideProjectOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwners"></a>

```go
func OverrideProjectOwners() DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference">DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference</a>

---

##### `AddToProjectMemberPoolInput`<sup>Optional</sup> <a name="AddToProjectMemberPoolInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPoolInput"></a>

```go
func AddToProjectMemberPoolInput() interface{}
```

- *Type:* interface{}

---

##### `CreateAssetTypeInput`<sup>Optional</sup> <a name="CreateAssetTypeInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetTypeInput"></a>

```go
func CreateAssetTypeInput() interface{}
```

- *Type:* interface{}

---

##### `CreateDomainUnitInput`<sup>Optional</sup> <a name="CreateDomainUnitInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnitInput"></a>

```go
func CreateDomainUnitInput() interface{}
```

- *Type:* interface{}

---

##### `CreateEnvironmentFromBlueprintInput`<sup>Optional</sup> <a name="CreateEnvironmentFromBlueprintInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprintInput"></a>

```go
func CreateEnvironmentFromBlueprintInput() *string
```

- *Type:* *string

---

##### `CreateEnvironmentInput`<sup>Optional</sup> <a name="CreateEnvironmentInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentInput"></a>

```go
func CreateEnvironmentInput() *string
```

- *Type:* *string

---

##### `CreateEnvironmentProfileInput`<sup>Optional</sup> <a name="CreateEnvironmentProfileInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfileInput"></a>

```go
func CreateEnvironmentProfileInput() interface{}
```

- *Type:* interface{}

---

##### `CreateFormTypeInput`<sup>Optional</sup> <a name="CreateFormTypeInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormTypeInput"></a>

```go
func CreateFormTypeInput() interface{}
```

- *Type:* interface{}

---

##### `CreateGlossaryInput`<sup>Optional</sup> <a name="CreateGlossaryInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossaryInput"></a>

```go
func CreateGlossaryInput() interface{}
```

- *Type:* interface{}

---

##### `CreateProjectFromProjectProfileInput`<sup>Optional</sup> <a name="CreateProjectFromProjectProfileInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfileInput"></a>

```go
func CreateProjectFromProjectProfileInput() interface{}
```

- *Type:* interface{}

---

##### `CreateProjectInput`<sup>Optional</sup> <a name="CreateProjectInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectInput"></a>

```go
func CreateProjectInput() interface{}
```

- *Type:* interface{}

---

##### `DelegateCreateEnvironmentProfileInput`<sup>Optional</sup> <a name="DelegateCreateEnvironmentProfileInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfileInput"></a>

```go
func DelegateCreateEnvironmentProfileInput() *string
```

- *Type:* *string

---

##### `OverrideDomainUnitOwnersInput`<sup>Optional</sup> <a name="OverrideDomainUnitOwnersInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwnersInput"></a>

```go
func OverrideDomainUnitOwnersInput() interface{}
```

- *Type:* interface{}

---

##### `OverrideProjectOwnersInput`<sup>Optional</sup> <a name="OverrideProjectOwnersInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwnersInput"></a>

```go
func OverrideProjectOwnersInput() interface{}
```

- *Type:* interface{}

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironment"></a>

```go
func CreateEnvironment() *string
```

- *Type:* *string

---

##### `CreateEnvironmentFromBlueprint`<sup>Required</sup> <a name="CreateEnvironmentFromBlueprint" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprint"></a>

```go
func CreateEnvironmentFromBlueprint() *string
```

- *Type:* *string

---

##### `DelegateCreateEnvironmentProfile`<sup>Required</sup> <a name="DelegateCreateEnvironmentProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfile"></a>

```go
func DelegateCreateEnvironmentProfile() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference <a name="DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resetIncludeChildDomainUnits"></a>

```go
func ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnitsInput"></a>

```go
func IncludeChildDomainUnitsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnits"></a>

```go
func IncludeChildDomainUnits() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference <a name="DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resetIncludeChildDomainUnits"></a>

```go
func ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnitsInput"></a>

```go
func IncludeChildDomainUnitsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnits"></a>

```go
func IncludeChildDomainUnits() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference <a name="DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.resetAllDomainUnitsGrantFilter">ResetAllDomainUnitsGrantFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllDomainUnitsGrantFilter` <a name="ResetAllDomainUnitsGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.resetAllDomainUnitsGrantFilter"></a>

```go
func ResetAllDomainUnitsGrantFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.allDomainUnitsGrantFilterInput">AllDomainUnitsGrantFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.allDomainUnitsGrantFilter">AllDomainUnitsGrantFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllDomainUnitsGrantFilterInput`<sup>Optional</sup> <a name="AllDomainUnitsGrantFilterInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.allDomainUnitsGrantFilterInput"></a>

```go
func AllDomainUnitsGrantFilterInput() *string
```

- *Type:* *string

---

##### `AllDomainUnitsGrantFilter`<sup>Required</sup> <a name="AllDomainUnitsGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.allDomainUnitsGrantFilter"></a>

```go
func AllDomainUnitsGrantFilter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantPrincipalDomainUnitOutputReference <a name="DatazonePolicyGrantPrincipalDomainUnitOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantPrincipalDomainUnitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantPrincipalDomainUnitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.putDomainUnitGrantFilter">PutDomainUnitGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitDesignation">ResetDomainUnitDesignation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitGrantFilter">ResetDomainUnitGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitIdentifier">ResetDomainUnitIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDomainUnitGrantFilter` <a name="PutDomainUnitGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.putDomainUnitGrantFilter"></a>

```go
func PutDomainUnitGrantFilter(value DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.putDomainUnitGrantFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter">DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter</a>

---

##### `ResetDomainUnitDesignation` <a name="ResetDomainUnitDesignation" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitDesignation"></a>

```go
func ResetDomainUnitDesignation()
```

##### `ResetDomainUnitGrantFilter` <a name="ResetDomainUnitGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitGrantFilter"></a>

```go
func ResetDomainUnitGrantFilter()
```

##### `ResetDomainUnitIdentifier` <a name="ResetDomainUnitIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitIdentifier"></a>

```go
func ResetDomainUnitIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitGrantFilter">DomainUnitGrantFilter</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference">DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignationInput">DomainUnitDesignationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitGrantFilterInput">DomainUnitGrantFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifierInput">DomainUnitIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignation">DomainUnitDesignation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifier">DomainUnitIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainUnitGrantFilter`<sup>Required</sup> <a name="DomainUnitGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitGrantFilter"></a>

```go
func DomainUnitGrantFilter() DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference">DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference</a>

---

##### `DomainUnitDesignationInput`<sup>Optional</sup> <a name="DomainUnitDesignationInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignationInput"></a>

```go
func DomainUnitDesignationInput() *string
```

- *Type:* *string

---

##### `DomainUnitGrantFilterInput`<sup>Optional</sup> <a name="DomainUnitGrantFilterInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitGrantFilterInput"></a>

```go
func DomainUnitGrantFilterInput() interface{}
```

- *Type:* interface{}

---

##### `DomainUnitIdentifierInput`<sup>Optional</sup> <a name="DomainUnitIdentifierInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifierInput"></a>

```go
func DomainUnitIdentifierInput() *string
```

- *Type:* *string

---

##### `DomainUnitDesignation`<sup>Required</sup> <a name="DomainUnitDesignation" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignation"></a>

```go
func DomainUnitDesignation() *string
```

- *Type:* *string

---

##### `DomainUnitIdentifier`<sup>Required</sup> <a name="DomainUnitIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifier"></a>

```go
func DomainUnitIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantPrincipalGroupOutputReference <a name="DatazonePolicyGrantPrincipalGroupOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantPrincipalGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantPrincipalGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resetGroupIdentifier">ResetGroupIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupIdentifier` <a name="ResetGroupIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resetGroupIdentifier"></a>

```go
func ResetGroupIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifierInput">GroupIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifier">GroupIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupIdentifierInput`<sup>Optional</sup> <a name="GroupIdentifierInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifierInput"></a>

```go
func GroupIdentifierInput() *string
```

- *Type:* *string

---

##### `GroupIdentifier`<sup>Required</sup> <a name="GroupIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifier"></a>

```go
func GroupIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantPrincipalOutputReference <a name="DatazonePolicyGrantPrincipalOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantPrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantPrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putDomainUnit">PutDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putGroup">PutGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putProject">PutProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putUser">PutUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetDomainUnit">ResetDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDomainUnit` <a name="PutDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putDomainUnit"></a>

```go
func PutDomainUnit(value DatazonePolicyGrantPrincipalDomainUnit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putDomainUnit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>

---

##### `PutGroup` <a name="PutGroup" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putGroup"></a>

```go
func PutGroup(value DatazonePolicyGrantPrincipalGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>

---

##### `PutProject` <a name="PutProject" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putProject"></a>

```go
func PutProject(value DatazonePolicyGrantPrincipalProject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putProject.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>

---

##### `PutUser` <a name="PutUser" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putUser"></a>

```go
func PutUser(value DatazonePolicyGrantPrincipalUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>

---

##### `ResetDomainUnit` <a name="ResetDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetDomainUnit"></a>

```go
func ResetDomainUnit()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetGroup"></a>

```go
func ResetGroup()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetProject"></a>

```go
func ResetProject()
```

##### `ResetUser` <a name="ResetUser" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetUser"></a>

```go
func ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnit">DomainUnit</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference">DatazonePolicyGrantPrincipalDomainUnitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.group">Group</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference">DatazonePolicyGrantPrincipalGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.project">Project</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference">DatazonePolicyGrantPrincipalProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.user">User</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference">DatazonePolicyGrantPrincipalUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnitInput">DomainUnitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.groupInput">GroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.projectInput">ProjectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.userInput">UserInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainUnit`<sup>Required</sup> <a name="DomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnit"></a>

```go
func DomainUnit() DatazonePolicyGrantPrincipalDomainUnitOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference">DatazonePolicyGrantPrincipalDomainUnitOutputReference</a>

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.group"></a>

```go
func Group() DatazonePolicyGrantPrincipalGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference">DatazonePolicyGrantPrincipalGroupOutputReference</a>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.project"></a>

```go
func Project() DatazonePolicyGrantPrincipalProjectOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference">DatazonePolicyGrantPrincipalProjectOutputReference</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.user"></a>

```go
func User() DatazonePolicyGrantPrincipalUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference">DatazonePolicyGrantPrincipalUserOutputReference</a>

---

##### `DomainUnitInput`<sup>Optional</sup> <a name="DomainUnitInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnitInput"></a>

```go
func DomainUnitInput() interface{}
```

- *Type:* interface{}

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.groupInput"></a>

```go
func GroupInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.projectInput"></a>

```go
func ProjectInput() interface{}
```

- *Type:* interface{}

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.userInput"></a>

```go
func UserInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantPrincipalProjectOutputReference <a name="DatazonePolicyGrantPrincipalProjectOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantPrincipalProjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantPrincipalProjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.putProjectGrantFilter">PutProjectGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectDesignation">ResetProjectDesignation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectGrantFilter">ResetProjectGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectIdentifier">ResetProjectIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProjectGrantFilter` <a name="PutProjectGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.putProjectGrantFilter"></a>

```go
func PutProjectGrantFilter(value DatazonePolicyGrantPrincipalProjectProjectGrantFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.putProjectGrantFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilter</a>

---

##### `ResetProjectDesignation` <a name="ResetProjectDesignation" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectDesignation"></a>

```go
func ResetProjectDesignation()
```

##### `ResetProjectGrantFilter` <a name="ResetProjectGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectGrantFilter"></a>

```go
func ResetProjectGrantFilter()
```

##### `ResetProjectIdentifier` <a name="ResetProjectIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectIdentifier"></a>

```go
func ResetProjectIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectGrantFilter">ProjectGrantFilter</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference">DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignationInput">ProjectDesignationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectGrantFilterInput">ProjectGrantFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifierInput">ProjectIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignation">ProjectDesignation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifier">ProjectIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectGrantFilter`<sup>Required</sup> <a name="ProjectGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectGrantFilter"></a>

```go
func ProjectGrantFilter() DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference">DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference</a>

---

##### `ProjectDesignationInput`<sup>Optional</sup> <a name="ProjectDesignationInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignationInput"></a>

```go
func ProjectDesignationInput() *string
```

- *Type:* *string

---

##### `ProjectGrantFilterInput`<sup>Optional</sup> <a name="ProjectGrantFilterInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectGrantFilterInput"></a>

```go
func ProjectGrantFilterInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdentifierInput`<sup>Optional</sup> <a name="ProjectIdentifierInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifierInput"></a>

```go
func ProjectIdentifierInput() *string
```

- *Type:* *string

---

##### `ProjectDesignation`<sup>Required</sup> <a name="ProjectDesignation" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignation"></a>

```go
func ProjectDesignation() *string
```

- *Type:* *string

---

##### `ProjectIdentifier`<sup>Required</sup> <a name="ProjectIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifier"></a>

```go
func ProjectIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference <a name="DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resetDomainUnit">ResetDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainUnit` <a name="ResetDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resetDomainUnit"></a>

```go
func ResetDomainUnit()
```

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resetIncludeChildDomainUnits"></a>

```go
func ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.domainUnitInput">DomainUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.domainUnit">DomainUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainUnitInput`<sup>Optional</sup> <a name="DomainUnitInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.domainUnitInput"></a>

```go
func DomainUnitInput() *string
```

- *Type:* *string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.includeChildDomainUnitsInput"></a>

```go
func IncludeChildDomainUnitsInput() interface{}
```

- *Type:* interface{}

---

##### `DomainUnit`<sup>Required</sup> <a name="DomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.domainUnit"></a>

```go
func DomainUnit() *string
```

- *Type:* *string

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.includeChildDomainUnits"></a>

```go
func IncludeChildDomainUnits() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference <a name="DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.putDomainUnitFilter">PutDomainUnitFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.resetDomainUnitFilter">ResetDomainUnitFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDomainUnitFilter` <a name="PutDomainUnitFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.putDomainUnitFilter"></a>

```go
func PutDomainUnitFilter(value DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.putDomainUnitFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter</a>

---

##### `ResetDomainUnitFilter` <a name="ResetDomainUnitFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.resetDomainUnitFilter"></a>

```go
func ResetDomainUnitFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.domainUnitFilter">DomainUnitFilter</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference">DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.domainUnitFilterInput">DomainUnitFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainUnitFilter`<sup>Required</sup> <a name="DomainUnitFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.domainUnitFilter"></a>

```go
func DomainUnitFilter() DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference">DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference</a>

---

##### `DomainUnitFilterInput`<sup>Optional</sup> <a name="DomainUnitFilterInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.domainUnitFilterInput"></a>

```go
func DomainUnitFilterInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazonePolicyGrantPrincipalUserOutputReference <a name="DatazonePolicyGrantPrincipalUserOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonepolicygrant"

datazonepolicygrant.NewDatazonePolicyGrantPrincipalUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazonePolicyGrantPrincipalUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetAllUsersGrantFilter">ResetAllUsersGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetUserIdentifier">ResetUserIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllUsersGrantFilter` <a name="ResetAllUsersGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetAllUsersGrantFilter"></a>

```go
func ResetAllUsersGrantFilter()
```

##### `ResetUserIdentifier` <a name="ResetUserIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetUserIdentifier"></a>

```go
func ResetUserIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilterInput">AllUsersGrantFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifierInput">UserIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilter">AllUsersGrantFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifier">UserIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllUsersGrantFilterInput`<sup>Optional</sup> <a name="AllUsersGrantFilterInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilterInput"></a>

```go
func AllUsersGrantFilterInput() *string
```

- *Type:* *string

---

##### `UserIdentifierInput`<sup>Optional</sup> <a name="UserIdentifierInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifierInput"></a>

```go
func UserIdentifierInput() *string
```

- *Type:* *string

---

##### `AllUsersGrantFilter`<sup>Required</sup> <a name="AllUsersGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilter"></a>

```go
func AllUsersGrantFilter() *string
```

- *Type:* *string

---

##### `UserIdentifier`<sup>Required</sup> <a name="UserIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifier"></a>

```go
func UserIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



