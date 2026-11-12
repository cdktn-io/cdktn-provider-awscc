# `mediaconnectDestinationEndpoint` Submodule <a name="`mediaconnectDestinationEndpoint` Submodule" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectDestinationEndpoint <a name="MediaconnectDestinationEndpoint" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint awscc_mediaconnect_destination_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpoint(scope Construct, id *string, config MediaconnectDestinationEndpointConfig) MediaconnectDestinationEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig">MediaconnectDestinationEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig">MediaconnectDestinationEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetRegionName">ResetRegionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putConfiguration"></a>

```go
func PutConfiguration(value MediaconnectDestinationEndpointConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetRegionName` <a name="ResetRegionName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetRegionName"></a>

```go
func ResetRegionName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectDestinationEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.MediaconnectDestinationEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.MediaconnectDestinationEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.MediaconnectDestinationEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.MediaconnectDestinationEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MediaconnectDestinationEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediaconnectDestinationEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediaconnectDestinationEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectDestinationEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.associatedResourceDetails">AssociatedResourceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference">MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.connectionState">ConnectionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.destinationEndpointId">DestinationEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.lifecycleManagement">LifecycleManagement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.registrationState">RegistrationState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList">MediaconnectDestinationEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.configurationInput">ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.regionNameInput">RegionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AssociatedResourceDetails`<sup>Required</sup> <a name="AssociatedResourceDetails" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.associatedResourceDetails"></a>

```go
func AssociatedResourceDetails() MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference">MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference</a>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.availabilityZoneId"></a>

```go
func AvailabilityZoneId() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.configuration"></a>

```go
func Configuration() MediaconnectDestinationEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationOutputReference</a>

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.connectionState"></a>

```go
func ConnectionState() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DestinationEndpointId`<sup>Required</sup> <a name="DestinationEndpointId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.destinationEndpointId"></a>

```go
func DestinationEndpointId() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleManagement`<sup>Required</sup> <a name="LifecycleManagement" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.lifecycleManagement"></a>

```go
func LifecycleManagement() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RegistrationState`<sup>Required</sup> <a name="RegistrationState" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.registrationState"></a>

```go
func RegistrationState() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tags"></a>

```go
func Tags() MediaconnectDestinationEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList">MediaconnectDestinationEndpointTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.configurationInput"></a>

```go
func ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.regionNameInput"></a>

```go
func RegionNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectDestinationEndpointAssociatedResourceDetails <a name="MediaconnectDestinationEndpointAssociatedResourceDetails" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointAssociatedResourceDetails {

}
```


### MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput <a name="MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput {

}
```


### MediaconnectDestinationEndpointConfig <a name="MediaconnectDestinationEndpointConfig" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration,
	Description: *string,
	RegionName: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a></code> | The configuration settings for a destination endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.description">Description</a></code> | <code>*string</code> | The description of the destination endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.regionName">RegionName</a></code> | <code>*string</code> | The name of the Amazon Web Services Region in which the destination endpoint is located. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with the destination endpoint. Each tag is a key-value pair. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.configuration"></a>

```go
Configuration MediaconnectDestinationEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration">MediaconnectDestinationEndpointConfiguration</a>

The configuration settings for a destination endpoint.

This is a union type, so exactly one of its members is set, depending on the type of the destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#configuration MediaconnectDestinationEndpoint#configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#description MediaconnectDestinationEndpoint#description}

---

##### `RegionName`<sup>Optional</sup> <a name="RegionName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.regionName"></a>

```go
RegionName *string
```

- *Type:* *string

The name of the Amazon Web Services Region in which the destination endpoint is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#region_name MediaconnectDestinationEndpoint#region_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with the destination endpoint. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#tags MediaconnectDestinationEndpoint#tags}

---

### MediaconnectDestinationEndpointConfiguration <a name="MediaconnectDestinationEndpointConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointConfiguration {
	RouterInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput,
	Standard: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration.property.routerInput">RouterInput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput">MediaconnectDestinationEndpointConfigurationRouterInput</a></code> | The configuration settings for a destination endpoint that represents a router input. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration.property.standard">Standard</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard">MediaconnectDestinationEndpointConfigurationStandard</a></code> | The configuration settings for a standard destination endpoint. |

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration.property.routerInput"></a>

```go
RouterInput MediaconnectDestinationEndpointConfigurationRouterInput
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput">MediaconnectDestinationEndpointConfigurationRouterInput</a>

The configuration settings for a destination endpoint that represents a router input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#router_input MediaconnectDestinationEndpoint#router_input}

---

##### `Standard`<sup>Optional</sup> <a name="Standard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfiguration.property.standard"></a>

```go
Standard MediaconnectDestinationEndpointConfigurationStandard
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard">MediaconnectDestinationEndpointConfigurationStandard</a>

