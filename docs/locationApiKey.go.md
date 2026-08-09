# `locationApiKey` Submodule <a name="`locationApiKey` Submodule" id="@cdktn/provider-awscc.locationApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocationApiKey <a name="LocationApiKey" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key awscc_location_api_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationapikey"

locationapikey.NewLocationApiKey(scope Construct, id *string, config LocationApiKeyConfig) LocationApiKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig">LocationApiKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig">LocationApiKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.putRestrictions">PutRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetExpireTime">ResetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetForceUpdate">ResetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetNoExpiry">ResetNoExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRestrictions` <a name="PutRestrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putRestrictions"></a>

```go
func PutRestrictions(value LocationApiKeyRestrictions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExpireTime` <a name="ResetExpireTime" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetExpireTime"></a>

```go
func ResetExpireTime()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetForceDelete"></a>

```go
func ResetForceDelete()
```

##### `ResetForceUpdate` <a name="ResetForceUpdate" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetForceUpdate"></a>

```go
func ResetForceUpdate()
```

##### `ResetNoExpiry` <a name="ResetNoExpiry" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetNoExpiry"></a>

```go
func ResetNoExpiry()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LocationApiKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationapikey"

locationapikey.LocationApiKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationapikey"

locationapikey.LocationApiKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationapikey"

locationapikey.LocationApiKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationapikey"

locationapikey.LocationApiKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LocationApiKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LocationApiKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LocationApiKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LocationApiKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyArn">KeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference">LocationApiKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList">LocationApiKeyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.expireTimeInput">ExpireTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceUpdateInput">ForceUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.noExpiryInput">NoExpiryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.restrictionsInput">RestrictionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceUpdate">ForceUpdate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.noExpiry">NoExpiry</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyArn"></a>

```go
func KeyArn() *string
```

- *Type:* *string

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.restrictions"></a>

```go
func Restrictions() LocationApiKeyRestrictionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference">LocationApiKeyRestrictionsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tags"></a>

```go
func Tags() LocationApiKeyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList">LocationApiKeyTagsList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.expireTimeInput"></a>

```go
func ExpireTimeInput() *string
```

- *Type:* *string

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceDeleteInput"></a>

```go
func ForceDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `ForceUpdateInput`<sup>Optional</sup> <a name="ForceUpdateInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceUpdateInput"></a>

```go
func ForceUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `NoExpiryInput`<sup>Optional</sup> <a name="NoExpiryInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.noExpiryInput"></a>

```go
func NoExpiryInput() interface{}
```

- *Type:* interface{}

---

##### `RestrictionsInput`<sup>Optional</sup> <a name="RestrictionsInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.restrictionsInput"></a>

```go
func RestrictionsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceDelete"></a>

```go
func ForceDelete() interface{}
```

- *Type:* interface{}

---

##### `ForceUpdate`<sup>Required</sup> <a name="ForceUpdate" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceUpdate"></a>

```go
func ForceUpdate() interface{}
```

- *Type:* interface{}

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `NoExpiry`<sup>Required</sup> <a name="NoExpiry" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.noExpiry"></a>

```go
func NoExpiry() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LocationApiKeyConfig <a name="LocationApiKeyConfig" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationapikey"

&locationapikey.LocationApiKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	KeyName: *string,
	Restrictions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.locationApiKey.LocationApiKeyRestrictions,
	Description: *string,
	ExpireTime: *string,
	ForceDelete: interface{},
	ForceUpdate: interface{},
	NoExpiry: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.keyName">KeyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#key_name LocationApiKey#key_name}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#restrictions LocationApiKey#restrictions}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#description LocationApiKey#description}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.expireTime">ExpireTime</a></code> | <code>*string</code> | The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ). |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#force_delete LocationApiKey#force_delete}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forceUpdate">ForceUpdate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#force_update LocationApiKey#force_update}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.noExpiry">NoExpiry</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#no_expiry LocationApiKey#no_expiry}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#key_name LocationApiKey#key_name}.

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.restrictions"></a>

```go
Restrictions LocationApiKeyRestrictions
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#restrictions LocationApiKey#restrictions}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#description LocationApiKey#description}.

---

##### `ExpireTime`<sup>Optional</sup> <a name="ExpireTime" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.expireTime"></a>

```go
ExpireTime *string
```

- *Type:* *string

The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#expire_time LocationApiKey#expire_time}

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forceDelete"></a>

```go
ForceDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#force_delete LocationApiKey#force_delete}.

---

##### `ForceUpdate`<sup>Optional</sup> <a name="ForceUpdate" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forceUpdate"></a>

```go
ForceUpdate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#force_update LocationApiKey#force_update}.

---

##### `NoExpiry`<sup>Optional</sup> <a name="NoExpiry" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.noExpiry"></a>

```go
NoExpiry interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#no_expiry LocationApiKey#no_expiry}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#tags LocationApiKey#tags}

---

### LocationApiKeyRestrictions <a name="LocationApiKeyRestrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationapikey"

&locationapikey.LocationApiKeyRestrictions {
	AllowActions: *[]*string,
	AllowResources: *[]*string,
	AllowAndroidApps: interface{},
	AllowAppleApps: interface{},
	AllowReferers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowActions">AllowActions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#allow_actions LocationApiKey#allow_actions}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowResources">AllowResources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#allow_resources LocationApiKey#allow_resources}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowAndroidApps">AllowAndroidApps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#allow_android_apps LocationApiKey#allow_android_apps}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowAppleApps">AllowAppleApps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#allow_apple_apps LocationApiKey#allow_apple_apps}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowReferers">AllowReferers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#allow_referers LocationApiKey#allow_referers}. |

---

##### `AllowActions`<sup>Required</sup> <a name="AllowActions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowActions"></a>

```go
AllowActions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#allow_actions LocationApiKey#allow_actions}.

---

##### `AllowResources`<sup>Required</sup> <a name="AllowResources" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowResources"></a>

```go
AllowResources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#allow_resources LocationApiKey#allow_resources}.

---

##### `AllowAndroidApps`<sup>Optional</sup> <a name="AllowAndroidApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowAndroidApps"></a>

```go
AllowAndroidApps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#allow_android_apps LocationApiKey#allow_android_apps}.

---

##### `AllowAppleApps`<sup>Optional</sup> <a name="AllowAppleApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowAppleApps"></a>

```go
AllowAppleApps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#allow_apple_apps LocationApiKey#allow_apple_apps}.

---

##### `AllowReferers`<sup>Optional</sup> <a name="AllowReferers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowReferers"></a>

```go
AllowReferers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#allow_referers LocationApiKey#allow_referers}.

---

### LocationApiKeyRestrictionsAllowAndroidApps <a name="LocationApiKeyRestrictionsAllowAndroidApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationapikey"

&locationapikey.LocationApiKeyRestrictionsAllowAndroidApps {
	CertificateFingerprint: *string,
	Package: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.property.certificateFingerprint">CertificateFingerprint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#certificate_fingerprint LocationApiKey#certificate_fingerprint}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.property.package">Package</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#package LocationApiKey#package}. |

---

##### `CertificateFingerprint`<sup>Optional</sup> <a name="CertificateFingerprint" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.property.certificateFingerprint"></a>

```go
CertificateFingerprint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#certificate_fingerprint LocationApiKey#certificate_fingerprint}.

---

##### `Package`<sup>Optional</sup> <a name="Package" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.property.package"></a>

```go
Package *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#package LocationApiKey#package}.

---

### LocationApiKeyRestrictionsAllowAppleApps <a name="LocationApiKeyRestrictionsAllowAppleApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationapikey"

&locationapikey.LocationApiKeyRestrictionsAllowAppleApps {
	BundleId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps.property.bundleId">BundleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#bundle_id LocationApiKey#bundle_id}. |

---

##### `BundleId`<sup>Optional</sup> <a name="BundleId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps.property.bundleId"></a>

```go
BundleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#bundle_id LocationApiKey#bundle_id}.

---

### LocationApiKeyTags <a name="LocationApiKeyTags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationapikey"

&locationapikey.LocationApiKeyTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#key LocationApiKey#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_api_key#value LocationApiKey#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LocationApiKeyRestrictionsAllowAndroidAppsList <a name="LocationApiKeyRestrictionsAllowAndroidAppsList" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationapikey"

locationapikey.NewLocationApiKeyRestrictionsAllowAndroidAppsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LocationApiKeyRestrictionsAllowAndroidAppsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.get"></a>

```go
func Get(index *f64) LocationApiKeyRestrictionsAllowAndroidAppsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LocationApiKeyRestrictionsAllowAndroidAppsOutputReference <a name="LocationApiKeyRestrictionsAllowAndroidAppsOutputReference" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationapikey"

locationapikey.NewLocationApiKeyRestrictionsAllowAndroidAppsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LocationApiKeyRestrictionsAllowAndroidAppsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resetCertificateFingerprint">ResetCertificateFingerprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resetPackage">ResetPackage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateFingerprint` <a name="ResetCertificateFingerprint" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resetCertificateFingerprint"></a>

```go
func ResetCertificateFingerprint()
```

##### `ResetPackage` <a name="ResetPackage" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resetPackage"></a>

```go
func ResetPackage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprintInput">CertificateFingerprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.packageInput">PackageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprint">CertificateFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.package">Package</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateFingerprintInput`<sup>Optional</sup> <a name="CertificateFingerprintInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprintInput"></a>

```go
func CertificateFingerprintInput() *string
```

- *Type:* *string

---

##### `PackageInput`<sup>Optional</sup> <a name="PackageInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.packageInput"></a>

```go
func PackageInput() *string
```

- *Type:* *string

---

##### `CertificateFingerprint`<sup>Required</sup> <a name="CertificateFingerprint" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprint"></a>

```go
func CertificateFingerprint() *string
```

- *Type:* *string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.package"></a>

```go
func Package() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LocationApiKeyRestrictionsAllowAppleAppsList <a name="LocationApiKeyRestrictionsAllowAppleAppsList" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationapikey"

locationapikey.NewLocationApiKeyRestrictionsAllowAppleAppsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LocationApiKeyRestrictionsAllowAppleAppsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.get"></a>

```go
func Get(index *f64) LocationApiKeyRestrictionsAllowAppleAppsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LocationApiKeyRestrictionsAllowAppleAppsOutputReference <a name="LocationApiKeyRestrictionsAllowAppleAppsOutputReference" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationapikey"

locationapikey.NewLocationApiKeyRestrictionsAllowAppleAppsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LocationApiKeyRestrictionsAllowAppleAppsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resetBundleId">ResetBundleId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBundleId` <a name="ResetBundleId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resetBundleId"></a>

```go
func ResetBundleId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleIdInput">BundleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleId">BundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleIdInput"></a>

```go
func BundleIdInput() *string
```

- *Type:* *string

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleId"></a>

```go
func BundleId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LocationApiKeyRestrictionsOutputReference <a name="LocationApiKeyRestrictionsOutputReference" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationapikey"

locationapikey.NewLocationApiKeyRestrictionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LocationApiKeyRestrictionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAndroidApps">PutAllowAndroidApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAppleApps">PutAllowAppleApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowAndroidApps">ResetAllowAndroidApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowAppleApps">ResetAllowAppleApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowReferers">ResetAllowReferers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowAndroidApps` <a name="PutAllowAndroidApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAndroidApps"></a>

```go
func PutAllowAndroidApps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAndroidApps.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAllowAppleApps` <a name="PutAllowAppleApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAppleApps"></a>

```go
func PutAllowAppleApps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAppleApps.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowAndroidApps` <a name="ResetAllowAndroidApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowAndroidApps"></a>

```go
func ResetAllowAndroidApps()
```

##### `ResetAllowAppleApps` <a name="ResetAllowAppleApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowAppleApps"></a>

```go
func ResetAllowAppleApps()
```

##### `ResetAllowReferers` <a name="ResetAllowReferers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowReferers"></a>

```go
func ResetAllowReferers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAndroidApps">AllowAndroidApps</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList">LocationApiKeyRestrictionsAllowAndroidAppsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAppleApps">AllowAppleApps</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList">LocationApiKeyRestrictionsAllowAppleAppsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowActionsInput">AllowActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAndroidAppsInput">AllowAndroidAppsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAppleAppsInput">AllowAppleAppsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowReferersInput">AllowReferersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowResourcesInput">AllowResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowActions">AllowActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowReferers">AllowReferers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowResources">AllowResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowAndroidApps`<sup>Required</sup> <a name="AllowAndroidApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAndroidApps"></a>

```go
func AllowAndroidApps() LocationApiKeyRestrictionsAllowAndroidAppsList
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList">LocationApiKeyRestrictionsAllowAndroidAppsList</a>

---

##### `AllowAppleApps`<sup>Required</sup> <a name="AllowAppleApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAppleApps"></a>

```go
func AllowAppleApps() LocationApiKeyRestrictionsAllowAppleAppsList
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList">LocationApiKeyRestrictionsAllowAppleAppsList</a>

---

##### `AllowActionsInput`<sup>Optional</sup> <a name="AllowActionsInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowActionsInput"></a>

```go
func AllowActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowAndroidAppsInput`<sup>Optional</sup> <a name="AllowAndroidAppsInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAndroidAppsInput"></a>

```go
func AllowAndroidAppsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowAppleAppsInput`<sup>Optional</sup> <a name="AllowAppleAppsInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAppleAppsInput"></a>

```go
func AllowAppleAppsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowReferersInput`<sup>Optional</sup> <a name="AllowReferersInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowReferersInput"></a>

```go
func AllowReferersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowResourcesInput`<sup>Optional</sup> <a name="AllowResourcesInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowResourcesInput"></a>

```go
func AllowResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowActions`<sup>Required</sup> <a name="AllowActions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowActions"></a>

```go
func AllowActions() *[]*string
```

- *Type:* *[]*string

---

##### `AllowReferers`<sup>Required</sup> <a name="AllowReferers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowReferers"></a>

```go
func AllowReferers() *[]*string
```

- *Type:* *[]*string

---

##### `AllowResources`<sup>Required</sup> <a name="AllowResources" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowResources"></a>

```go
func AllowResources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LocationApiKeyTagsList <a name="LocationApiKeyTagsList" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationapikey"

locationapikey.NewLocationApiKeyTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LocationApiKeyTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.get"></a>

```go
func Get(index *f64) LocationApiKeyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LocationApiKeyTagsOutputReference <a name="LocationApiKeyTagsOutputReference" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationapikey"

locationapikey.NewLocationApiKeyTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LocationApiKeyTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



