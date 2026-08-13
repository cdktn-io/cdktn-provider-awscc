# `devopsguruResourceCollection` Submodule <a name="`devopsguruResourceCollection` Submodule" id="@cdktn/provider-awscc.devopsguruResourceCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsguruResourceCollection <a name="DevopsguruResourceCollection" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_resource_collection awscc_devopsguru_resource_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgururesourcecollection"

devopsgururesourcecollection.NewDevopsguruResourceCollection(scope Construct, id *string, config DevopsguruResourceCollectionConfig) DevopsguruResourceCollection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig">DevopsguruResourceCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig">DevopsguruResourceCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.putResourceCollectionFilter">PutResourceCollectionFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceCollectionFilter` <a name="PutResourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.putResourceCollectionFilter"></a>

```go
func PutResourceCollectionFilter(value DevopsguruResourceCollectionResourceCollectionFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.putResourceCollectionFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsguruResourceCollection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgururesourcecollection"

devopsgururesourcecollection.DevopsguruResourceCollection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgururesourcecollection"

devopsgururesourcecollection.DevopsguruResourceCollection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgururesourcecollection"

devopsgururesourcecollection.DevopsguruResourceCollection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgururesourcecollection"

devopsgururesourcecollection.DevopsguruResourceCollection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DevopsguruResourceCollection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevopsguruResourceCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevopsguruResourceCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_resource_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DevopsguruResourceCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilter">ResourceCollectionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference">DevopsguruResourceCollectionResourceCollectionFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionType">ResourceCollectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilterInput">ResourceCollectionFilterInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceCollectionFilter`<sup>Required</sup> <a name="ResourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilter"></a>

```go
func ResourceCollectionFilter() DevopsguruResourceCollectionResourceCollectionFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference">DevopsguruResourceCollectionResourceCollectionFilterOutputReference</a>

---

##### `ResourceCollectionType`<sup>Required</sup> <a name="ResourceCollectionType" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionType"></a>

```go
func ResourceCollectionType() *string
```

- *Type:* *string

---

##### `ResourceCollectionFilterInput`<sup>Optional</sup> <a name="ResourceCollectionFilterInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilterInput"></a>

```go
func ResourceCollectionFilterInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsguruResourceCollectionConfig <a name="DevopsguruResourceCollectionConfig" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgururesourcecollection"

&devopsgururesourcecollection.DevopsguruResourceCollectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ResourceCollectionFilter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.resourceCollectionFilter">ResourceCollectionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a></code> | Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceCollectionFilter`<sup>Required</sup> <a name="ResourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.resourceCollectionFilter"></a>

```go
ResourceCollectionFilter DevopsguruResourceCollectionResourceCollectionFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_resource_collection#resource_collection_filter DevopsguruResourceCollection#resource_collection_filter}

---

### DevopsguruResourceCollectionResourceCollectionFilter <a name="DevopsguruResourceCollectionResourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgururesourcecollection"

&devopsgururesourcecollection.DevopsguruResourceCollectionResourceCollectionFilter {
	Cloudformation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.cloudformation">Cloudformation</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a></code> | CloudFormation resource for DevOps Guru to monitor. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.tags">Tags</a></code> | <code>interface{}</code> | Tagged resources for DevOps Guru to monitor. |

---

##### `Cloudformation`<sup>Optional</sup> <a name="Cloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.cloudformation"></a>

```go
Cloudformation DevopsguruResourceCollectionResourceCollectionFilterCloudformation
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

CloudFormation resource for DevOps Guru to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_resource_collection#cloudformation DevopsguruResourceCollection#cloudformation}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tagged resources for DevOps Guru to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_resource_collection#tags DevopsguruResourceCollection#tags}

---

### DevopsguruResourceCollectionResourceCollectionFilterCloudformation <a name="DevopsguruResourceCollectionResourceCollectionFilterCloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgururesourcecollection"

&devopsgururesourcecollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation {
	StackNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation.property.stackNames">StackNames</a></code> | <code>*[]*string</code> | An array of CloudFormation stack names. |

---

##### `StackNames`<sup>Optional</sup> <a name="StackNames" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation.property.stackNames"></a>

```go
StackNames *[]*string
```

- *Type:* *[]*string

An array of CloudFormation stack names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_resource_collection#stack_names DevopsguruResourceCollection#stack_names}

---

### DevopsguruResourceCollectionResourceCollectionFilterTags <a name="DevopsguruResourceCollectionResourceCollectionFilterTags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgururesourcecollection"

&devopsgururesourcecollection.DevopsguruResourceCollectionResourceCollectionFilterTags {
	AppBoundaryKey: *string,
	TagValues: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.appBoundaryKey">AppBoundaryKey</a></code> | <code>*string</code> | A Tag key for DevOps Guru app boundary. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.tagValues">TagValues</a></code> | <code>*[]*string</code> | Tag values of DevOps Guru app boundary. |

---

##### `AppBoundaryKey`<sup>Optional</sup> <a name="AppBoundaryKey" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.appBoundaryKey"></a>

```go
AppBoundaryKey *string
```

- *Type:* *string

A Tag key for DevOps Guru app boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_resource_collection#app_boundary_key DevopsguruResourceCollection#app_boundary_key}

---

##### `TagValues`<sup>Optional</sup> <a name="TagValues" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.tagValues"></a>

```go
TagValues *[]*string
```

- *Type:* *[]*string

Tag values of DevOps Guru app boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_resource_collection#tag_values DevopsguruResourceCollection#tag_values}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference <a name="DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgururesourcecollection"

devopsgururesourcecollection.NewDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resetStackNames">ResetStackNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStackNames` <a name="ResetStackNames" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resetStackNames"></a>

```go
func ResetStackNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNamesInput">StackNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNames">StackNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StackNamesInput`<sup>Optional</sup> <a name="StackNamesInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNamesInput"></a>

```go
func StackNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `StackNames`<sup>Required</sup> <a name="StackNames" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNames"></a>

```go
func StackNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsguruResourceCollectionResourceCollectionFilterOutputReference <a name="DevopsguruResourceCollectionResourceCollectionFilterOutputReference" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgururesourcecollection"

devopsgururesourcecollection.NewDevopsguruResourceCollectionResourceCollectionFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsguruResourceCollectionResourceCollectionFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putCloudformation">PutCloudformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetCloudformation">ResetCloudformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudformation` <a name="PutCloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putCloudformation"></a>

```go
func PutCloudformation(value DevopsguruResourceCollectionResourceCollectionFilterCloudformation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putCloudformation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCloudformation` <a name="ResetCloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetCloudformation"></a>

```go
func ResetCloudformation()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformation">Cloudformation</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference">DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList">DevopsguruResourceCollectionResourceCollectionFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformationInput">CloudformationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cloudformation`<sup>Required</sup> <a name="Cloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformation"></a>

```go
func Cloudformation() DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference">DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tags"></a>

```go
func Tags() DevopsguruResourceCollectionResourceCollectionFilterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList">DevopsguruResourceCollectionResourceCollectionFilterTagsList</a>

---

##### `CloudformationInput`<sup>Optional</sup> <a name="CloudformationInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformationInput"></a>

```go
func CloudformationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsguruResourceCollectionResourceCollectionFilterTagsList <a name="DevopsguruResourceCollectionResourceCollectionFilterTagsList" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgururesourcecollection"

devopsgururesourcecollection.NewDevopsguruResourceCollectionResourceCollectionFilterTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsguruResourceCollectionResourceCollectionFilterTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.get"></a>

```go
func Get(index *f64) DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference <a name="DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgururesourcecollection"

devopsgururesourcecollection.NewDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetAppBoundaryKey">ResetAppBoundaryKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetTagValues">ResetTagValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppBoundaryKey` <a name="ResetAppBoundaryKey" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetAppBoundaryKey"></a>

```go
func ResetAppBoundaryKey()
```

##### `ResetTagValues` <a name="ResetTagValues" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetTagValues"></a>

```go
func ResetTagValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKeyInput">AppBoundaryKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValuesInput">TagValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKey">AppBoundaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValues">TagValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppBoundaryKeyInput`<sup>Optional</sup> <a name="AppBoundaryKeyInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKeyInput"></a>

```go
func AppBoundaryKeyInput() *string
```

- *Type:* *string

---

##### `TagValuesInput`<sup>Optional</sup> <a name="TagValuesInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValuesInput"></a>

```go
func TagValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AppBoundaryKey`<sup>Required</sup> <a name="AppBoundaryKey" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKey"></a>

```go
func AppBoundaryKey() *string
```

- *Type:* *string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValues"></a>

```go
func TagValues() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