The configuration settings for a standard destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#standard MediaconnectDestinationEndpoint#standard}

---

### MediaconnectDestinationEndpointConfigurationRouterInput <a name="MediaconnectDestinationEndpointConfigurationRouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointConfigurationRouterInput {
	RouterInputArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput.property.routerInputArn">RouterInputArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the router input that the destination endpoint represents. |

---

##### `RouterInputArn`<sup>Optional</sup> <a name="RouterInputArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput.property.routerInputArn"></a>

```go
RouterInputArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the router input that the destination endpoint represents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#router_input_arn MediaconnectDestinationEndpoint#router_input_arn}

---

### MediaconnectDestinationEndpointConfigurationStandard <a name="MediaconnectDestinationEndpointConfigurationStandard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointConfigurationStandard {
	DestinationNetworkingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration,
	DestinationNetworkingType: *string,
	Name: *string,
	Protocol: *string,
	ProtocolConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.destinationNetworkingConfiguration">DestinationNetworkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a></code> | The networking configuration for a standard destination endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.destinationNetworkingType">DestinationNetworkingType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_networking_type MediaconnectDestinationEndpoint#destination_networking_type}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.name">Name</a></code> | <code>*string</code> | The name of the destination endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#protocol MediaconnectDestinationEndpoint#protocol}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.protocolConfiguration">ProtocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a></code> | The protocol configuration for a standard destination endpoint. |

---

##### `DestinationNetworkingConfiguration`<sup>Optional</sup> <a name="DestinationNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.destinationNetworkingConfiguration"></a>

```go
DestinationNetworkingConfiguration MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a>

The networking configuration for a standard destination endpoint.

This is a union type, so exactly one of its members is set: public for a publicly accessible endpoint, or vpc for an endpoint in a virtual private cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_networking_configuration MediaconnectDestinationEndpoint#destination_networking_configuration}

---

##### `DestinationNetworkingType`<sup>Optional</sup> <a name="DestinationNetworkingType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.destinationNetworkingType"></a>

```go
DestinationNetworkingType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_networking_type MediaconnectDestinationEndpoint#destination_networking_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#name MediaconnectDestinationEndpoint#name}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#protocol MediaconnectDestinationEndpoint#protocol}.

---

##### `ProtocolConfiguration`<sup>Optional</sup> <a name="ProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard.property.protocolConfiguration"></a>

```go
ProtocolConfiguration MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a>

The protocol configuration for a standard destination endpoint.

This is a union type, so exactly one of its members is set, depending on the protocol that the destination endpoint uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#protocol_configuration MediaconnectDestinationEndpoint#protocol_configuration}

---

### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration {
	Public: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic,
	Vpc: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.property.public">Public</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a></code> | The networking configuration for a publicly accessible destination endpoint, including the CIDR blocks that are allowed to connect. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a></code> | The networking configuration for a destination endpoint in a virtual private cloud (VPC). |

---

##### `Public`<sup>Optional</sup> <a name="Public" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.property.public"></a>

```go
Public MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a>

The networking configuration for a publicly accessible destination endpoint, including the CIDR blocks that are allowed to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#public MediaconnectDestinationEndpoint#public}

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.property.vpc"></a>

```go
Vpc MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a>

The networking configuration for a destination endpoint in a virtual private cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#vpc MediaconnectDestinationEndpoint#vpc}

---

### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic {
	DestinationAllowRules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic.property.destinationAllowRules">DestinationAllowRules</a></code> | <code>interface{}</code> | The rules that specify which CIDR blocks can connect to the destination endpoint. |

---

##### `DestinationAllowRules`<sup>Optional</sup> <a name="DestinationAllowRules" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic.property.destinationAllowRules"></a>

```go
DestinationAllowRules interface{}
```

- *Type:* interface{}

The rules that specify which CIDR blocks can connect to the destination endpoint.

You can specify up to 10 rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_allow_rules MediaconnectDestinationEndpoint#destination_allow_rules}

---

### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules {
	Cidr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules.property.cidr">Cidr</a></code> | <code>*string</code> | The CIDR block that is allowed to connect to the destination endpoint, in CIDR notation. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules.property.cidr"></a>

```go
Cidr *string
```

- *Type:* *string

The CIDR block that is allowed to connect to the destination endpoint, in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#cidr MediaconnectDestinationEndpoint#cidr}

---

### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc {
	SecurityGroupIds: *[]*string,
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | The IDs of the security groups to associate with the destination endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.property.subnetId">SubnetId</a></code> | <code>*string</code> | The ID of the subnet to use for the destination endpoint. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

