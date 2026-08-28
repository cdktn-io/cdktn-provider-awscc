# `mediapackagePackagingGroup` Submodule <a name="`mediapackagePackagingGroup` Submodule" id="@cdktn/provider-awscc.mediapackagePackagingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediapackagePackagingGroup <a name="MediapackagePackagingGroup" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_group awscc_mediapackage_packaging_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackaginggroup"

mediapackagepackaginggroup.NewMediapackagePackagingGroup(scope Construct, id *string, config MediapackagePackagingGroupConfig) MediapackagePackagingGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig">MediapackagePackagingGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig">MediapackagePackagingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putEgressAccessLogs">PutEgressAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetEgressAccessLogs">ResetEgressAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putAuthorization"></a>

```go
func PutAuthorization(value MediapackagePackagingGroupAuthorization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

---

##### `PutEgressAccessLogs` <a name="PutEgressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putEgressAccessLogs"></a>

```go
func PutEgressAccessLogs(value MediapackagePackagingGroupEgressAccessLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putEgressAccessLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetEgressAccessLogs` <a name="ResetEgressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetEgressAccessLogs"></a>

```go
func ResetEgressAccessLogs()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediapackagePackagingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackaginggroup"

mediapackagepackaginggroup.MediapackagePackagingGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackaginggroup"

mediapackagepackaginggroup.MediapackagePackagingGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackaginggroup"

mediapackagepackaginggroup.MediapackagePackagingGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackaginggroup"

mediapackagepackaginggroup.MediapackagePackagingGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MediapackagePackagingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediapackagePackagingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediapackagePackagingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MediapackagePackagingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorization">Authorization</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference">MediapackagePackagingGroupAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogs">EgressAccessLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference">MediapackagePackagingGroupEgressAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList">MediapackagePackagingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorizationInput">AuthorizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogsInput">EgressAccessLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupIdInput">PackagingGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupId">PackagingGroupId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorization"></a>

```go
func Authorization() MediapackagePackagingGroupAuthorizationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference">MediapackagePackagingGroupAuthorizationOutputReference</a>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `EgressAccessLogs`<sup>Required</sup> <a name="EgressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogs"></a>

```go
func EgressAccessLogs() MediapackagePackagingGroupEgressAccessLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference">MediapackagePackagingGroupEgressAccessLogsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tags"></a>

```go
func Tags() MediapackagePackagingGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList">MediapackagePackagingGroupTagsList</a>

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorizationInput"></a>

```go
func AuthorizationInput() interface{}
```

- *Type:* interface{}

---

##### `EgressAccessLogsInput`<sup>Optional</sup> <a name="EgressAccessLogsInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogsInput"></a>

```go
func EgressAccessLogsInput() interface{}
```

- *Type:* interface{}

---

##### `PackagingGroupIdInput`<sup>Optional</sup> <a name="PackagingGroupIdInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupIdInput"></a>

```go
func PackagingGroupIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `PackagingGroupId`<sup>Required</sup> <a name="PackagingGroupId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupId"></a>

```go
func PackagingGroupId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediapackagePackagingGroupAuthorization <a name="MediapackagePackagingGroupAuthorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackaginggroup"

&mediapackagepackaginggroup.MediapackagePackagingGroupAuthorization {
	CdnIdentifierSecret: *string,
	SecretsRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.cdnIdentifierSecret">CdnIdentifierSecret</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.secretsRoleArn">SecretsRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager. |

---

##### `CdnIdentifierSecret`<sup>Optional</sup> <a name="CdnIdentifierSecret" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.cdnIdentifierSecret"></a>

```go
CdnIdentifierSecret *string
```

- *Type:* *string

The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_group#cdn_identifier_secret MediapackagePackagingGroup#cdn_identifier_secret}

---

##### `SecretsRoleArn`<sup>Optional</sup> <a name="SecretsRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.secretsRoleArn"></a>

```go
SecretsRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_group#secrets_role_arn MediapackagePackagingGroup#secrets_role_arn}

---

### MediapackagePackagingGroupConfig <a name="MediapackagePackagingGroupConfig" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackaginggroup"

&mediapackagepackaginggroup.MediapackagePackagingGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PackagingGroupId: *string,
	Authorization: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization,
	EgressAccessLogs: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.packagingGroupId">PackagingGroupId</a></code> | <code>*string</code> | The ID of the PackagingGroup. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.authorization">Authorization</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a></code> | CDN Authorization. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.egressAccessLogs">EgressAccessLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a></code> | The configuration parameters for egress access logging. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A collection of tags associated with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PackagingGroupId`<sup>Required</sup> <a name="PackagingGroupId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.packagingGroupId"></a>

```go
PackagingGroupId *string
```

- *Type:* *string

The ID of the PackagingGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_group#packaging_group_id MediapackagePackagingGroup#packaging_group_id}

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.authorization"></a>

```go
Authorization MediapackagePackagingGroupAuthorization
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

CDN Authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_group#authorization MediapackagePackagingGroup#authorization}

---

##### `EgressAccessLogs`<sup>Optional</sup> <a name="EgressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.egressAccessLogs"></a>

```go
EgressAccessLogs MediapackagePackagingGroupEgressAccessLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

The configuration parameters for egress access logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_group#egress_access_logs MediapackagePackagingGroup#egress_access_logs}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_group#tags MediapackagePackagingGroup#tags}

---

### MediapackagePackagingGroupEgressAccessLogs <a name="MediapackagePackagingGroupEgressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackaginggroup"

&mediapackagepackaginggroup.MediapackagePackagingGroupEgressAccessLogs {
	LogGroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | Sets a custom AWS CloudWatch log group name for egress logs. |

---

##### `LogGroupName`<sup>Optional</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs.property.logGroupName"></a>

```go
LogGroupName *string
```

- *Type:* *string

Sets a custom AWS CloudWatch log group name for egress logs.

If a log group name isn't specified, the default name is used: /aws/MediaPackage/VodEgressAccessLogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_group#log_group_name MediapackagePackagingGroup#log_group_name}

---

### MediapackagePackagingGroupTags <a name="MediapackagePackagingGroupTags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackaginggroup"

&mediapackagepackaginggroup.MediapackagePackagingGroupTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_group#key MediapackagePackagingGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_group#value MediapackagePackagingGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_group#key MediapackagePackagingGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_group#value MediapackagePackagingGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediapackagePackagingGroupAuthorizationOutputReference <a name="MediapackagePackagingGroupAuthorizationOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackaginggroup"

mediapackagepackaginggroup.NewMediapackagePackagingGroupAuthorizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingGroupAuthorizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetCdnIdentifierSecret">ResetCdnIdentifierSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetSecretsRoleArn">ResetSecretsRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCdnIdentifierSecret` <a name="ResetCdnIdentifierSecret" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetCdnIdentifierSecret"></a>

```go
func ResetCdnIdentifierSecret()
```

##### `ResetSecretsRoleArn` <a name="ResetSecretsRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetSecretsRoleArn"></a>

```go
func ResetSecretsRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecretInput">CdnIdentifierSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArnInput">SecretsRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecret">CdnIdentifierSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArn">SecretsRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CdnIdentifierSecretInput`<sup>Optional</sup> <a name="CdnIdentifierSecretInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecretInput"></a>

```go
func CdnIdentifierSecretInput() *string
```

- *Type:* *string

---

##### `SecretsRoleArnInput`<sup>Optional</sup> <a name="SecretsRoleArnInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArnInput"></a>

```go
func SecretsRoleArnInput() *string
```

- *Type:* *string

---

##### `CdnIdentifierSecret`<sup>Required</sup> <a name="CdnIdentifierSecret" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecret"></a>

```go
func CdnIdentifierSecret() *string
```

- *Type:* *string

---

##### `SecretsRoleArn`<sup>Required</sup> <a name="SecretsRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArn"></a>

```go
func SecretsRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingGroupEgressAccessLogsOutputReference <a name="MediapackagePackagingGroupEgressAccessLogsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackaginggroup"

mediapackagepackaginggroup.NewMediapackagePackagingGroupEgressAccessLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingGroupEgressAccessLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resetLogGroupName">ResetLogGroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupName` <a name="ResetLogGroupName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resetLogGroupName"></a>

```go
func ResetLogGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupNameInput"></a>

```go
func LogGroupNameInput() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingGroupTagsList <a name="MediapackagePackagingGroupTagsList" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackaginggroup"

mediapackagepackaginggroup.NewMediapackagePackagingGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediapackagePackagingGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.get"></a>

```go
func Get(index *f64) MediapackagePackagingGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingGroupTagsOutputReference <a name="MediapackagePackagingGroupTagsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackaginggroup"

mediapackagepackaginggroup.NewMediapackagePackagingGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediapackagePackagingGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



