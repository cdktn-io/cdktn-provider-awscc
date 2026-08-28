# `opensearchserviceApplication` Submodule <a name="`opensearchserviceApplication` Submodule" id="@cdktn/provider-awscc.opensearchserviceApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserviceApplication <a name="OpensearchserviceApplication" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application awscc_opensearchservice_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserviceapplication"

opensearchserviceapplication.NewOpensearchserviceApplication(scope Construct, id *string, config OpensearchserviceApplicationConfig) OpensearchserviceApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig">OpensearchserviceApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig">OpensearchserviceApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putAppConfigs">PutAppConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putDataSources">PutDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putIamIdentityCenterOptions">PutIamIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetAppConfigs">ResetAppConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetDataSources">ResetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetIamIdentityCenterOptions">ResetIamIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAppConfigs` <a name="PutAppConfigs" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putAppConfigs"></a>

```go
func PutAppConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putAppConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDataSources` <a name="PutDataSources" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putDataSources"></a>

```go
func PutDataSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putDataSources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIamIdentityCenterOptions` <a name="PutIamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putIamIdentityCenterOptions"></a>

```go
func PutIamIdentityCenterOptions(value OpensearchserviceApplicationIamIdentityCenterOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putIamIdentityCenterOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAppConfigs` <a name="ResetAppConfigs" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetAppConfigs"></a>

```go
func ResetAppConfigs()
```

##### `ResetDataSources` <a name="ResetDataSources" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetDataSources"></a>

```go
func ResetDataSources()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetIamIdentityCenterOptions` <a name="ResetIamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetIamIdentityCenterOptions"></a>

```go
func ResetIamIdentityCenterOptions()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchserviceApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserviceapplication"

opensearchserviceapplication.OpensearchserviceApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserviceapplication"

opensearchserviceapplication.OpensearchserviceApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserviceapplication"

opensearchserviceapplication.OpensearchserviceApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserviceapplication"

opensearchserviceapplication.OpensearchserviceApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OpensearchserviceApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpensearchserviceApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpensearchserviceApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserviceApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.appConfigs">AppConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList">OpensearchserviceApplicationAppConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dataSources">DataSources</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList">OpensearchserviceApplicationDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.iamIdentityCenterOptions">IamIdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference">OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList">OpensearchserviceApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.appConfigsInput">AppConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dataSourcesInput">DataSourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.iamIdentityCenterOptionsInput">IamIdentityCenterOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppConfigs`<sup>Required</sup> <a name="AppConfigs" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.appConfigs"></a>

```go
func AppConfigs() OpensearchserviceApplicationAppConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList">OpensearchserviceApplicationAppConfigsList</a>

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dataSources"></a>

```go
func DataSources() OpensearchserviceApplicationDataSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList">OpensearchserviceApplicationDataSourcesList</a>

---

##### `IamIdentityCenterOptions`<sup>Required</sup> <a name="IamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.iamIdentityCenterOptions"></a>

```go
func IamIdentityCenterOptions() OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference">OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tags"></a>

```go
func Tags() OpensearchserviceApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList">OpensearchserviceApplicationTagsList</a>

---

##### `AppConfigsInput`<sup>Optional</sup> <a name="AppConfigsInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.appConfigsInput"></a>

```go
func AppConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `DataSourcesInput`<sup>Optional</sup> <a name="DataSourcesInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dataSourcesInput"></a>

```go
func DataSourcesInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `IamIdentityCenterOptionsInput`<sup>Optional</sup> <a name="IamIdentityCenterOptionsInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.iamIdentityCenterOptionsInput"></a>

```go
func IamIdentityCenterOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserviceApplicationAppConfigs <a name="OpensearchserviceApplicationAppConfigs" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserviceapplication"

&opensearchserviceapplication.OpensearchserviceApplicationAppConfigs {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs.property.key">Key</a></code> | <code>*string</code> | The configuration key. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs.property.value">Value</a></code> | <code>*string</code> | The configuration value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs.property.key"></a>

```go
Key *string
```

- *Type:* *string

The configuration key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application#key OpensearchserviceApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs.property.value"></a>

```go
Value *string
```

- *Type:* *string

The configuration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application#value OpensearchserviceApplication#value}

---

### OpensearchserviceApplicationConfig <a name="OpensearchserviceApplicationConfig" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserviceapplication"

&opensearchserviceapplication.OpensearchserviceApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AppConfigs: interface{},
	DataSources: interface{},
	Endpoint: *string,
	IamIdentityCenterOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions,
	KmsKeyArn: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.appConfigs">AppConfigs</a></code> | <code>interface{}</code> | List of application configurations. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.dataSources">DataSources</a></code> | <code>interface{}</code> | List of data sources. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | The endpoint for the application. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.iamIdentityCenterOptions">IamIdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a></code> | Options for configuring IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | The ARN of the KMS key used to encrypt the application. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An arbitrary set of tags (key-value pairs) for this application. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application#name OpensearchserviceApplication#name}

---

##### `AppConfigs`<sup>Optional</sup> <a name="AppConfigs" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.appConfigs"></a>

```go
AppConfigs interface{}
```

- *Type:* interface{}

List of application configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application#app_configs OpensearchserviceApplication#app_configs}

---

##### `DataSources`<sup>Optional</sup> <a name="DataSources" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.dataSources"></a>

```go
DataSources interface{}
```

- *Type:* interface{}

List of data sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application#data_sources OpensearchserviceApplication#data_sources}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

The endpoint for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application#endpoint OpensearchserviceApplication#endpoint}

---

##### `IamIdentityCenterOptions`<sup>Optional</sup> <a name="IamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.iamIdentityCenterOptions"></a>

```go
IamIdentityCenterOptions OpensearchserviceApplicationIamIdentityCenterOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a>

Options for configuring IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application#iam_identity_center_options OpensearchserviceApplication#iam_identity_center_options}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

The ARN of the KMS key used to encrypt the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application#kms_key_arn OpensearchserviceApplication#kms_key_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An arbitrary set of tags (key-value pairs) for this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application#tags OpensearchserviceApplication#tags}

---

### OpensearchserviceApplicationDataSources <a name="OpensearchserviceApplicationDataSources" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserviceapplication"

&opensearchserviceapplication.OpensearchserviceApplicationDataSources {
	DataSourceArn: *string,
	DataSourceDescription: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | The ARN of the data source. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources.property.dataSourceDescription">DataSourceDescription</a></code> | <code>*string</code> | Description of the data source. |

---

##### `DataSourceArn`<sup>Optional</sup> <a name="DataSourceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources.property.dataSourceArn"></a>

```go
DataSourceArn *string
```

- *Type:* *string

The ARN of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application#data_source_arn OpensearchserviceApplication#data_source_arn}

---

##### `DataSourceDescription`<sup>Optional</sup> <a name="DataSourceDescription" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources.property.dataSourceDescription"></a>

```go
DataSourceDescription *string
```

- *Type:* *string

Description of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application#data_source_description OpensearchserviceApplication#data_source_description}

---

### OpensearchserviceApplicationIamIdentityCenterOptions <a name="OpensearchserviceApplicationIamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserviceapplication"

&opensearchserviceapplication.OpensearchserviceApplicationIamIdentityCenterOptions {
	Enabled: interface{},
	IamIdentityCenterInstanceArn: *string,
	IamRoleForIdentityCenterApplicationArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether IAM Identity Center is enabled. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.iamIdentityCenterInstanceArn">IamIdentityCenterInstanceArn</a></code> | <code>*string</code> | The ARN of the IAM Identity Center instance. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.iamRoleForIdentityCenterApplicationArn">IamRoleForIdentityCenterApplicationArn</a></code> | <code>*string</code> | The ARN of the IAM role for Identity Center application. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether IAM Identity Center is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application#enabled OpensearchserviceApplication#enabled}

---

##### `IamIdentityCenterInstanceArn`<sup>Optional</sup> <a name="IamIdentityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.iamIdentityCenterInstanceArn"></a>

```go
IamIdentityCenterInstanceArn *string
```

- *Type:* *string

The ARN of the IAM Identity Center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application#iam_identity_center_instance_arn OpensearchserviceApplication#iam_identity_center_instance_arn}

---

##### `IamRoleForIdentityCenterApplicationArn`<sup>Optional</sup> <a name="IamRoleForIdentityCenterApplicationArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.iamRoleForIdentityCenterApplicationArn"></a>

```go
IamRoleForIdentityCenterApplicationArn *string
```

- *Type:* *string

The ARN of the IAM role for Identity Center application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application#iam_role_for_identity_center_application_arn OpensearchserviceApplication#iam_role_for_identity_center_application_arn}

---

### OpensearchserviceApplicationTags <a name="OpensearchserviceApplicationTags" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserviceapplication"

&opensearchserviceapplication.OpensearchserviceApplicationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags.property.key">Key</a></code> | <code>*string</code> | The key in the key-value pair. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags.property.value">Value</a></code> | <code>*string</code> | The value in the key-value pair. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key in the key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application#key OpensearchserviceApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value in the key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchservice_application#value OpensearchserviceApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserviceApplicationAppConfigsList <a name="OpensearchserviceApplicationAppConfigsList" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserviceapplication"

opensearchserviceapplication.NewOpensearchserviceApplicationAppConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpensearchserviceApplicationAppConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.get"></a>

```go
func Get(index *f64) OpensearchserviceApplicationAppConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceApplicationAppConfigsOutputReference <a name="OpensearchserviceApplicationAppConfigsOutputReference" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserviceapplication"

opensearchserviceapplication.NewOpensearchserviceApplicationAppConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpensearchserviceApplicationAppConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceApplicationDataSourcesList <a name="OpensearchserviceApplicationDataSourcesList" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserviceapplication"

opensearchserviceapplication.NewOpensearchserviceApplicationDataSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpensearchserviceApplicationDataSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.get"></a>

```go
func Get(index *f64) OpensearchserviceApplicationDataSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceApplicationDataSourcesOutputReference <a name="OpensearchserviceApplicationDataSourcesOutputReference" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserviceapplication"

opensearchserviceapplication.NewOpensearchserviceApplicationDataSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpensearchserviceApplicationDataSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resetDataSourceArn">ResetDataSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resetDataSourceDescription">ResetDataSourceDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataSourceArn` <a name="ResetDataSourceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resetDataSourceArn"></a>

```go
func ResetDataSourceArn()
```

##### `ResetDataSourceDescription` <a name="ResetDataSourceDescription" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resetDataSourceDescription"></a>

```go
func ResetDataSourceDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceArnInput">DataSourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceDescriptionInput">DataSourceDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceDescription">DataSourceDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSourceArnInput`<sup>Optional</sup> <a name="DataSourceArnInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceArnInput"></a>

```go
func DataSourceArnInput() *string
```

- *Type:* *string

---

##### `DataSourceDescriptionInput`<sup>Optional</sup> <a name="DataSourceDescriptionInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceDescriptionInput"></a>

```go
func DataSourceDescriptionInput() *string
```

- *Type:* *string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceArn"></a>

```go
func DataSourceArn() *string
```

- *Type:* *string

---

##### `DataSourceDescription`<sup>Required</sup> <a name="DataSourceDescription" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceDescription"></a>

```go
func DataSourceDescription() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference <a name="OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserviceapplication"

opensearchserviceapplication.NewOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetIamIdentityCenterInstanceArn">ResetIamIdentityCenterInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetIamRoleForIdentityCenterApplicationArn">ResetIamRoleForIdentityCenterApplicationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetIamIdentityCenterInstanceArn` <a name="ResetIamIdentityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetIamIdentityCenterInstanceArn"></a>

```go
func ResetIamIdentityCenterInstanceArn()
```

##### `ResetIamRoleForIdentityCenterApplicationArn` <a name="ResetIamRoleForIdentityCenterApplicationArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetIamRoleForIdentityCenterApplicationArn"></a>

```go
func ResetIamRoleForIdentityCenterApplicationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArnInput">IamIdentityCenterInstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArnInput">IamRoleForIdentityCenterApplicationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArn">IamIdentityCenterInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArn">IamRoleForIdentityCenterApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IamIdentityCenterInstanceArnInput`<sup>Optional</sup> <a name="IamIdentityCenterInstanceArnInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArnInput"></a>

```go
func IamIdentityCenterInstanceArnInput() *string
```

- *Type:* *string

---

##### `IamRoleForIdentityCenterApplicationArnInput`<sup>Optional</sup> <a name="IamRoleForIdentityCenterApplicationArnInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArnInput"></a>

```go
func IamRoleForIdentityCenterApplicationArnInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `IamIdentityCenterInstanceArn`<sup>Required</sup> <a name="IamIdentityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArn"></a>

```go
func IamIdentityCenterInstanceArn() *string
```

- *Type:* *string

---

##### `IamRoleForIdentityCenterApplicationArn`<sup>Required</sup> <a name="IamRoleForIdentityCenterApplicationArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArn"></a>

```go
func IamRoleForIdentityCenterApplicationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceApplicationTagsList <a name="OpensearchserviceApplicationTagsList" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserviceapplication"

opensearchserviceapplication.NewOpensearchserviceApplicationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpensearchserviceApplicationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.get"></a>

```go
func Get(index *f64) OpensearchserviceApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceApplicationTagsOutputReference <a name="OpensearchserviceApplicationTagsOutputReference" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserviceapplication"

opensearchserviceapplication.NewOpensearchserviceApplicationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpensearchserviceApplicationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