The IDs of the security groups to associate with the destination endpoint.

You can specify from 1 to 5 security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#security_group_ids MediaconnectDestinationEndpoint#security_group_ids}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

The ID of the subnet to use for the destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#subnet_id MediaconnectDestinationEndpoint#subnet_id}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration {
	Rist: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist,
	Rtp: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp,
	SrtCaller: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller,
	SrtListener: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.rist">Rist</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a></code> | The configuration settings for a destination endpoint that uses the RIST protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.rtp">Rtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a></code> | The configuration settings for a destination endpoint that uses the RTP protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.srtCaller">SrtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a></code> | The configuration settings for a destination endpoint that uses SRT in caller mode. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.srtListener">SrtListener</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a></code> | The configuration settings for a destination endpoint that uses SRT in listener mode. |

---

##### `Rist`<sup>Optional</sup> <a name="Rist" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.rist"></a>

```go
Rist MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a>

The configuration settings for a destination endpoint that uses the RIST protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#rist MediaconnectDestinationEndpoint#rist}

---

##### `Rtp`<sup>Optional</sup> <a name="Rtp" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.rtp"></a>

```go
Rtp MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a>

The configuration settings for a destination endpoint that uses the RTP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#rtp MediaconnectDestinationEndpoint#rtp}

---

##### `SrtCaller`<sup>Optional</sup> <a name="SrtCaller" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.srtCaller"></a>

```go
SrtCaller MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

The configuration settings for a destination endpoint that uses SRT in caller mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#srt_caller MediaconnectDestinationEndpoint#srt_caller}

---

##### `SrtListener`<sup>Optional</sup> <a name="SrtListener" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.property.srtListener"></a>

```go
SrtListener MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

The configuration settings for a destination endpoint that uses SRT in listener mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#srt_listener MediaconnectDestinationEndpoint#srt_listener}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist {
	DestinationAddress: *string,
	DestinationIngestPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | The IP address on which the destination endpoint receives content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>*f64</code> | The port on which the destination endpoint receives content. The valid range is 1024 to 65531. |

---

##### `DestinationAddress`<sup>Optional</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.property.destinationAddress"></a>

```go
DestinationAddress *string
```

- *Type:* *string

The IP address on which the destination endpoint receives content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_address MediaconnectDestinationEndpoint#destination_address}

---

##### `DestinationIngestPort`<sup>Optional</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.property.destinationIngestPort"></a>

```go
DestinationIngestPort *f64
```

- *Type:* *f64

The port on which the destination endpoint receives content. The valid range is 1024 to 65531.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_ingest_port MediaconnectDestinationEndpoint#destination_ingest_port}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp {
	DestinationAddress: *string,
	DestinationIngestPort: *f64,
	ForwardErrorCorrectionState: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | The IP address on which the destination endpoint receives content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>*f64</code> | The port on which the destination endpoint receives content. The valid range is 1024 to 65531. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.forwardErrorCorrectionState">ForwardErrorCorrectionState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#forward_error_correction_state MediaconnectDestinationEndpoint#forward_error_correction_state}. |

---

##### `DestinationAddress`<sup>Optional</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.destinationAddress"></a>

```go
DestinationAddress *string
```

- *Type:* *string

The IP address on which the destination endpoint receives content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_address MediaconnectDestinationEndpoint#destination_address}

---

##### `DestinationIngestPort`<sup>Optional</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.destinationIngestPort"></a>

```go
DestinationIngestPort *f64
```

- *Type:* *f64

The port on which the destination endpoint receives content. The valid range is 1024 to 65531.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_ingest_port MediaconnectDestinationEndpoint#destination_ingest_port}

---

##### `ForwardErrorCorrectionState`<sup>Optional</sup> <a name="ForwardErrorCorrectionState" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.property.forwardErrorCorrectionState"></a>

```go
ForwardErrorCorrectionState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#forward_error_correction_state MediaconnectDestinationEndpoint#forward_error_correction_state}.

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller {
	EncryptionPassphrase: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase,
	MinimumLatencyMilliseconds: *f64,
	SourceListenerPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.encryptionPassphrase">EncryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a></code> | The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>*f64</code> | The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.sourceListenerPort">SourceListenerPort</a></code> | <code>*f64</code> | The port on which the source listens for the connection. The valid range is 3000 to 30000. |

---

##### `EncryptionPassphrase`<sup>Optional</sup> <a name="EncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.encryptionPassphrase"></a>

```go
EncryptionPassphrase MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#encryption_passphrase MediaconnectDestinationEndpoint#encryption_passphrase}

---

##### `MinimumLatencyMilliseconds`<sup>Optional</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.minimumLatencyMilliseconds"></a>

