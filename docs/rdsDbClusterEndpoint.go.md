# `rdsDbClusterEndpoint` Submodule <a name="`rdsDbClusterEndpoint` Submodule" id="@cdktn/provider-awscc.rdsDbClusterEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbClusterEndpointA <a name="RdsDbClusterEndpointA" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint awscc_rds_db_cluster_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbclusterendpoint"

rdsdbclusterendpoint.NewRdsDbClusterEndpointA(scope Construct, id *string, config RdsDbClusterEndpointAConfig) RdsDbClusterEndpointA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig">RdsDbClusterEndpointAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig">RdsDbClusterEndpointAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetExcludedMembers">ResetExcludedMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetStaticMembers">ResetStaticMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExcludedMembers` <a name="ResetExcludedMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetExcludedMembers"></a>

```go
func ResetExcludedMembers()
```

##### `ResetStaticMembers` <a name="ResetStaticMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetStaticMembers"></a>

```go
func ResetStaticMembers()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbClusterEndpointA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbclusterendpoint"

rdsdbclusterendpoint.RdsDbClusterEndpointA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbclusterendpoint"

rdsdbclusterendpoint.RdsDbClusterEndpointA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbclusterendpoint"

rdsdbclusterendpoint.RdsDbClusterEndpointA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbclusterendpoint"

rdsdbclusterendpoint.RdsDbClusterEndpointA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RdsDbClusterEndpointA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RdsDbClusterEndpointA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RdsDbClusterEndpointA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbClusterEndpointA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointArn">DbClusterEndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointResourceIdentifier">DbClusterEndpointResourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList">RdsDbClusterEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointTypeInput">CustomEndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifierInput">DbClusterEndpointIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifierInput">DbClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembersInput">ExcludedMembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembersInput">StaticMembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointType">CustomEndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifier">DbClusterEndpointIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembers">ExcludedMembers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembers">StaticMembers</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DbClusterEndpointArn`<sup>Required</sup> <a name="DbClusterEndpointArn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointArn"></a>

```go
func DbClusterEndpointArn() *string
```

- *Type:* *string

---

##### `DbClusterEndpointResourceIdentifier`<sup>Required</sup> <a name="DbClusterEndpointResourceIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointResourceIdentifier"></a>

```go
func DbClusterEndpointResourceIdentifier() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tags"></a>

```go
func Tags() RdsDbClusterEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList">RdsDbClusterEndpointTagsList</a>

---

##### `CustomEndpointTypeInput`<sup>Optional</sup> <a name="CustomEndpointTypeInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointTypeInput"></a>

```go
func CustomEndpointTypeInput() *string
```

- *Type:* *string

---

##### `DbClusterEndpointIdentifierInput`<sup>Optional</sup> <a name="DbClusterEndpointIdentifierInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifierInput"></a>

```go
func DbClusterEndpointIdentifierInput() *string
```

- *Type:* *string

---

##### `DbClusterIdentifierInput`<sup>Optional</sup> <a name="DbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifierInput"></a>

```go
func DbClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `ExcludedMembersInput`<sup>Optional</sup> <a name="ExcludedMembersInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembersInput"></a>

```go
func ExcludedMembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `StaticMembersInput`<sup>Optional</sup> <a name="StaticMembersInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembersInput"></a>

```go
func StaticMembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `CustomEndpointType`<sup>Required</sup> <a name="CustomEndpointType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointType"></a>

```go
func CustomEndpointType() *string
```

- *Type:* *string

---

##### `DbClusterEndpointIdentifier`<sup>Required</sup> <a name="DbClusterEndpointIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifier"></a>

```go
func DbClusterEndpointIdentifier() *string
```

- *Type:* *string

---

##### `DbClusterIdentifier`<sup>Required</sup> <a name="DbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifier"></a>

```go
func DbClusterIdentifier() *string
```

- *Type:* *string

---

##### `ExcludedMembers`<sup>Required</sup> <a name="ExcludedMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembers"></a>

