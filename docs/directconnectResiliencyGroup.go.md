# `directconnectResiliencyGroup` Submodule <a name="`directconnectResiliencyGroup` Submodule" id="@cdktn/provider-awscc.directconnectResiliencyGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectResiliencyGroup <a name="DirectconnectResiliencyGroup" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group awscc_directconnect_resiliency_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/directconnectresiliencygroup"

directconnectresiliencygroup.NewDirectconnectResiliencyGroup(scope Construct, id *string, config DirectconnectResiliencyGroupConfig) DirectconnectResiliencyGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig">DirectconnectResiliencyGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig">DirectconnectResiliencyGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetConnectionArns">ResetConnectionArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetIntendedResiliencyModel">ResetIntendedResiliencyModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConnectionArns` <a name="ResetConnectionArns" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetConnectionArns"></a>

```go
func ResetConnectionArns()
```

##### `ResetIntendedResiliencyModel` <a name="ResetIntendedResiliencyModel" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetIntendedResiliencyModel"></a>

```go
func ResetIntendedResiliencyModel()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectResiliencyGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/directconnectresiliencygroup"

directconnectresiliencygroup.DirectconnectResiliencyGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/directconnectresiliencygroup"

directconnectresiliencygroup.DirectconnectResiliencyGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/directconnectresiliencygroup"

directconnectresiliencygroup.DirectconnectResiliencyGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/directconnectresiliencygroup"

directconnectresiliencygroup.DirectconnectResiliencyGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DirectconnectResiliencyGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DirectconnectResiliencyGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DirectconnectResiliencyGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectResiliencyGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupArn">ResiliencyGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupId">ResiliencyGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList">DirectconnectResiliencyGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connectionArnsInput">ConnectionArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.intendedResiliencyModelInput">IntendedResiliencyModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupNameInput">ResiliencyGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connectionArns">ConnectionArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.intendedResiliencyModel">IntendedResiliencyModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupName">ResiliencyGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResiliencyGroupArn`<sup>Required</sup> <a name="ResiliencyGroupArn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupArn"></a>

```go
func ResiliencyGroupArn() *string
```

- *Type:* *string

---

##### `ResiliencyGroupId`<sup>Required</sup> <a name="ResiliencyGroupId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupId"></a>

```go
func ResiliencyGroupId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tags"></a>

```go
func Tags() DirectconnectResiliencyGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList">DirectconnectResiliencyGroupTagsList</a>

---

##### `ConnectionArnsInput`<sup>Optional</sup> <a name="ConnectionArnsInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connectionArnsInput"></a>

```go
func ConnectionArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IntendedResiliencyModelInput`<sup>Optional</sup> <a name="IntendedResiliencyModelInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.intendedResiliencyModelInput"></a>

```go
func IntendedResiliencyModelInput() *string
```

- *Type:* *string

---

##### `ResiliencyGroupNameInput`<sup>Optional</sup> <a name="ResiliencyGroupNameInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupNameInput"></a>

```go
func ResiliencyGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionArns`<sup>Required</sup> <a name="ConnectionArns" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connectionArns"></a>

```go
func ConnectionArns() *[]*string
```

- *Type:* *[]*string

---

##### `IntendedResiliencyModel`<sup>Required</sup> <a name="IntendedResiliencyModel" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.intendedResiliencyModel"></a>

```go
func IntendedResiliencyModel() *string
```

- *Type:* *string

---

##### `ResiliencyGroupName`<sup>Required</sup> <a name="ResiliencyGroupName" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupName"></a>

```go
func ResiliencyGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectResiliencyGroupConfig <a name="DirectconnectResiliencyGroupConfig" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/directconnectresiliencygroup"

&directconnectresiliencygroup.DirectconnectResiliencyGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ResiliencyGroupName: *string,
	ConnectionArns: *[]*string,
	IntendedResiliencyModel: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.resiliencyGroupName">ResiliencyGroupName</a></code> | <code>*string</code> | The name of the resiliency group. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.connectionArns">ConnectionArns</a></code> | <code>*[]*string</code> | The ARNs of the connections that are members of the resiliency group. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.intendedResiliencyModel">IntendedResiliencyModel</a></code> | <code>*string</code> | The resiliency model that the resiliency group is intended to meet. Required when creating a resiliency group. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with the resiliency group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResiliencyGroupName`<sup>Required</sup> <a name="ResiliencyGroupName" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.resiliencyGroupName"></a>

```go
ResiliencyGroupName *string
```

- *Type:* *string

The name of the resiliency group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#resiliency_group_name DirectconnectResiliencyGroup#resiliency_group_name}

---

##### `ConnectionArns`<sup>Optional</sup> <a name="ConnectionArns" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.connectionArns"></a>

```go
ConnectionArns *[]*string
```

- *Type:* *[]*string

The ARNs of the connections that are members of the resiliency group.

When specified, this is the complete, authoritative membership list: on update, connections not present are disassociated, and an explicit empty list removes all members. Omit the property to leave the existing membership unmanaged (unchanged on update). On create, an omitted or empty list means no connections are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#connection_arns DirectconnectResiliencyGroup#connection_arns}

---

##### `IntendedResiliencyModel`<sup>Optional</sup> <a name="IntendedResiliencyModel" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.intendedResiliencyModel"></a>

```go
IntendedResiliencyModel *string
```

- *Type:* *string

The resiliency model that the resiliency group is intended to meet. Required when creating a resiliency group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#intended_resiliency_model DirectconnectResiliencyGroup#intended_resiliency_model}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with the resiliency group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#tags DirectconnectResiliencyGroup#tags}

---

### DirectconnectResiliencyGroupTags <a name="DirectconnectResiliencyGroupTags" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/directconnectresiliencygroup"

&directconnectresiliencygroup.DirectconnectResiliencyGroupTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#key DirectconnectResiliencyGroup#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#value DirectconnectResiliencyGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectResiliencyGroupTagsList <a name="DirectconnectResiliencyGroupTagsList" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/directconnectresiliencygroup"

directconnectresiliencygroup.NewDirectconnectResiliencyGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DirectconnectResiliencyGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.get"></a>

```go
func Get(index *f64) DirectconnectResiliencyGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DirectconnectResiliencyGroupTagsOutputReference <a name="DirectconnectResiliencyGroupTagsOutputReference" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/directconnectresiliencygroup"

directconnectresiliencygroup.NewDirectconnectResiliencyGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DirectconnectResiliencyGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



