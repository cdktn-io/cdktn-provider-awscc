# `appstreamStackUserAssociation` Submodule <a name="`appstreamStackUserAssociation` Submodule" id="@cdktn/provider-awscc.appstreamStackUserAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamStackUserAssociation <a name="AppstreamStackUserAssociation" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_stack_user_association awscc_appstream_stack_user_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamstackuserassociation"

appstreamstackuserassociation.NewAppstreamStackUserAssociation(scope Construct, id *string, config AppstreamStackUserAssociationConfig) AppstreamStackUserAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig">AppstreamStackUserAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig">AppstreamStackUserAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.resetSendEmailNotification">ResetSendEmailNotification</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetSendEmailNotification` <a name="ResetSendEmailNotification" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.resetSendEmailNotification"></a>

```go
func ResetSendEmailNotification()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamStackUserAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamstackuserassociation"

appstreamstackuserassociation.AppstreamStackUserAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamstackuserassociation"

appstreamstackuserassociation.AppstreamStackUserAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamstackuserassociation"

appstreamstackuserassociation.AppstreamStackUserAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamstackuserassociation"

appstreamstackuserassociation.AppstreamStackUserAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AppstreamStackUserAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppstreamStackUserAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppstreamStackUserAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_stack_user_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamStackUserAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.sendEmailNotificationInput">SendEmailNotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.stackNameInput">StackNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.sendEmailNotification">SendEmailNotification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.stackName">StackName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.authenticationTypeInput"></a>

```go
func AuthenticationTypeInput() *string
```

- *Type:* *string

---

##### `SendEmailNotificationInput`<sup>Optional</sup> <a name="SendEmailNotificationInput" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.sendEmailNotificationInput"></a>

```go
func SendEmailNotificationInput() interface{}
```

- *Type:* interface{}

---

##### `StackNameInput`<sup>Optional</sup> <a name="StackNameInput" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.stackNameInput"></a>

```go
func StackNameInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.authenticationType"></a>

```go
func AuthenticationType() *string
```

- *Type:* *string

---

##### `SendEmailNotification`<sup>Required</sup> <a name="SendEmailNotification" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.sendEmailNotification"></a>

```go
func SendEmailNotification() interface{}
```

- *Type:* interface{}

---

##### `StackName`<sup>Required</sup> <a name="StackName" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.stackName"></a>

```go
func StackName() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamStackUserAssociationConfig <a name="AppstreamStackUserAssociationConfig" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamstackuserassociation"

&appstreamstackuserassociation.AppstreamStackUserAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AuthenticationType: *string,
	StackName: *string,
	UserName: *string,
	SendEmailNotification: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | The authentication type for the user who is associated with the stack. You must specify USERPOOL. |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.stackName">StackName</a></code> | <code>*string</code> | The name of the stack that is associated with the user. |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.userName">UserName</a></code> | <code>*string</code> | The name of the user who is associated with the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.sendEmailNotification">SendEmailNotification</a></code> | <code>interface{}</code> | Specifies whether a welcome email is sent to a user after the user is created in the user pool. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.authenticationType"></a>

```go
AuthenticationType *string
```

- *Type:* *string

The authentication type for the user who is associated with the stack. You must specify USERPOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_stack_user_association#authentication_type AppstreamStackUserAssociation#authentication_type}

---

##### `StackName`<sup>Required</sup> <a name="StackName" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.stackName"></a>

```go
StackName *string
```

- *Type:* *string

The name of the stack that is associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_stack_user_association#stack_name AppstreamStackUserAssociation#stack_name}

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

The name of the user who is associated with the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_stack_user_association#user_name AppstreamStackUserAssociation#user_name}

---

##### `SendEmailNotification`<sup>Optional</sup> <a name="SendEmailNotification" id="@cdktn/provider-awscc.appstreamStackUserAssociation.AppstreamStackUserAssociationConfig.property.sendEmailNotification"></a>

```go
SendEmailNotification interface{}
```

- *Type:* interface{}

Specifies whether a welcome email is sent to a user after the user is created in the user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_stack_user_association#send_email_notification AppstreamStackUserAssociation#send_email_notification}

---