```go
MinimumLatencyMilliseconds *f64
```

- *Type:* *f64

The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#minimum_latency_milliseconds MediaconnectDestinationEndpoint#minimum_latency_milliseconds}

---

##### `SourceListenerPort`<sup>Optional</sup> <a name="SourceListenerPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.sourceListenerPort"></a>

```go
SourceListenerPort *f64
```

- *Type:* *f64

The port on which the source listens for the connection. The valid range is 3000 to 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#source_listener_port MediaconnectDestinationEndpoint#source_listener_port}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase {
	SecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase.property.secretArn">SecretArn</a></code> | <code>*string</code> | The ARN of the Secrets Manager secret that holds the key or passphrase. |

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

The ARN of the Secrets Manager secret that holds the key or passphrase.

The secret must be encrypted with a customer managed Amazon Web Services KMS key that is enabled and symmetric; it cannot use the Amazon Web Services managed key aws/secretsmanager. The secret must be in the same Amazon Web Services account and Region as the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#secret_arn MediaconnectDestinationEndpoint#secret_arn}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener {
	DestinationAddress: *string,
	DestinationIngestPort: *f64,
	EncryptionPassphrase: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase,
	MinimumLatencyMilliseconds: *f64,
	StreamId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | The IP address on which the destination endpoint listens for incoming connections. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>*f64</code> | The port on which the destination endpoint listens for incoming connections. The valid range is 0 to 65531. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.encryptionPassphrase">EncryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a></code> | The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>*f64</code> | The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.streamId">StreamId</a></code> | <code>*string</code> | The stream ID that identifies the content for the SRT connection. |

---

##### `DestinationAddress`<sup>Optional</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.destinationAddress"></a>

```go
DestinationAddress *string
```

- *Type:* *string

The IP address on which the destination endpoint listens for incoming connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_address MediaconnectDestinationEndpoint#destination_address}

---

##### `DestinationIngestPort`<sup>Optional</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.destinationIngestPort"></a>

```go
DestinationIngestPort *f64
```

- *Type:* *f64

The port on which the destination endpoint listens for incoming connections. The valid range is 0 to 65531.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_ingest_port MediaconnectDestinationEndpoint#destination_ingest_port}

---

##### `EncryptionPassphrase`<sup>Optional</sup> <a name="EncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.encryptionPassphrase"></a>

```go
EncryptionPassphrase MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#encryption_passphrase MediaconnectDestinationEndpoint#encryption_passphrase}

---

##### `MinimumLatencyMilliseconds`<sup>Optional</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.minimumLatencyMilliseconds"></a>

```go
MinimumLatencyMilliseconds *f64
```

- *Type:* *f64

The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#minimum_latency_milliseconds MediaconnectDestinationEndpoint#minimum_latency_milliseconds}

---

##### `StreamId`<sup>Optional</sup> <a name="StreamId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.property.streamId"></a>

```go
StreamId *string
```

- *Type:* *string

The stream ID that identifies the content for the SRT connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#stream_id MediaconnectDestinationEndpoint#stream_id}

---

### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase {
	SecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase.property.secretArn">SecretArn</a></code> | <code>*string</code> | The ARN of the Secrets Manager secret that holds the key or passphrase. |

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

The ARN of the Secrets Manager secret that holds the key or passphrase.

The secret must be encrypted with a customer managed Amazon Web Services KMS key that is enabled and symmetric; it cannot use the Amazon Web Services managed key aws/secretsmanager. The secret must be in the same Amazon Web Services account and Region as the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#secret_arn MediaconnectDestinationEndpoint#secret_arn}

---

### MediaconnectDestinationEndpointTags <a name="MediaconnectDestinationEndpointTags" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

&mediaconnectdestinationendpoint.MediaconnectDestinationEndpointTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#key MediaconnectDestinationEndpoint#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#value MediaconnectDestinationEndpoint#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#key MediaconnectDestinationEndpoint#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#value MediaconnectDestinationEndpoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference <a name="MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.routerInput">RouterInput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference">MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.standard">Standard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetails">MediaconnectDestinationEndpointAssociatedResourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RouterInput`<sup>Required</sup> <a name="RouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.routerInput"></a>

```go
func RouterInput() MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference">MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference</a>

---

##### `Standard`<sup>Required</sup> <a name="Standard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.standard"></a>

```go
func Standard() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() MediaconnectDestinationEndpointAssociatedResourceDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetails">MediaconnectDestinationEndpointAssociatedResourceDetails</a>

---


### MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference <a name="MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.maximumBitrate">MaximumBitrate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput">MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumBitrate`<sup>Required</sup> <a name="MaximumBitrate" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.maximumBitrate"></a>