```go
func ExcludedMembers() *[]*string
```

- *Type:* *[]*string

---

##### `StaticMembers`<sup>Required</sup> <a name="StaticMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembers"></a>

```go
func StaticMembers() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbClusterEndpointAConfig <a name="RdsDbClusterEndpointAConfig" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbclusterendpoint"

&rdsdbclusterendpoint.RdsDbClusterEndpointAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CustomEndpointType: *string,
	DbClusterEndpointIdentifier: *string,
	DbClusterIdentifier: *string,
	ExcludedMembers: *[]*string,
	StaticMembers: *[]*string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.customEndpointType">CustomEndpointType</a></code> | <code>*string</code> | The type of the custom endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterEndpointIdentifier">DbClusterEndpointIdentifier</a></code> | <code>*string</code> | The identifier to use for the new endpoint. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>*string</code> | The DB cluster identifier of the DB cluster associated with the endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.excludedMembers">ExcludedMembers</a></code> | <code>*[]*string</code> | List of DB instance identifiers that aren't part of the custom endpoint group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.staticMembers">StaticMembers</a></code> | <code>*[]*string</code> | List of DB instance identifiers that are part of the custom endpoint group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags to be assigned to the DB cluster endpoint. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomEndpointType`<sup>Required</sup> <a name="CustomEndpointType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.customEndpointType"></a>

```go
CustomEndpointType *string
```

- *Type:* *string

The type of the custom endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#custom_endpoint_type RdsDbClusterEndpointA#custom_endpoint_type}

---

##### `DbClusterEndpointIdentifier`<sup>Required</sup> <a name="DbClusterEndpointIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterEndpointIdentifier"></a>

```go
DbClusterEndpointIdentifier *string
```

- *Type:* *string

The identifier to use for the new endpoint. This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#db_cluster_endpoint_identifier RdsDbClusterEndpointA#db_cluster_endpoint_identifier}

---

##### `DbClusterIdentifier`<sup>Required</sup> <a name="DbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterIdentifier"></a>

```go
DbClusterIdentifier *string
```

- *Type:* *string

The DB cluster identifier of the DB cluster associated with the endpoint.

This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#db_cluster_identifier RdsDbClusterEndpointA#db_cluster_identifier}

---

##### `ExcludedMembers`<sup>Optional</sup> <a name="ExcludedMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.excludedMembers"></a>

```go
ExcludedMembers *[]*string
```

- *Type:* *[]*string

List of DB instance identifiers that aren't part of the custom endpoint group.

All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty. Once either member list is set, it can be changed or replaced by the other list, but both lists cannot be removed in place; removing them requires replacing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#excluded_members RdsDbClusterEndpointA#excluded_members}

---

##### `StaticMembers`<sup>Optional</sup> <a name="StaticMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.staticMembers"></a>

```go
StaticMembers *[]*string
```

- *Type:* *[]*string

List of DB instance identifiers that are part of the custom endpoint group.

Once either member list is set, it can be changed or replaced by the other list, but both lists cannot be removed in place; removing them requires replacing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#static_members RdsDbClusterEndpointA#static_members}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags to be assigned to the DB cluster endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#tags RdsDbClusterEndpointA#tags}

---

### RdsDbClusterEndpointTags <a name="RdsDbClusterEndpointTags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbclusterendpoint"

&rdsdbclusterendpoint.RdsDbClusterEndpointTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#key RdsDbClusterEndpointA#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#value RdsDbClusterEndpointA#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbClusterEndpointTagsList <a name="RdsDbClusterEndpointTagsList" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbclusterendpoint"

rdsdbclusterendpoint.NewRdsDbClusterEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RdsDbClusterEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.get"></a>

```go
func Get(index *f64) RdsDbClusterEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbClusterEndpointTagsOutputReference <a name="RdsDbClusterEndpointTagsOutputReference" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbclusterendpoint"

rdsdbclusterendpoint.NewRdsDbClusterEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RdsDbClusterEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



