# `cloudwatchDomainAccessGrantForOrganization` Submodule <a name="`cloudwatchDomainAccessGrantForOrganization` Submodule" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchDomainAccessGrantForOrganization <a name="CloudwatchDomainAccessGrantForOrganization" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization awscc_cloudwatch_domain_access_grant_for_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchdomainaccessgrantfororganization"

cloudwatchdomainaccessgrantfororganization.NewCloudwatchDomainAccessGrantForOrganization(scope Construct, id *string, config CloudwatchDomainAccessGrantForOrganizationConfig) CloudwatchDomainAccessGrantForOrganization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig">CloudwatchDomainAccessGrantForOrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig">CloudwatchDomainAccessGrantForOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putPrincipal"></a>

```go
func PutPrincipal(value CloudwatchDomainAccessGrantForOrganizationPrincipal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchDomainAccessGrantForOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchdomainaccessgrantfororganization"

cloudwatchdomainaccessgrantfororganization.CloudwatchDomainAccessGrantForOrganization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchdomainaccessgrantfororganization"

cloudwatchdomainaccessgrantfororganization.CloudwatchDomainAccessGrantForOrganization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchdomainaccessgrantfororganization"

cloudwatchdomainaccessgrantfororganization.CloudwatchDomainAccessGrantForOrganization_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchdomainaccessgrantfororganization"

cloudwatchdomainaccessgrantfororganization.CloudwatchDomainAccessGrantForOrganization_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudwatchDomainAccessGrantForOrganization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudwatchDomainAccessGrantForOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudwatchDomainAccessGrantForOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchDomainAccessGrantForOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.grantId">GrantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.grantType">GrantType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference">CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList">CloudwatchDomainAccessGrantForOrganizationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.domainIdInput">DomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.principalInput">PrincipalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `GrantId`<sup>Required</sup> <a name="GrantId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.grantId"></a>

```go
func GrantId() *string
```

- *Type:* *string

---

##### `GrantType`<sup>Required</sup> <a name="GrantType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.grantType"></a>

```go
func GrantType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.principal"></a>

```go
func Principal() CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference">CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tags"></a>

```go
func Tags() CloudwatchDomainAccessGrantForOrganizationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList">CloudwatchDomainAccessGrantForOrganizationTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.domainIdInput"></a>

```go
func DomainIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.principalInput"></a>

```go
func PrincipalInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchDomainAccessGrantForOrganizationConfig <a name="CloudwatchDomainAccessGrantForOrganizationConfig" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchdomainaccessgrantfororganization"

&cloudwatchdomainaccessgrantfororganization.CloudwatchDomainAccessGrantForOrganizationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DomainId: *string,
	Name: *string,
	Permission: *string,
	Principal: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.domainId">DomainId</a></code> | <code>*string</code> | The unique identifier of the organization domain the grant applies to. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the grant. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.permission">Permission</a></code> | <code>*string</code> | The permission level the grant confers. Organization grants are administrative only. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a></code> | The principal the grant is issued to. Supply PrincipalId, or PrincipalAttributes for an attribute-based grant. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.domainId"></a>

```go
DomainId *string
```

- *Type:* *string

The unique identifier of the organization domain the grant applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#domain_id CloudwatchDomainAccessGrantForOrganization#domain_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#name CloudwatchDomainAccessGrantForOrganization#name}

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

The permission level the grant confers. Organization grants are administrative only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#permission CloudwatchDomainAccessGrantForOrganization#permission}

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.principal"></a>