```go
func MaximumBitrate() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.internalValue"></a>

```go
func InternalValue() MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput">MediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput</a>

---


### MediaconnectDestinationEndpointConfigurationOutputReference <a name="MediaconnectDestinationEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectDestinationEndpointConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putRouterInput">PutRouterInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putStandard">PutStandard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resetRouterInput">ResetRouterInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resetStandard">ResetStandard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRouterInput` <a name="PutRouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putRouterInput"></a>

```go
func PutRouterInput(value MediaconnectDestinationEndpointConfigurationRouterInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putRouterInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInput">MediaconnectDestinationEndpointConfigurationRouterInput</a>

---

##### `PutStandard` <a name="PutStandard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putStandard"></a>

```go
func PutStandard(value MediaconnectDestinationEndpointConfigurationStandard)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.putStandard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandard">MediaconnectDestinationEndpointConfigurationStandard</a>

---

##### `ResetRouterInput` <a name="ResetRouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resetRouterInput"></a>

```go
func ResetRouterInput()
```

##### `ResetStandard` <a name="ResetStandard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.resetStandard"></a>

```go
func ResetStandard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.routerInput">RouterInput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference">MediaconnectDestinationEndpointConfigurationRouterInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.standard">Standard</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference">MediaconnectDestinationEndpointConfigurationStandardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.routerInputInput">RouterInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.standardInput">StandardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RouterInput`<sup>Required</sup> <a name="RouterInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.routerInput"></a>

```go
func RouterInput() MediaconnectDestinationEndpointConfigurationRouterInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference">MediaconnectDestinationEndpointConfigurationRouterInputOutputReference</a>

---

##### `Standard`<sup>Required</sup> <a name="Standard" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.standard"></a>

```go
func Standard() MediaconnectDestinationEndpointConfigurationStandardOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference">MediaconnectDestinationEndpointConfigurationStandardOutputReference</a>

---

##### `RouterInputInput`<sup>Optional</sup> <a name="RouterInputInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.routerInputInput"></a>

```go
func RouterInputInput() interface{}
```

- *Type:* interface{}

---

##### `StandardInput`<sup>Optional</sup> <a name="StandardInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.standardInput"></a>

```go
func StandardInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectDestinationEndpointConfigurationRouterInputOutputReference <a name="MediaconnectDestinationEndpointConfigurationRouterInputOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointConfigurationRouterInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectDestinationEndpointConfigurationRouterInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resetRouterInputArn">ResetRouterInputArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRouterInputArn` <a name="ResetRouterInputArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resetRouterInputArn"></a>

```go
func ResetRouterInputArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.routerInputArnInput">RouterInputArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.routerInputArn">RouterInputArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RouterInputArnInput`<sup>Optional</sup> <a name="RouterInputArnInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.routerInputArnInput"></a>

```go
func RouterInputArnInput() *string
```

- *Type:* *string

---

##### `RouterInputArn`<sup>Required</sup> <a name="RouterInputArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.routerInputArn"></a>

```go
func RouterInputArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putPublic">PutPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putVpc">PutVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resetPublic">ResetPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resetVpc">ResetVpc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublic` <a name="PutPublic" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putPublic"></a>

