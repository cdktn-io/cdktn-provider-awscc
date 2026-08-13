# `lightsailBucket` Submodule <a name="`lightsailBucket` Submodule" id="@cdktn/provider-awscc.lightsailBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailBucket <a name="LightsailBucket" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_bucket awscc_lightsail_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailbucket"

lightsailbucket.NewLightsailBucket(scope Construct, id *string, config LightsailBucketConfig) LightsailBucket
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig">LightsailBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig">LightsailBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.putAccessRules">PutAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetAccessRules">ResetAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetObjectVersioning">ResetObjectVersioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetReadOnlyAccessAccounts">ResetReadOnlyAccessAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetResourcesReceivingAccess">ResetResourcesReceivingAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessRules` <a name="PutAccessRules" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.putAccessRules"></a>

```go
func PutAccessRules(value LightsailBucketAccessRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.putAccessRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules">LightsailBucketAccessRules</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessRules` <a name="ResetAccessRules" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetAccessRules"></a>

```go
func ResetAccessRules()
```

##### `ResetObjectVersioning` <a name="ResetObjectVersioning" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetObjectVersioning"></a>

```go
func ResetObjectVersioning()
```

##### `ResetReadOnlyAccessAccounts` <a name="ResetReadOnlyAccessAccounts" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetReadOnlyAccessAccounts"></a>

```go
func ResetReadOnlyAccessAccounts()
```

##### `ResetResourcesReceivingAccess` <a name="ResetResourcesReceivingAccess" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetResourcesReceivingAccess"></a>

```go
func ResetResourcesReceivingAccess()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailBucket resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailbucket"

lightsailbucket.LightsailBucket_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailbucket"

lightsailbucket.LightsailBucket_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailbucket"

lightsailbucket.LightsailBucket_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailbucket"

lightsailbucket.LightsailBucket_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LightsailBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LightsailBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LightsailBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LightsailBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.ableToUpdateBundle">AbleToUpdateBundle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.accessRules">AccessRules</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference">LightsailBucketAccessRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList">LightsailBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.accessRulesInput">AccessRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bundleIdInput">BundleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.objectVersioningInput">ObjectVersioningInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.readOnlyAccessAccountsInput">ReadOnlyAccessAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.resourcesReceivingAccessInput">ResourcesReceivingAccessInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bundleId">BundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.objectVersioning">ObjectVersioning</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.readOnlyAccessAccounts">ReadOnlyAccessAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.resourcesReceivingAccess">ResourcesReceivingAccess</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AbleToUpdateBundle`<sup>Required</sup> <a name="AbleToUpdateBundle" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.ableToUpdateBundle"></a>

```go
func AbleToUpdateBundle() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AccessRules`<sup>Required</sup> <a name="AccessRules" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.accessRules"></a>

```go
func AccessRules() LightsailBucketAccessRulesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference">LightsailBucketAccessRulesOutputReference</a>

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.tags"></a>

```go
func Tags() LightsailBucketTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList">LightsailBucketTagsList</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `AccessRulesInput`<sup>Optional</sup> <a name="AccessRulesInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.accessRulesInput"></a>

```go
func AccessRulesInput() interface{}
```

- *Type:* interface{}

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bundleIdInput"></a>

```go
func BundleIdInput() *string
```

- *Type:* *string

---

##### `ObjectVersioningInput`<sup>Optional</sup> <a name="ObjectVersioningInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.objectVersioningInput"></a>

```go
func ObjectVersioningInput() interface{}
```

- *Type:* interface{}

---

##### `ReadOnlyAccessAccountsInput`<sup>Optional</sup> <a name="ReadOnlyAccessAccountsInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.readOnlyAccessAccountsInput"></a>

```go
func ReadOnlyAccessAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourcesReceivingAccessInput`<sup>Optional</sup> <a name="ResourcesReceivingAccessInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.resourcesReceivingAccessInput"></a>

```go
func ResourcesReceivingAccessInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bundleId"></a>

```go
func BundleId() *string
```

- *Type:* *string

---

##### `ObjectVersioning`<sup>Required</sup> <a name="ObjectVersioning" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.objectVersioning"></a>

```go
func ObjectVersioning() interface{}
```

- *Type:* interface{}

---

##### `ReadOnlyAccessAccounts`<sup>Required</sup> <a name="ReadOnlyAccessAccounts" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.readOnlyAccessAccounts"></a>

```go
func ReadOnlyAccessAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `ResourcesReceivingAccess`<sup>Required</sup> <a name="ResourcesReceivingAccess" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.resourcesReceivingAccess"></a>