```go
Principal CloudwatchDomainAccessGrantForOrganizationPrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a>

The principal the grant is issued to. Supply PrincipalId, or PrincipalAttributes for an attribute-based grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal CloudwatchDomainAccessGrantForOrganization#principal}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#tags CloudwatchDomainAccessGrantForOrganization#tags}

---

### CloudwatchDomainAccessGrantForOrganizationPrincipal <a name="CloudwatchDomainAccessGrantForOrganizationPrincipal" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchdomainaccessgrantfororganization"

&cloudwatchdomainaccessgrantfororganization.CloudwatchDomainAccessGrantForOrganizationPrincipal {
	PrincipalType: *string,
	PrincipalAttributes: interface{},
	PrincipalId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalType">PrincipalType</a></code> | <code>*string</code> | The type of principal the grant is issued to. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalAttributes">PrincipalAttributes</a></code> | <code>interface{}</code> | Attribute key-value pairs that select the principals the grant applies to. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalId">PrincipalId</a></code> | <code>*string</code> | The identifier of the principal, such as an IAM role ARN or an Identity Center user ID. |

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalType"></a>

```go
PrincipalType *string
```

- *Type:* *string

The type of principal the grant is issued to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal_type CloudwatchDomainAccessGrantForOrganization#principal_type}

---

##### `PrincipalAttributes`<sup>Optional</sup> <a name="PrincipalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalAttributes"></a>

```go
PrincipalAttributes interface{}
```

- *Type:* interface{}

Attribute key-value pairs that select the principals the grant applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal_attributes CloudwatchDomainAccessGrantForOrganization#principal_attributes}

---

##### `PrincipalId`<sup>Optional</sup> <a name="PrincipalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalId"></a>

```go
PrincipalId *string
```

- *Type:* *string

The identifier of the principal, such as an IAM role ARN or an Identity Center user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal_id CloudwatchDomainAccessGrantForOrganization#principal_id}

---

### CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes <a name="CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchdomainaccessgrantfororganization"

&cloudwatchdomainaccessgrantfororganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.property.key">Key</a></code> | <code>*string</code> | The attribute name. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.property.value">Value</a></code> | <code>*string</code> | The attribute value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.property.key"></a>

```go
Key *string
```

- *Type:* *string

The attribute name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#key CloudwatchDomainAccessGrantForOrganization#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.property.value"></a>

```go
Value *string
```

- *Type:* *string

The attribute value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#value CloudwatchDomainAccessGrantForOrganization#value}

---

### CloudwatchDomainAccessGrantForOrganizationTags <a name="CloudwatchDomainAccessGrantForOrganizationTags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchdomainaccessgrantfororganization"

&cloudwatchdomainaccessgrantfororganization.CloudwatchDomainAccessGrantForOrganizationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#key CloudwatchDomainAccessGrantForOrganization#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#value CloudwatchDomainAccessGrantForOrganization#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference <a name="CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchdomainaccessgrantfororganization"

cloudwatchdomainaccessgrantfororganization.NewCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.putPrincipalAttributes">PutPrincipalAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resetPrincipalAttributes">ResetPrincipalAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resetPrincipalId">ResetPrincipalId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipalAttributes` <a name="PutPrincipalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.putPrincipalAttributes"></a>

```go
func PutPrincipalAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.putPrincipalAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPrincipalAttributes` <a name="ResetPrincipalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resetPrincipalAttributes"></a>

```go
func ResetPrincipalAttributes()
```

##### `ResetPrincipalId` <a name="ResetPrincipalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resetPrincipalId"></a>

```go
func ResetPrincipalId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributes">PrincipalAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributesInput">PrincipalAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalAttributes`<sup>Required</sup> <a name="PrincipalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributes"></a>

```go
func PrincipalAttributes() CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList</a>

---

##### `PrincipalAttributesInput`<sup>Optional</sup> <a name="PrincipalAttributesInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributesInput"></a>

```go
func PrincipalAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalIdInput"></a>

```go
func PrincipalIdInput() *string
```

- *Type:* *string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalTypeInput"></a>

```go
func PrincipalTypeInput() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList <a name="CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchdomainaccessgrantfororganization"

cloudwatchdomainaccessgrantfororganization.NewCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get"></a>

```go
func Get(index *f64) CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference <a name="CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchdomainaccessgrantfororganization"

cloudwatchdomainaccessgrantfororganization.NewCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchDomainAccessGrantForOrganizationTagsList <a name="CloudwatchDomainAccessGrantForOrganizationTagsList" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchdomainaccessgrantfororganization"

cloudwatchdomainaccessgrantfororganization.NewCloudwatchDomainAccessGrantForOrganizationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchDomainAccessGrantForOrganizationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.get"></a>

```go
func Get(index *f64) CloudwatchDomainAccessGrantForOrganizationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchDomainAccessGrantForOrganizationTagsOutputReference <a name="CloudwatchDomainAccessGrantForOrganizationTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchdomainaccessgrantfororganization"

cloudwatchdomainaccessgrantfororganization.NewCloudwatchDomainAccessGrantForOrganizationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchDomainAccessGrantForOrganizationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



