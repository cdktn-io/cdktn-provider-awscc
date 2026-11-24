# `ec2FcaPolicyAssociation` Submodule <a name="`ec2FcaPolicyAssociation` Submodule" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2FcaPolicyAssociation <a name="Ec2FcaPolicyAssociation" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy_association awscc_ec2_fca_policy_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicyassociation"

ec2fcapolicyassociation.NewEc2FcaPolicyAssociation(scope Construct, id *string, config Ec2FcaPolicyAssociationConfig) Ec2FcaPolicyAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig">Ec2FcaPolicyAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig">Ec2FcaPolicyAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.resetNetworkResourceScopeType">ResetNetworkResourceScopeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetNetworkResourceScopeType` <a name="ResetNetworkResourceScopeType" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.resetNetworkResourceScopeType"></a>

```go
func ResetNetworkResourceScopeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2FcaPolicyAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicyassociation"

ec2fcapolicyassociation.Ec2FcaPolicyAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicyassociation"

ec2fcapolicyassociation.Ec2FcaPolicyAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicyassociation"

ec2fcapolicyassociation.Ec2FcaPolicyAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicyassociation"

ec2fcapolicyassociation.Ec2FcaPolicyAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2FcaPolicyAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2FcaPolicyAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2FcaPolicyAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2FcaPolicyAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.associatedAt">AssociatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.associationMode">AssociationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.expectedEffectiveAt">ExpectedEffectiveAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.fcaPolicyAssociationId">FcaPolicyAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.managedBy">ManagedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.ownerAccount">OwnerAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.fcaPolicyIdInput">FcaPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.networkResourceIdInput">NetworkResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.networkResourceScopeTypeInput">NetworkResourceScopeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.fcaPolicyId">FcaPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.networkResourceId">NetworkResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.networkResourceScopeType">NetworkResourceScopeType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedAt`<sup>Required</sup> <a name="AssociatedAt" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.associatedAt"></a>

```go
func AssociatedAt() *string
```

- *Type:* *string

---

##### `AssociationMode`<sup>Required</sup> <a name="AssociationMode" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.associationMode"></a>

```go
func AssociationMode() *string
```

- *Type:* *string

---

##### `ExpectedEffectiveAt`<sup>Required</sup> <a name="ExpectedEffectiveAt" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.expectedEffectiveAt"></a>

```go
func ExpectedEffectiveAt() *string
```

- *Type:* *string

---

##### `FcaPolicyAssociationId`<sup>Required</sup> <a name="FcaPolicyAssociationId" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.fcaPolicyAssociationId"></a>

```go
func FcaPolicyAssociationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedBy`<sup>Required</sup> <a name="ManagedBy" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.managedBy"></a>

```go
func ManagedBy() *string
```

- *Type:* *string

---

##### `OwnerAccount`<sup>Required</sup> <a name="OwnerAccount" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.ownerAccount"></a>

```go
func OwnerAccount() *string
```

- *Type:* *string

---

##### `FcaPolicyIdInput`<sup>Optional</sup> <a name="FcaPolicyIdInput" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.fcaPolicyIdInput"></a>

```go
func FcaPolicyIdInput() *string
```

- *Type:* *string

---

##### `NetworkResourceIdInput`<sup>Optional</sup> <a name="NetworkResourceIdInput" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.networkResourceIdInput"></a>

```go
func NetworkResourceIdInput() *string
```

- *Type:* *string

---

##### `NetworkResourceScopeTypeInput`<sup>Optional</sup> <a name="NetworkResourceScopeTypeInput" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.networkResourceScopeTypeInput"></a>

```go
func NetworkResourceScopeTypeInput() *string
```

- *Type:* *string

---

##### `FcaPolicyId`<sup>Required</sup> <a name="FcaPolicyId" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.fcaPolicyId"></a>

```go
func FcaPolicyId() *string
```

- *Type:* *string

---

##### `NetworkResourceId`<sup>Required</sup> <a name="NetworkResourceId" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.networkResourceId"></a>

```go
func NetworkResourceId() *string
```

- *Type:* *string

---

##### `NetworkResourceScopeType`<sup>Required</sup> <a name="NetworkResourceScopeType" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.networkResourceScopeType"></a>

```go
func NetworkResourceScopeType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2FcaPolicyAssociationConfig <a name="Ec2FcaPolicyAssociationConfig" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicyassociation"

&ec2fcapolicyassociation.Ec2FcaPolicyAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FcaPolicyId: *string,
	NetworkResourceId: *string,
	NetworkResourceScopeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.fcaPolicyId">FcaPolicyId</a></code> | <code>*string</code> | The ID of the FCA policy to associate. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.networkResourceId">NetworkResourceId</a></code> | <code>*string</code> | The ID of the network resource to associate the FCA policy with. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.networkResourceScopeType">NetworkResourceScopeType</a></code> | <code>*string</code> | Associate by scope instead of directly. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FcaPolicyId`<sup>Required</sup> <a name="FcaPolicyId" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.fcaPolicyId"></a>

```go
FcaPolicyId *string
```

- *Type:* *string

The ID of the FCA policy to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy_association#fca_policy_id Ec2FcaPolicyAssociation#fca_policy_id}

---

##### `NetworkResourceId`<sup>Required</sup> <a name="NetworkResourceId" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.networkResourceId"></a>

```go
NetworkResourceId *string
```

- *Type:* *string

The ID of the network resource to associate the FCA policy with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy_association#network_resource_id Ec2FcaPolicyAssociation#network_resource_id}

---

##### `NetworkResourceScopeType`<sup>Optional</sup> <a name="NetworkResourceScopeType" id="@cdktn/provider-awscc.ec2FcaPolicyAssociation.Ec2FcaPolicyAssociationConfig.property.networkResourceScopeType"></a>

```go
NetworkResourceScopeType *string
```

- *Type:* *string

Associate by scope instead of directly.

When set, NetworkResourceId is the ID of the scope (an account ID, a VPC ID, or a subnet ID) and the association covers every eligible network resource in that scope; when omitted, NetworkResourceId is a direct network resource (for example a NAT gateway or instance) and must match the policy's NetworkResourceType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy_association#network_resource_scope_type Ec2FcaPolicyAssociation#network_resource_scope_type}

---



