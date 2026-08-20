# `appsyncApi` Submodule <a name="`appsyncApi` Submodule" id="@cdktn/provider-awscc.appsyncApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncApi <a name="AppsyncApi" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api awscc_appsync_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.NewAppsyncApi(scope Construct, id *string, config AppsyncApiConfig) AppsyncApi
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig">AppsyncApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig">AppsyncApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.putEventConfig">PutEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetEventConfig">ResetEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetOwnerContact">ResetOwnerContact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventConfig` <a name="PutEventConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putEventConfig"></a>

```go
func PutEventConfig(value AppsyncApiEventConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putEventConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEventConfig` <a name="ResetEventConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetEventConfig"></a>

```go
func ResetEventConfig()
```

##### `ResetOwnerContact` <a name="ResetOwnerContact" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetOwnerContact"></a>

```go
func ResetOwnerContact()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncApi resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.AppsyncApi_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.AppsyncApi_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.AppsyncApi_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.AppsyncApi_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AppsyncApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppsyncApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppsyncApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.apiArn">ApiArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.dns">Dns</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference">AppsyncApiDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.eventConfig">EventConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference">AppsyncApiEventConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList">AppsyncApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.eventConfigInput">EventConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.ownerContactInput">OwnerContactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.ownerContact">OwnerContact</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiArn`<sup>Required</sup> <a name="ApiArn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.apiArn"></a>

```go
func ApiArn() *string
```

- *Type:* *string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.dns"></a>

```go
func Dns() AppsyncApiDnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference">AppsyncApiDnsOutputReference</a>

---

##### `EventConfig`<sup>Required</sup> <a name="EventConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.eventConfig"></a>

```go
func EventConfig() AppsyncApiEventConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference">AppsyncApiEventConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tags"></a>

```go
func Tags() AppsyncApiTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList">AppsyncApiTagsList</a>

---

##### `EventConfigInput`<sup>Optional</sup> <a name="EventConfigInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.eventConfigInput"></a>

```go
func EventConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerContactInput`<sup>Optional</sup> <a name="OwnerContactInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.ownerContactInput"></a>

```go
func OwnerContactInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OwnerContact`<sup>Required</sup> <a name="OwnerContact" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.ownerContact"></a>

```go
func OwnerContact() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncApiConfig <a name="AppsyncApiConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

&appsyncapi.AppsyncApiConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	EventConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appsyncApi.AppsyncApiEventConfig,
	OwnerContact: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.name">Name</a></code> | <code>*string</code> | The name of the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.eventConfig">EventConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a></code> | The configuration for an Event Api. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.ownerContact">OwnerContact</a></code> | <code>*string</code> | The owner contact information for an API resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An arbitrary set of tags (key-value pairs) for this AppSync API. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#name AppsyncApi#name}

---

##### `EventConfig`<sup>Optional</sup> <a name="EventConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.eventConfig"></a>

```go
EventConfig AppsyncApiEventConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>

The configuration for an Event Api.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#event_config AppsyncApi#event_config}

---

##### `OwnerContact`<sup>Optional</sup> <a name="OwnerContact" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.ownerContact"></a>

```go
OwnerContact *string
```

- *Type:* *string

The owner contact information for an API resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#owner_contact AppsyncApi#owner_contact}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An arbitrary set of tags (key-value pairs) for this AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#tags AppsyncApi#tags}

---

### AppsyncApiDns <a name="AppsyncApiDns" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

&appsyncapi.AppsyncApiDns {

}
```


### AppsyncApiEventConfig <a name="AppsyncApiEventConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

