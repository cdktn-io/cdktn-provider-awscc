# `mpaIdentitySource` Submodule <a name="`mpaIdentitySource` Submodule" id="@cdktn/provider-awscc.mpaIdentitySource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MpaIdentitySource <a name="MpaIdentitySource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source awscc_mpa_identity_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mpaidentitysource"

mpaidentitysource.NewMpaIdentitySource(scope Construct, id *string, config MpaIdentitySourceConfig) MpaIdentitySource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig">MpaIdentitySourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig">MpaIdentitySourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putIdentitySourceParameters">PutIdentitySourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentitySourceParameters` <a name="PutIdentitySourceParameters" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putIdentitySourceParameters"></a>

```go
func PutIdentitySourceParameters(value MpaIdentitySourceIdentitySourceParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putIdentitySourceParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MpaIdentitySource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mpaidentitysource"

mpaidentitysource.MpaIdentitySource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mpaidentitysource"

mpaidentitysource.MpaIdentitySource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mpaidentitysource"

mpaidentitysource.MpaIdentitySource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mpaidentitysource"

mpaidentitysource.MpaIdentitySource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MpaIdentitySource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MpaIdentitySource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MpaIdentitySource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MpaIdentitySource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceArn">IdentitySourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceParameters">IdentitySourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference">MpaIdentitySourceIdentitySourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceType">IdentitySourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList">MpaIdentitySourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceParametersInput">IdentitySourceParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentitySourceArn`<sup>Required</sup> <a name="IdentitySourceArn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceArn"></a>

```go
func IdentitySourceArn() *string
```

- *Type:* *string

---

##### `IdentitySourceParameters`<sup>Required</sup> <a name="IdentitySourceParameters" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceParameters"></a>

```go
func IdentitySourceParameters() MpaIdentitySourceIdentitySourceParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference">MpaIdentitySourceIdentitySourceParametersOutputReference</a>

---

##### `IdentitySourceType`<sup>Required</sup> <a name="IdentitySourceType" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceType"></a>

```go
func IdentitySourceType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tags"></a>

```go
func Tags() MpaIdentitySourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList">MpaIdentitySourceTagsList</a>

---

##### `IdentitySourceParametersInput`<sup>Optional</sup> <a name="IdentitySourceParametersInput" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceParametersInput"></a>

```go
func IdentitySourceParametersInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MpaIdentitySourceConfig <a name="MpaIdentitySourceConfig" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mpaidentitysource"

&mpaidentitysource.MpaIdentitySourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IdentitySourceParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.identitySourceParameters">IdentitySourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#identity_source_parameters MpaIdentitySource#identity_source_parameters}. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#tags MpaIdentitySource#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdentitySourceParameters`<sup>Required</sup> <a name="IdentitySourceParameters" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.identitySourceParameters"></a>

```go
IdentitySourceParameters MpaIdentitySourceIdentitySourceParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#identity_source_parameters MpaIdentitySource#identity_source_parameters}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#tags MpaIdentitySource#tags}.

---

### MpaIdentitySourceIdentitySourceParameters <a name="MpaIdentitySourceIdentitySourceParameters" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mpaidentitysource"

&mpaidentitysource.MpaIdentitySourceIdentitySourceParameters {
	IamIdentityCenter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters.property.iamIdentityCenter">IamIdentityCenter</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter">MpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#iam_identity_center MpaIdentitySource#iam_identity_center}. |

---

##### `IamIdentityCenter`<sup>Required</sup> <a name="IamIdentityCenter" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters.property.iamIdentityCenter"></a>

```go
IamIdentityCenter MpaIdentitySourceIdentitySourceParametersIamIdentityCenter
```

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter">MpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#iam_identity_center MpaIdentitySource#iam_identity_center}.

---

### MpaIdentitySourceIdentitySourceParametersIamIdentityCenter <a name="MpaIdentitySourceIdentitySourceParametersIamIdentityCenter" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mpaidentitysource"

&mpaidentitysource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter {
	InstanceArn: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#instance_arn MpaIdentitySource#instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#region MpaIdentitySource#region}. |

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter.property.instanceArn"></a>

```go
InstanceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#instance_arn MpaIdentitySource#instance_arn}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#region MpaIdentitySource#region}.

---

### MpaIdentitySourceTags <a name="MpaIdentitySourceTags" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mpaidentitysource"

&mpaidentitysource.MpaIdentitySourceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#key MpaIdentitySource#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#value MpaIdentitySource#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference <a name="MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mpaidentitysource"

mpaidentitysource.NewMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.approvalPortalUrl">ApprovalPortalUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.instanceArnInput">InstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApprovalPortalUrl`<sup>Required</sup> <a name="ApprovalPortalUrl" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.approvalPortalUrl"></a>

```go
func ApprovalPortalUrl() *string
```

- *Type:* *string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.instanceArnInput"></a>

```go
func InstanceArnInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MpaIdentitySourceIdentitySourceParametersOutputReference <a name="MpaIdentitySourceIdentitySourceParametersOutputReference" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mpaidentitysource"

mpaidentitysource.NewMpaIdentitySourceIdentitySourceParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MpaIdentitySourceIdentitySourceParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.putIamIdentityCenter">PutIamIdentityCenter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIamIdentityCenter` <a name="PutIamIdentityCenter" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.putIamIdentityCenter"></a>

```go
func PutIamIdentityCenter(value MpaIdentitySourceIdentitySourceParametersIamIdentityCenter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.putIamIdentityCenter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter">MpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.iamIdentityCenter">IamIdentityCenter</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference">MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.iamIdentityCenterInput">IamIdentityCenterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IamIdentityCenter`<sup>Required</sup> <a name="IamIdentityCenter" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.iamIdentityCenter"></a>

```go
func IamIdentityCenter() MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference">MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference</a>

---

##### `IamIdentityCenterInput`<sup>Optional</sup> <a name="IamIdentityCenterInput" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.iamIdentityCenterInput"></a>

```go
func IamIdentityCenterInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MpaIdentitySourceTagsList <a name="MpaIdentitySourceTagsList" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mpaidentitysource"

mpaidentitysource.NewMpaIdentitySourceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MpaIdentitySourceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.get"></a>

```go
func Get(index *f64) MpaIdentitySourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MpaIdentitySourceTagsOutputReference <a name="MpaIdentitySourceTagsOutputReference" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mpaidentitysource"

mpaidentitysource.NewMpaIdentitySourceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MpaIdentitySourceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