```go
func ResourcesReceivingAccess() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailBucketAccessRules <a name="LightsailBucketAccessRules" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailbucket"

&lightsailbucket.LightsailBucketAccessRules {
	AllowPublicOverrides: interface{},
	FetchObject: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules.property.allowPublicOverrides">AllowPublicOverrides</a></code> | <code>interface{}</code> | A Boolean value that indicates whether the access control list (ACL) permissions that are applied to individual objects override the getObject option that is currently specified. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules.property.fetchObject">FetchObject</a></code> | <code>*string</code> | Specifies the anonymous access to all objects in a bucket. |

---

##### `AllowPublicOverrides`<sup>Optional</sup> <a name="AllowPublicOverrides" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules.property.allowPublicOverrides"></a>

```go
AllowPublicOverrides interface{}
```

- *Type:* interface{}

A Boolean value that indicates whether the access control list (ACL) permissions that are applied to individual objects override the getObject option that is currently specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_bucket#allow_public_overrides LightsailBucket#allow_public_overrides}

---

##### `FetchObject`<sup>Optional</sup> <a name="FetchObject" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules.property.fetchObject"></a>

```go
FetchObject *string
```

- *Type:* *string

Specifies the anonymous access to all objects in a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_bucket#get_object LightsailBucket#get_object}

---

### LightsailBucketConfig <a name="LightsailBucketConfig" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailbucket"

&lightsailbucket.LightsailBucketConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BucketName: *string,
	BundleId: *string,
	AccessRules: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lightsailBucket.LightsailBucketAccessRules,
	ObjectVersioning: interface{},
	ReadOnlyAccessAccounts: *[]*string,
	ResourcesReceivingAccess: *[]*string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | The name for the bucket. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.bundleId">BundleId</a></code> | <code>*string</code> | The ID of the bundle to use for the bucket. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.accessRules">AccessRules</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules">LightsailBucketAccessRules</a></code> | An object that sets the public accessibility of objects in the specified bucket. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.objectVersioning">ObjectVersioning</a></code> | <code>interface{}</code> | Specifies whether to enable or disable versioning of objects in the bucket. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.readOnlyAccessAccounts">ReadOnlyAccessAccounts</a></code> | <code>*[]*string</code> | An array of strings to specify the AWS account IDs that can access the bucket. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.resourcesReceivingAccess">ResourcesReceivingAccess</a></code> | <code>*[]*string</code> | The names of the Lightsail resources for which to set bucket access. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The name for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_bucket#bucket_name LightsailBucket#bucket_name}

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.bundleId"></a>

```go
BundleId *string
```

- *Type:* *string

The ID of the bundle to use for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_bucket#bundle_id LightsailBucket#bundle_id}

---

##### `AccessRules`<sup>Optional</sup> <a name="AccessRules" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.accessRules"></a>

```go
AccessRules LightsailBucketAccessRules
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules">LightsailBucketAccessRules</a>

An object that sets the public accessibility of objects in the specified bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_bucket#access_rules LightsailBucket#access_rules}

---

##### `ObjectVersioning`<sup>Optional</sup> <a name="ObjectVersioning" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.objectVersioning"></a>

```go
ObjectVersioning interface{}
```

- *Type:* interface{}

Specifies whether to enable or disable versioning of objects in the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_bucket#object_versioning LightsailBucket#object_versioning}

---

##### `ReadOnlyAccessAccounts`<sup>Optional</sup> <a name="ReadOnlyAccessAccounts" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.readOnlyAccessAccounts"></a>

```go
ReadOnlyAccessAccounts *[]*string
```

- *Type:* *[]*string

An array of strings to specify the AWS account IDs that can access the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_bucket#read_only_access_accounts LightsailBucket#read_only_access_accounts}

---

##### `ResourcesReceivingAccess`<sup>Optional</sup> <a name="ResourcesReceivingAccess" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.resourcesReceivingAccess"></a>

```go
ResourcesReceivingAccess *[]*string
```

- *Type:* *[]*string

The names of the Lightsail resources for which to set bucket access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_bucket#resources_receiving_access LightsailBucket#resources_receiving_access}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_bucket#tags LightsailBucket#tags}

---

### LightsailBucketTags <a name="LightsailBucketTags" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailbucket"

&lightsailbucket.LightsailBucketTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_bucket#key LightsailBucket#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_bucket#value LightsailBucket#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailBucketAccessRulesOutputReference <a name="LightsailBucketAccessRulesOutputReference" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailbucket"

lightsailbucket.NewLightsailBucketAccessRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailBucketAccessRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.resetAllowPublicOverrides">ResetAllowPublicOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.resetFetchObject">ResetFetchObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowPublicOverrides` <a name="ResetAllowPublicOverrides" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.resetAllowPublicOverrides"></a>

```go
func ResetAllowPublicOverrides()
```

##### `ResetFetchObject` <a name="ResetFetchObject" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.resetFetchObject"></a>

```go
func ResetFetchObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.allowPublicOverridesInput">AllowPublicOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.fetchObjectInput">FetchObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.allowPublicOverrides">AllowPublicOverrides</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.fetchObject">FetchObject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowPublicOverridesInput`<sup>Optional</sup> <a name="AllowPublicOverridesInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.allowPublicOverridesInput"></a>

```go
func AllowPublicOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `FetchObjectInput`<sup>Optional</sup> <a name="FetchObjectInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.fetchObjectInput"></a>

```go
func FetchObjectInput() *string
```

- *Type:* *string

---

##### `AllowPublicOverrides`<sup>Required</sup> <a name="AllowPublicOverrides" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.allowPublicOverrides"></a>

```go
func AllowPublicOverrides() interface{}
```

- *Type:* interface{}

---

##### `FetchObject`<sup>Required</sup> <a name="FetchObject" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.fetchObject"></a>

```go
func FetchObject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailBucketTagsList <a name="LightsailBucketTagsList" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailbucket"

lightsailbucket.NewLightsailBucketTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LightsailBucketTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.get"></a>

```go
func Get(index *f64) LightsailBucketTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailBucketTagsOutputReference <a name="LightsailBucketTagsOutputReference" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailbucket"

lightsailbucket.NewLightsailBucketTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LightsailBucketTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



