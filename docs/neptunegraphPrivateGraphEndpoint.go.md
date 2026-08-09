# `neptunegraphPrivateGraphEndpoint` Submodule <a name="`neptunegraphPrivateGraphEndpoint` Submodule" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptunegraphPrivateGraphEndpoint <a name="NeptunegraphPrivateGraphEndpoint" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/neptunegraph_private_graph_endpoint awscc_neptunegraph_private_graph_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphprivategraphendpoint"

neptunegraphprivategraphendpoint.NewNeptunegraphPrivateGraphEndpoint(scope Construct, id *string, config NeptunegraphPrivateGraphEndpointConfig) NeptunegraphPrivateGraphEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig">NeptunegraphPrivateGraphEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig">NeptunegraphPrivateGraphEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NeptunegraphPrivateGraphEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphprivategraphendpoint"

neptunegraphprivategraphendpoint.NeptunegraphPrivateGraphEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphprivategraphendpoint"

neptunegraphprivategraphendpoint.NeptunegraphPrivateGraphEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphprivategraphendpoint"

neptunegraphprivategraphendpoint.NeptunegraphPrivateGraphEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphprivategraphendpoint"

neptunegraphprivategraphendpoint.NeptunegraphPrivateGraphEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NeptunegraphPrivateGraphEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NeptunegraphPrivateGraphEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NeptunegraphPrivateGraphEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/neptunegraph_private_graph_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NeptunegraphPrivateGraphEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.privateGraphEndpointIdentifier">PrivateGraphEndpointIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.graphIdentifierInput">GraphIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.graphIdentifier">GraphIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrivateGraphEndpointIdentifier`<sup>Required</sup> <a name="PrivateGraphEndpointIdentifier" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.privateGraphEndpointIdentifier"></a>

```go
func PrivateGraphEndpointIdentifier() *string
```

- *Type:* *string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

##### `GraphIdentifierInput`<sup>Optional</sup> <a name="GraphIdentifierInput" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.graphIdentifierInput"></a>

```go
func GraphIdentifierInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `GraphIdentifier`<sup>Required</sup> <a name="GraphIdentifier" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.graphIdentifier"></a>

```go
func GraphIdentifier() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptunegraphPrivateGraphEndpointConfig <a name="NeptunegraphPrivateGraphEndpointConfig" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphprivategraphendpoint"

&neptunegraphprivategraphendpoint.NeptunegraphPrivateGraphEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GraphIdentifier: *string,
	VpcId: *string,
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.graphIdentifier">GraphIdentifier</a></code> | <code>*string</code> | The auto-generated Graph Id assigned by the service. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | The VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | The security group Ids associated with the VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | The subnet Ids associated with the VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GraphIdentifier`<sup>Required</sup> <a name="GraphIdentifier" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.graphIdentifier"></a>

```go
GraphIdentifier *string
```

- *Type:* *string

The auto-generated Graph Id assigned by the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/neptunegraph_private_graph_endpoint#graph_identifier NeptunegraphPrivateGraphEndpoint#graph_identifier}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

The VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/neptunegraph_private_graph_endpoint#vpc_id NeptunegraphPrivateGraphEndpoint#vpc_id}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

The security group Ids associated with the VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/neptunegraph_private_graph_endpoint#security_group_ids NeptunegraphPrivateGraphEndpoint#security_group_ids}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

The subnet Ids associated with the VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/neptunegraph_private_graph_endpoint#subnet_ids NeptunegraphPrivateGraphEndpoint#subnet_ids}

---