```go
func PutPublic(value MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putPublic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a>

---

##### `PutVpc` <a name="PutVpc" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putVpc"></a>

```go
func PutVpc(value MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a>

---

##### `ResetPublic` <a name="ResetPublic" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resetPublic"></a>

```go
func ResetPublic()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resetVpc"></a>

```go
func ResetVpc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.public">Public</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.publicInput">PublicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.vpcInput">VpcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Public`<sup>Required</sup> <a name="Public" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.public"></a>

```go
func Public() MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference</a>

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.vpc"></a>

```go
func Vpc() MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference</a>

---

##### `PublicInput`<sup>Optional</sup> <a name="PublicInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.publicInput"></a>

```go
func PublicInput() interface{}
```

- *Type:* interface{}

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.vpcInput"></a>

```go
func VpcInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.get"></a>

```go
func Get(index *f64) MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resetCidr"></a>

```go
func ResetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.cidrInput">CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.cidrInput"></a>

```go
func CidrInput() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.putDestinationAllowRules">PutDestinationAllowRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resetDestinationAllowRules">ResetDestinationAllowRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationAllowRules` <a name="PutDestinationAllowRules" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.putDestinationAllowRules"></a>

```go
func PutDestinationAllowRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.putDestinationAllowRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestinationAllowRules` <a name="ResetDestinationAllowRules" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resetDestinationAllowRules"></a>

```go
func ResetDestinationAllowRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.destinationAllowRules">DestinationAllowRules</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.destinationAllowRulesInput">DestinationAllowRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationAllowRules`<sup>Required</sup> <a name="DestinationAllowRules" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.destinationAllowRules"></a>

```go
func DestinationAllowRules() MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList</a>

---

##### `DestinationAllowRulesInput`<sup>Optional</sup> <a name="DestinationAllowRulesInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.destinationAllowRulesInput"></a>

```go
func DestinationAllowRulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectDestinationEndpointConfigurationStandardOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointConfigurationStandardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectDestinationEndpointConfigurationStandardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putDestinationNetworkingConfiguration">PutDestinationNetworkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putProtocolConfiguration">PutProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetDestinationNetworkingConfiguration">ResetDestinationNetworkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetDestinationNetworkingType">ResetDestinationNetworkingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetProtocolConfiguration">ResetProtocolConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationNetworkingConfiguration` <a name="PutDestinationNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putDestinationNetworkingConfiguration"></a>

```go
func PutDestinationNetworkingConfiguration(value MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putDestinationNetworkingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a>

---

##### `PutProtocolConfiguration` <a name="PutProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putProtocolConfiguration"></a>

```go
func PutProtocolConfiguration(value MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.putProtocolConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">MediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a>

---

##### `ResetDestinationNetworkingConfiguration` <a name="ResetDestinationNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetDestinationNetworkingConfiguration"></a>

```go
func ResetDestinationNetworkingConfiguration()
```

##### `ResetDestinationNetworkingType` <a name="ResetDestinationNetworkingType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetDestinationNetworkingType"></a>

```go
func ResetDestinationNetworkingType()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetProtocolConfiguration` <a name="ResetProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.resetProtocolConfiguration"></a>

```go
func ResetProtocolConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingConfiguration">DestinationNetworkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolConfiguration">ProtocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingConfigurationInput">DestinationNetworkingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingTypeInput">DestinationNetworkingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolConfigurationInput">ProtocolConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingType">DestinationNetworkingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationNetworkingConfiguration`<sup>Required</sup> <a name="DestinationNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingConfiguration"></a>

```go
func DestinationNetworkingConfiguration() MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference</a>

---

##### `ProtocolConfiguration`<sup>Required</sup> <a name="ProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolConfiguration"></a>

```go
func ProtocolConfiguration() MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference</a>

---

##### `DestinationNetworkingConfigurationInput`<sup>Optional</sup> <a name="DestinationNetworkingConfigurationInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingConfigurationInput"></a>

```go
func DestinationNetworkingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationNetworkingTypeInput`<sup>Optional</sup> <a name="DestinationNetworkingTypeInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingTypeInput"></a>

```go
func DestinationNetworkingTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtocolConfigurationInput`<sup>Optional</sup> <a name="ProtocolConfigurationInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolConfigurationInput"></a>

```go
func ProtocolConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `DestinationNetworkingType`<sup>Required</sup> <a name="DestinationNetworkingType" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingType"></a>

```go
func DestinationNetworkingType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRist">PutRist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRtp">PutRtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller">PutSrtCaller</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtListener">PutSrtListener</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetRist">ResetRist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetRtp">ResetRtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetSrtCaller">ResetSrtCaller</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetSrtListener">ResetSrtListener</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRist` <a name="PutRist" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRist"></a>

```go
func PutRist(value MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRist.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a>

---

##### `PutRtp` <a name="PutRtp" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRtp"></a>

```go
func PutRtp(value MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putRtp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a>

---

##### `PutSrtCaller` <a name="PutSrtCaller" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller"></a>

```go
func PutSrtCaller(value MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

---

##### `PutSrtListener` <a name="PutSrtListener" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtListener"></a>

```go
func PutSrtListener(value MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtListener.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

---

##### `ResetRist` <a name="ResetRist" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetRist"></a>

```go
func ResetRist()
```

##### `ResetRtp` <a name="ResetRtp" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetRtp"></a>

```go
func ResetRtp()
```

##### `ResetSrtCaller` <a name="ResetSrtCaller" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetSrtCaller"></a>

```go
func ResetSrtCaller()
```

##### `ResetSrtListener` <a name="ResetSrtListener" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resetSrtListener"></a>

```go
func ResetSrtListener()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rist">Rist</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtp">Rtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller">SrtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListener">SrtListener</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.ristInput">RistInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtpInput">RtpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCallerInput">SrtCallerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListenerInput">SrtListenerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rist`<sup>Required</sup> <a name="Rist" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rist"></a>

```go
func Rist() MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference</a>

---

##### `Rtp`<sup>Required</sup> <a name="Rtp" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtp"></a>

```go
func Rtp() MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference</a>

---

##### `SrtCaller`<sup>Required</sup> <a name="SrtCaller" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller"></a>

```go
func SrtCaller() MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a>

---

##### `SrtListener`<sup>Required</sup> <a name="SrtListener" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListener"></a>

```go
func SrtListener() MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a>

---

##### `RistInput`<sup>Optional</sup> <a name="RistInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.ristInput"></a>

```go
func RistInput() interface{}
```

- *Type:* interface{}

---

##### `RtpInput`<sup>Optional</sup> <a name="RtpInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtpInput"></a>

```go
func RtpInput() interface{}
```

- *Type:* interface{}

---

##### `SrtCallerInput`<sup>Optional</sup> <a name="SrtCallerInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCallerInput"></a>

```go
func SrtCallerInput() interface{}
```

- *Type:* interface{}

---

##### `SrtListenerInput`<sup>Optional</sup> <a name="SrtListenerInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListenerInput"></a>

```go
func SrtListenerInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationAddress">ResetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationIngestPort">ResetDestinationIngestPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationAddress` <a name="ResetDestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationAddress"></a>

```go
func ResetDestinationAddress()
```

##### `ResetDestinationIngestPort` <a name="ResetDestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationIngestPort"></a>

```go
func ResetDestinationIngestPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddressInput">DestinationAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPortInput">DestinationIngestPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationAddressInput`<sup>Optional</sup> <a name="DestinationAddressInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddressInput"></a>

```go
func DestinationAddressInput() *string
```

- *Type:* *string

---

##### `DestinationIngestPortInput`<sup>Optional</sup> <a name="DestinationIngestPortInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPortInput"></a>

```go
func DestinationIngestPortInput() *f64
```

- *Type:* *f64

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress"></a>

```go
func DestinationAddress() *string
```

- *Type:* *string

---

##### `DestinationIngestPort`<sup>Required</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPort"></a>

```go
func DestinationIngestPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationAddress">ResetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationIngestPort">ResetDestinationIngestPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetForwardErrorCorrectionState">ResetForwardErrorCorrectionState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationAddress` <a name="ResetDestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationAddress"></a>

```go
func ResetDestinationAddress()
```

##### `ResetDestinationIngestPort` <a name="ResetDestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationIngestPort"></a>

```go
func ResetDestinationIngestPort()
```

##### `ResetForwardErrorCorrectionState` <a name="ResetForwardErrorCorrectionState" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetForwardErrorCorrectionState"></a>

```go
func ResetForwardErrorCorrectionState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddressInput">DestinationAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPortInput">DestinationIngestPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionStateInput">ForwardErrorCorrectionStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionState">ForwardErrorCorrectionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationAddressInput`<sup>Optional</sup> <a name="DestinationAddressInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddressInput"></a>

```go
func DestinationAddressInput() *string
```

- *Type:* *string

---

##### `DestinationIngestPortInput`<sup>Optional</sup> <a name="DestinationIngestPortInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPortInput"></a>

```go
func DestinationIngestPortInput() *f64
```

- *Type:* *f64

---

##### `ForwardErrorCorrectionStateInput`<sup>Optional</sup> <a name="ForwardErrorCorrectionStateInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionStateInput"></a>

```go
func ForwardErrorCorrectionStateInput() *string
```

- *Type:* *string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress"></a>

```go
func DestinationAddress() *string
```

- *Type:* *string

---

##### `DestinationIngestPort`<sup>Required</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPort"></a>

```go
func DestinationIngestPort() *f64
```

- *Type:* *f64

---

##### `ForwardErrorCorrectionState`<sup>Required</sup> <a name="ForwardErrorCorrectionState" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionState"></a>

```go
func ForwardErrorCorrectionState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionPassphrase">PutEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetEncryptionPassphrase">ResetEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetMinimumLatencyMilliseconds">ResetMinimumLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetSourceListenerPort">ResetSourceListenerPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionPassphrase` <a name="PutEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionPassphrase"></a>

```go
func PutEncryptionPassphrase(value MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionPassphrase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

---

##### `ResetEncryptionPassphrase` <a name="ResetEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetEncryptionPassphrase"></a>

```go
func ResetEncryptionPassphrase()
```

##### `ResetMinimumLatencyMilliseconds` <a name="ResetMinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetMinimumLatencyMilliseconds"></a>

```go
func ResetMinimumLatencyMilliseconds()
```

##### `ResetSourceListenerPort` <a name="ResetSourceListenerPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetSourceListenerPort"></a>

```go
func ResetSourceListenerPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphrase">EncryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphraseInput">EncryptionPassphraseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMillisecondsInput">MinimumLatencyMillisecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceListenerPortInput">SourceListenerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceListenerPort">SourceListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionPassphrase`<sup>Required</sup> <a name="EncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphrase"></a>

```go
func EncryptionPassphrase() MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference</a>

---

##### `EncryptionPassphraseInput`<sup>Optional</sup> <a name="EncryptionPassphraseInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphraseInput"></a>

```go
func EncryptionPassphraseInput() interface{}
```

- *Type:* interface{}

---

##### `MinimumLatencyMillisecondsInput`<sup>Optional</sup> <a name="MinimumLatencyMillisecondsInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMillisecondsInput"></a>

```go
func MinimumLatencyMillisecondsInput() *f64
```

- *Type:* *f64

---

##### `SourceListenerPortInput`<sup>Optional</sup> <a name="SourceListenerPortInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceListenerPortInput"></a>

```go
func SourceListenerPortInput() *f64
```

- *Type:* *f64

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds"></a>

```go
func MinimumLatencyMilliseconds() *f64
```

- *Type:* *f64

---

##### `SourceListenerPort`<sup>Required</sup> <a name="SourceListenerPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceListenerPort"></a>

```go
func SourceListenerPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference <a name="MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionPassphrase">PutEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetDestinationAddress">ResetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetDestinationIngestPort">ResetDestinationIngestPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetEncryptionPassphrase">ResetEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetMinimumLatencyMilliseconds">ResetMinimumLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetStreamId">ResetStreamId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionPassphrase` <a name="PutEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionPassphrase"></a>

```go
func PutEncryptionPassphrase(value MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionPassphrase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

---

##### `ResetDestinationAddress` <a name="ResetDestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetDestinationAddress"></a>

```go
func ResetDestinationAddress()
```

##### `ResetDestinationIngestPort` <a name="ResetDestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetDestinationIngestPort"></a>

```go
func ResetDestinationIngestPort()
```

##### `ResetEncryptionPassphrase` <a name="ResetEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetEncryptionPassphrase"></a>

```go
func ResetEncryptionPassphrase()
```

##### `ResetMinimumLatencyMilliseconds` <a name="ResetMinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetMinimumLatencyMilliseconds"></a>

```go
func ResetMinimumLatencyMilliseconds()
```

##### `ResetStreamId` <a name="ResetStreamId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetStreamId"></a>

```go
func ResetStreamId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphrase">EncryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationAddressInput">DestinationAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationIngestPortInput">DestinationIngestPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphraseInput">EncryptionPassphraseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMillisecondsInput">MinimumLatencyMillisecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamIdInput">StreamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionPassphrase`<sup>Required</sup> <a name="EncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphrase"></a>

```go
func EncryptionPassphrase() MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference">MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference</a>

---

##### `DestinationAddressInput`<sup>Optional</sup> <a name="DestinationAddressInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationAddressInput"></a>

```go
func DestinationAddressInput() *string
```

- *Type:* *string

---

##### `DestinationIngestPortInput`<sup>Optional</sup> <a name="DestinationIngestPortInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationIngestPortInput"></a>

```go
func DestinationIngestPortInput() *f64
```

- *Type:* *f64

---

##### `EncryptionPassphraseInput`<sup>Optional</sup> <a name="EncryptionPassphraseInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphraseInput"></a>

```go
func EncryptionPassphraseInput() interface{}
```

- *Type:* interface{}

---

##### `MinimumLatencyMillisecondsInput`<sup>Optional</sup> <a name="MinimumLatencyMillisecondsInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMillisecondsInput"></a>

```go
func MinimumLatencyMillisecondsInput() *f64
```

- *Type:* *f64

---

##### `StreamIdInput`<sup>Optional</sup> <a name="StreamIdInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamIdInput"></a>

```go
func StreamIdInput() *string
```

- *Type:* *string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationAddress"></a>

```go
func DestinationAddress() *string
```

- *Type:* *string

---

##### `DestinationIngestPort`<sup>Required</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationIngestPort"></a>

```go
func DestinationIngestPort() *f64
```

- *Type:* *f64

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds"></a>

```go
func MinimumLatencyMilliseconds() *f64
```

- *Type:* *f64

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectDestinationEndpointTagsList <a name="MediaconnectDestinationEndpointTagsList" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaconnectDestinationEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.get"></a>

```go
func Get(index *f64) MediaconnectDestinationEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectDestinationEndpointTagsOutputReference <a name="MediaconnectDestinationEndpointTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mediaconnectdestinationendpoint"

mediaconnectdestinationendpoint.NewMediaconnectDestinationEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaconnectDestinationEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectDestinationEndpoint.MediaconnectDestinationEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