&appsyncapi.AppsyncApiEventConfig {
	AuthProviders: interface{},
	ConnectionAuthModes: interface{},
	DefaultPublishAuthModes: interface{},
	DefaultSubscribeAuthModes: interface{},
	LogConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appsyncApi.AppsyncApiEventConfigLogConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.authProviders">AuthProviders</a></code> | <code>interface{}</code> | A list of auth providers for the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.connectionAuthModes">ConnectionAuthModes</a></code> | <code>interface{}</code> | A list of auth modes for the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.defaultPublishAuthModes">DefaultPublishAuthModes</a></code> | <code>interface{}</code> | A list of auth modes for the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.defaultSubscribeAuthModes">DefaultSubscribeAuthModes</a></code> | <code>interface{}</code> | A list of auth modes for the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a></code> | The log config for the AppSync API. |

---

##### `AuthProviders`<sup>Optional</sup> <a name="AuthProviders" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.authProviders"></a>

```go
AuthProviders interface{}
```

- *Type:* interface{}

A list of auth providers for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_providers AppsyncApi#auth_providers}

---

##### `ConnectionAuthModes`<sup>Optional</sup> <a name="ConnectionAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.connectionAuthModes"></a>

```go
ConnectionAuthModes interface{}
```

- *Type:* interface{}

A list of auth modes for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#connection_auth_modes AppsyncApi#connection_auth_modes}

---

##### `DefaultPublishAuthModes`<sup>Optional</sup> <a name="DefaultPublishAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.defaultPublishAuthModes"></a>

```go
DefaultPublishAuthModes interface{}
```

- *Type:* interface{}

A list of auth modes for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#default_publish_auth_modes AppsyncApi#default_publish_auth_modes}

---

##### `DefaultSubscribeAuthModes`<sup>Optional</sup> <a name="DefaultSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.defaultSubscribeAuthModes"></a>

```go
DefaultSubscribeAuthModes interface{}
```

- *Type:* interface{}

A list of auth modes for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#default_subscribe_auth_modes AppsyncApi#default_subscribe_auth_modes}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.logConfig"></a>

```go
LogConfig AppsyncApiEventConfigLogConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>

The log config for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#log_config AppsyncApi#log_config}

---

### AppsyncApiEventConfigAuthProviders <a name="AppsyncApiEventConfigAuthProviders" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

&appsyncapi.AppsyncApiEventConfigAuthProviders {
	AuthType: *string,
	CognitoConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig,
	LambdaAuthorizerConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig,
	OpenIdConnectConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.authType">AuthType</a></code> | <code>*string</code> | Security configuration for your AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.cognitoConfig">CognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a></code> | Optional authorization configuration for using Amazon Cognito user pools with your API endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a></code> | A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.openIdConnectConfig">OpenIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a></code> | The OpenID Connect configuration. |

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}

---

##### `CognitoConfig`<sup>Optional</sup> <a name="CognitoConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.cognitoConfig"></a>

```go
CognitoConfig AppsyncApiEventConfigAuthProvidersCognitoConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a>

Optional authorization configuration for using Amazon Cognito user pools with your API endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#cognito_config AppsyncApi#cognito_config}

---

##### `LambdaAuthorizerConfig`<sup>Optional</sup> <a name="LambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.lambdaAuthorizerConfig"></a>

```go
LambdaAuthorizerConfig AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a>

A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode.

Be aware that an AWS AppSync API may have only one Lambda authorizer configured at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#lambda_authorizer_config AppsyncApi#lambda_authorizer_config}

---

##### `OpenIdConnectConfig`<sup>Optional</sup> <a name="OpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.openIdConnectConfig"></a>

```go
OpenIdConnectConfig AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a>

The OpenID Connect configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#open_id_connect_config AppsyncApi#open_id_connect_config}

---

### AppsyncApiEventConfigAuthProvidersCognitoConfig <a name="AppsyncApiEventConfigAuthProvidersCognitoConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

&appsyncapi.AppsyncApiEventConfigAuthProvidersCognitoConfig {
	AppIdClientRegex: *string,
	AwsRegion: *string,
	UserPoolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#app_id_client_regex AppsyncApi#app_id_client_regex}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#aws_region AppsyncApi#aws_region}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#user_pool_id AppsyncApi#user_pool_id}. |

---

##### `AppIdClientRegex`<sup>Optional</sup> <a name="AppIdClientRegex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.appIdClientRegex"></a>

```go
AppIdClientRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#app_id_client_regex AppsyncApi#app_id_client_regex}.

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.awsRegion"></a>

```go
AwsRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#aws_region AppsyncApi#aws_region}.

---

##### `UserPoolId`<sup>Optional</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.userPoolId"></a>

```go
UserPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#user_pool_id AppsyncApi#user_pool_id}.

---

### AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig <a name="AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

&appsyncapi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig {
	AuthorizerResultTtlInSeconds: *f64,
	AuthorizerUri: *string,
	IdentityValidationExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#authorizer_result_ttl_in_seconds AppsyncApi#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.authorizerUri">AuthorizerUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#authorizer_uri AppsyncApi#authorizer_uri}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#identity_validation_expression AppsyncApi#identity_validation_expression}. |

---

##### `AuthorizerResultTtlInSeconds`<sup>Optional</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```go
AuthorizerResultTtlInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#authorizer_result_ttl_in_seconds AppsyncApi#authorizer_result_ttl_in_seconds}.

---

##### `AuthorizerUri`<sup>Optional</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.authorizerUri"></a>

```go
AuthorizerUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#authorizer_uri AppsyncApi#authorizer_uri}.

---

##### `IdentityValidationExpression`<sup>Optional</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```go
IdentityValidationExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#identity_validation_expression AppsyncApi#identity_validation_expression}.

---

### AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig <a name="AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

&appsyncapi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig {
	AuthTtl: *f64,
	ClientId: *string,
	IatTtl: *f64,
	Issuer: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.authTtl">AuthTtl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_ttl AppsyncApi#auth_ttl}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#client_id AppsyncApi#client_id}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.iatTtl">IatTtl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#iat_ttl AppsyncApi#iat_ttl}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#issuer AppsyncApi#issuer}. |

---

##### `AuthTtl`<sup>Optional</sup> <a name="AuthTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.authTtl"></a>

```go
AuthTtl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_ttl AppsyncApi#auth_ttl}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#client_id AppsyncApi#client_id}.

---

##### `IatTtl`<sup>Optional</sup> <a name="IatTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.iatTtl"></a>

```go
IatTtl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#iat_ttl AppsyncApi#iat_ttl}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#issuer AppsyncApi#issuer}.

---

### AppsyncApiEventConfigConnectionAuthModes <a name="AppsyncApiEventConfigConnectionAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

&appsyncapi.AppsyncApiEventConfigConnectionAuthModes {
	AuthType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes.property.authType">AuthType</a></code> | <code>*string</code> | Security configuration for your AppSync API. |

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}

---

### AppsyncApiEventConfigDefaultPublishAuthModes <a name="AppsyncApiEventConfigDefaultPublishAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

&appsyncapi.AppsyncApiEventConfigDefaultPublishAuthModes {
	AuthType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes.property.authType">AuthType</a></code> | <code>*string</code> | Security configuration for your AppSync API. |

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}

---

### AppsyncApiEventConfigDefaultSubscribeAuthModes <a name="AppsyncApiEventConfigDefaultSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

&appsyncapi.AppsyncApiEventConfigDefaultSubscribeAuthModes {
	AuthType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes.property.authType">AuthType</a></code> | <code>*string</code> | Security configuration for your AppSync API. |

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}

---

### AppsyncApiEventConfigLogConfig <a name="AppsyncApiEventConfigLogConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

&appsyncapi.AppsyncApiEventConfigLogConfig {
	CloudwatchLogsRoleArn: *string,
	LogLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.property.cloudwatchLogsRoleArn">CloudwatchLogsRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#cloudwatch_logs_role_arn AppsyncApi#cloudwatch_logs_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.property.logLevel">LogLevel</a></code> | <code>*string</code> | Logging level for the AppSync API. |

---

##### `CloudwatchLogsRoleArn`<sup>Optional</sup> <a name="CloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.property.cloudwatchLogsRoleArn"></a>

```go
CloudwatchLogsRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#cloudwatch_logs_role_arn AppsyncApi#cloudwatch_logs_role_arn}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

Logging level for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#log_level AppsyncApi#log_level}

---

### AppsyncApiTags <a name="AppsyncApiTags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

&appsyncapi.AppsyncApiTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.property.key">Key</a></code> | <code>*string</code> | A string used to identify this tag. You can specify a maximum of 128 characters for a tag key. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.property.value">Value</a></code> | <code>*string</code> | A string containing the value for this tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

A string used to identify this tag. You can specify a maximum of 128 characters for a tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#key AppsyncApi#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

A string containing the value for this tag.

You can specify a maximum of 256 characters for a tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#value AppsyncApi#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncApiDnsOutputReference <a name="AppsyncApiDnsOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.NewAppsyncApiDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncApiDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.http">Http</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.realtime">Realtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDns">AppsyncApiDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.http"></a>

```go
func Http() *string
```

- *Type:* *string

---

##### `Realtime`<sup>Required</sup> <a name="Realtime" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.realtime"></a>

```go
func Realtime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppsyncApiDns
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDns">AppsyncApiDns</a>

---


### AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference <a name="AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.NewAppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetAppIdClientRegex">ResetAppIdClientRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetUserPoolId">ResetUserPoolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppIdClientRegex` <a name="ResetAppIdClientRegex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetAppIdClientRegex"></a>

```go
func ResetAppIdClientRegex()
```

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetAwsRegion"></a>

```go
func ResetAwsRegion()
```

##### `ResetUserPoolId` <a name="ResetUserPoolId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetUserPoolId"></a>

```go
func ResetUserPoolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.appIdClientRegexInput">AppIdClientRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppIdClientRegexInput`<sup>Optional</sup> <a name="AppIdClientRegexInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.appIdClientRegexInput"></a>

```go
func AppIdClientRegexInput() *string
```

- *Type:* *string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.awsRegionInput"></a>

```go
func AwsRegionInput() *string
```

- *Type:* *string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.userPoolIdInput"></a>

```go
func UserPoolIdInput() *string
```

- *Type:* *string

---

##### `AppIdClientRegex`<sup>Required</sup> <a name="AppIdClientRegex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.appIdClientRegex"></a>

```go
func AppIdClientRegex() *string
```

- *Type:* *string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference <a name="AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.NewAppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">ResetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri">ResetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">ResetIdentityValidationExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizerResultTtlInSeconds` <a name="ResetAuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```go
func ResetAuthorizerResultTtlInSeconds()
```

##### `ResetAuthorizerUri` <a name="ResetAuthorizerUri" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri"></a>

```go
func ResetAuthorizerUri()
```

##### `ResetIdentityValidationExpression` <a name="ResetIdentityValidationExpression" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```go
func ResetIdentityValidationExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">AuthorizerResultTtlInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">AuthorizerUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">IdentityValidationExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri">AuthorizerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="AuthorizerResultTtlInSecondsInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```go
func AuthorizerResultTtlInSecondsInput() *f64
```

- *Type:* *f64

---

##### `AuthorizerUriInput`<sup>Optional</sup> <a name="AuthorizerUriInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```go
func AuthorizerUriInput() *string
```

- *Type:* *string

---

##### `IdentityValidationExpressionInput`<sup>Optional</sup> <a name="IdentityValidationExpressionInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```go
func IdentityValidationExpressionInput() *string
```

- *Type:* *string

---

##### `AuthorizerResultTtlInSeconds`<sup>Required</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```go
func AuthorizerResultTtlInSeconds() *f64
```

- *Type:* *f64

---

##### `AuthorizerUri`<sup>Required</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```go
func AuthorizerUri() *string
```

- *Type:* *string

---

##### `IdentityValidationExpression`<sup>Required</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```go
func IdentityValidationExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncApiEventConfigAuthProvidersList <a name="AppsyncApiEventConfigAuthProvidersList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.NewAppsyncApiEventConfigAuthProvidersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppsyncApiEventConfigAuthProvidersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.get"></a>

```go
func Get(index *f64) AppsyncApiEventConfigAuthProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference <a name="AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.NewAppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetAuthTtl">ResetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetIatTtl">ResetIatTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthTtl` <a name="ResetAuthTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetAuthTtl"></a>

```go
func ResetAuthTtl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetIatTtl` <a name="ResetIatTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetIatTtl"></a>

```go
func ResetIatTtl()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetIssuer"></a>

```go
func ResetIssuer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.authTtlInput">AuthTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput">IatTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.authTtl">AuthTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.iatTtl">IatTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthTtlInput`<sup>Optional</sup> <a name="AuthTtlInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.authTtlInput"></a>

```go
func AuthTtlInput() *f64
```

- *Type:* *f64

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `IatTtlInput`<sup>Optional</sup> <a name="IatTtlInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput"></a>

```go
func IatTtlInput() *f64
```

- *Type:* *f64

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `AuthTtl`<sup>Required</sup> <a name="AuthTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.authTtl"></a>

```go
func AuthTtl() *f64
```

- *Type:* *f64

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `IatTtl`<sup>Required</sup> <a name="IatTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```go
func IatTtl() *f64
```

- *Type:* *f64

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncApiEventConfigAuthProvidersOutputReference <a name="AppsyncApiEventConfigAuthProvidersOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.NewAppsyncApiEventConfigAuthProvidersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppsyncApiEventConfigAuthProvidersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putCognitoConfig">PutCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putLambdaAuthorizerConfig">PutLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putOpenIdConnectConfig">PutOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetCognitoConfig">ResetCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetLambdaAuthorizerConfig">ResetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetOpenIdConnectConfig">ResetOpenIdConnectConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCognitoConfig` <a name="PutCognitoConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putCognitoConfig"></a>

```go
func PutCognitoConfig(value AppsyncApiEventConfigAuthProvidersCognitoConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putCognitoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a>

---

##### `PutLambdaAuthorizerConfig` <a name="PutLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putLambdaAuthorizerConfig"></a>

```go
func PutLambdaAuthorizerConfig(value AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a>

---

##### `PutOpenIdConnectConfig` <a name="PutOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putOpenIdConnectConfig"></a>

```go
func PutOpenIdConnectConfig(value AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putOpenIdConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a>

---

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetCognitoConfig` <a name="ResetCognitoConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetCognitoConfig"></a>

```go
func ResetCognitoConfig()
```

##### `ResetLambdaAuthorizerConfig` <a name="ResetLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetLambdaAuthorizerConfig"></a>

```go
func ResetLambdaAuthorizerConfig()
```

##### `ResetOpenIdConnectConfig` <a name="ResetOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetOpenIdConnectConfig"></a>

```go
func ResetOpenIdConnectConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.cognitoConfig">CognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference">AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.openIdConnectConfig">OpenIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.cognitoConfigInput">CognitoConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.lambdaAuthorizerConfigInput">LambdaAuthorizerConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.openIdConnectConfigInput">OpenIdConnectConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CognitoConfig`<sup>Required</sup> <a name="CognitoConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.cognitoConfig"></a>

```go
func CognitoConfig() AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference">AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference</a>

---

##### `LambdaAuthorizerConfig`<sup>Required</sup> <a name="LambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.lambdaAuthorizerConfig"></a>

```go
func LambdaAuthorizerConfig() AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference</a>

---

##### `OpenIdConnectConfig`<sup>Required</sup> <a name="OpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.openIdConnectConfig"></a>

```go
func OpenIdConnectConfig() AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference</a>

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `CognitoConfigInput`<sup>Optional</sup> <a name="CognitoConfigInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.cognitoConfigInput"></a>

```go
func CognitoConfigInput() interface{}
```

- *Type:* interface{}

---

##### `LambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="LambdaAuthorizerConfigInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.lambdaAuthorizerConfigInput"></a>

```go
func LambdaAuthorizerConfigInput() interface{}
```

- *Type:* interface{}

---

##### `OpenIdConnectConfigInput`<sup>Optional</sup> <a name="OpenIdConnectConfigInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.openIdConnectConfigInput"></a>

```go
func OpenIdConnectConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncApiEventConfigConnectionAuthModesList <a name="AppsyncApiEventConfigConnectionAuthModesList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.NewAppsyncApiEventConfigConnectionAuthModesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppsyncApiEventConfigConnectionAuthModesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.get"></a>

```go
func Get(index *f64) AppsyncApiEventConfigConnectionAuthModesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncApiEventConfigConnectionAuthModesOutputReference <a name="AppsyncApiEventConfigConnectionAuthModesOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.NewAppsyncApiEventConfigConnectionAuthModesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppsyncApiEventConfigConnectionAuthModesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncApiEventConfigDefaultPublishAuthModesList <a name="AppsyncApiEventConfigDefaultPublishAuthModesList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.NewAppsyncApiEventConfigDefaultPublishAuthModesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppsyncApiEventConfigDefaultPublishAuthModesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.get"></a>

```go
func Get(index *f64) AppsyncApiEventConfigDefaultPublishAuthModesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncApiEventConfigDefaultPublishAuthModesOutputReference <a name="AppsyncApiEventConfigDefaultPublishAuthModesOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.NewAppsyncApiEventConfigDefaultPublishAuthModesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppsyncApiEventConfigDefaultPublishAuthModesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncApiEventConfigDefaultSubscribeAuthModesList <a name="AppsyncApiEventConfigDefaultSubscribeAuthModesList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.NewAppsyncApiEventConfigDefaultSubscribeAuthModesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppsyncApiEventConfigDefaultSubscribeAuthModesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.get"></a>

```go
func Get(index *f64) AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference <a name="AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.NewAppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncApiEventConfigLogConfigOutputReference <a name="AppsyncApiEventConfigLogConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.NewAppsyncApiEventConfigLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncApiEventConfigLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resetCloudwatchLogsRoleArn">ResetCloudwatchLogsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudwatchLogsRoleArn` <a name="ResetCloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resetCloudwatchLogsRoleArn"></a>

```go
func ResetCloudwatchLogsRoleArn()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resetLogLevel"></a>

```go
func ResetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArnInput">CloudwatchLogsRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArn">CloudwatchLogsRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogsRoleArnInput`<sup>Optional</sup> <a name="CloudwatchLogsRoleArnInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArnInput"></a>

```go
func CloudwatchLogsRoleArnInput() *string
```

- *Type:* *string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `CloudwatchLogsRoleArn`<sup>Required</sup> <a name="CloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArn"></a>

```go
func CloudwatchLogsRoleArn() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncApiEventConfigOutputReference <a name="AppsyncApiEventConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.NewAppsyncApiEventConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncApiEventConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProviders">PutAuthProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthModes">PutConnectionAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthModes">PutDefaultPublishAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthModes">PutDefaultSubscribeAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetAuthProviders">ResetAuthProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetConnectionAuthModes">ResetConnectionAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultPublishAuthModes">ResetDefaultPublishAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultSubscribeAuthModes">ResetDefaultSubscribeAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetLogConfig">ResetLogConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthProviders` <a name="PutAuthProviders" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProviders"></a>

```go
func PutAuthProviders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProviders.parameter.value"></a>

- *Type:* interface{}

---

##### `PutConnectionAuthModes` <a name="PutConnectionAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthModes"></a>

```go
func PutConnectionAuthModes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthModes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaultPublishAuthModes` <a name="PutDefaultPublishAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthModes"></a>

```go
func PutDefaultPublishAuthModes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthModes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaultSubscribeAuthModes` <a name="PutDefaultSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthModes"></a>

```go
func PutDefaultSubscribeAuthModes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthModes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig"></a>

```go
func PutLogConfig(value AppsyncApiEventConfigLogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>

---

##### `ResetAuthProviders` <a name="ResetAuthProviders" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetAuthProviders"></a>

```go
func ResetAuthProviders()
```

##### `ResetConnectionAuthModes` <a name="ResetConnectionAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetConnectionAuthModes"></a>

```go
func ResetConnectionAuthModes()
```

##### `ResetDefaultPublishAuthModes` <a name="ResetDefaultPublishAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultPublishAuthModes"></a>

```go
func ResetDefaultPublishAuthModes()
```

##### `ResetDefaultSubscribeAuthModes` <a name="ResetDefaultSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultSubscribeAuthModes"></a>

```go
func ResetDefaultSubscribeAuthModes()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetLogConfig"></a>

```go
func ResetLogConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProviders">AuthProviders</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList">AppsyncApiEventConfigAuthProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModes">ConnectionAuthModes</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList">AppsyncApiEventConfigConnectionAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModes">DefaultPublishAuthModes</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList">AppsyncApiEventConfigDefaultPublishAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModes">DefaultSubscribeAuthModes</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList">AppsyncApiEventConfigDefaultSubscribeAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference">AppsyncApiEventConfigLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProvidersInput">AuthProvidersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModesInput">ConnectionAuthModesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModesInput">DefaultPublishAuthModesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModesInput">DefaultSubscribeAuthModesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfigInput">LogConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthProviders`<sup>Required</sup> <a name="AuthProviders" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProviders"></a>

```go
func AuthProviders() AppsyncApiEventConfigAuthProvidersList
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList">AppsyncApiEventConfigAuthProvidersList</a>

---

##### `ConnectionAuthModes`<sup>Required</sup> <a name="ConnectionAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModes"></a>

```go
func ConnectionAuthModes() AppsyncApiEventConfigConnectionAuthModesList
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList">AppsyncApiEventConfigConnectionAuthModesList</a>

---

##### `DefaultPublishAuthModes`<sup>Required</sup> <a name="DefaultPublishAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModes"></a>

```go
func DefaultPublishAuthModes() AppsyncApiEventConfigDefaultPublishAuthModesList
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList">AppsyncApiEventConfigDefaultPublishAuthModesList</a>

---

##### `DefaultSubscribeAuthModes`<sup>Required</sup> <a name="DefaultSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModes"></a>

```go
func DefaultSubscribeAuthModes() AppsyncApiEventConfigDefaultSubscribeAuthModesList
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList">AppsyncApiEventConfigDefaultSubscribeAuthModesList</a>

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfig"></a>

```go
func LogConfig() AppsyncApiEventConfigLogConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference">AppsyncApiEventConfigLogConfigOutputReference</a>

---

##### `AuthProvidersInput`<sup>Optional</sup> <a name="AuthProvidersInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProvidersInput"></a>

```go
func AuthProvidersInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionAuthModesInput`<sup>Optional</sup> <a name="ConnectionAuthModesInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModesInput"></a>

```go
func ConnectionAuthModesInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultPublishAuthModesInput`<sup>Optional</sup> <a name="DefaultPublishAuthModesInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModesInput"></a>

```go
func DefaultPublishAuthModesInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultSubscribeAuthModesInput`<sup>Optional</sup> <a name="DefaultSubscribeAuthModesInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModesInput"></a>

```go
func DefaultSubscribeAuthModesInput() interface{}
```

- *Type:* interface{}

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfigInput"></a>

```go
func LogConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncApiTagsList <a name="AppsyncApiTagsList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.NewAppsyncApiTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppsyncApiTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.get"></a>

```go
func Get(index *f64) AppsyncApiTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncApiTagsOutputReference <a name="AppsyncApiTagsOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncapi"

appsyncapi.NewAppsyncApiTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppsyncApiTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



