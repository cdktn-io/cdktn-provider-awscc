# `securityhubConnectorV2` Submodule <a name="`securityhubConnectorV2` Submodule" id="@cdktn/provider-awscc.securityhubConnectorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubConnectorV2 <a name="SecurityhubConnectorV2" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2 awscc_securityhub_connector_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

securityhubconnectorv2.NewSecurityhubConnectorV2(scope Construct, id *string, config SecurityhubConnectorV2Config) SecurityhubConnectorV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config">SecurityhubConnectorV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config">SecurityhubConnectorV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.putProviderName">PutProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderName` <a name="PutProviderName" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.putProviderName"></a>

```go
func PutProviderName(value SecurityhubConnectorV2ProviderName)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.putProviderName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

securityhubconnectorv2.SecurityhubConnectorV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

securityhubconnectorv2.SecurityhubConnectorV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

securityhubconnectorv2.SecurityhubConnectorV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

securityhubconnectorv2.SecurityhubConnectorV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityhubConnectorV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityhubConnectorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubConnectorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorArn">ConnectorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorId">ConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorStatus">ConnectorStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.enablementStatus">EnablementStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.enablementStatusReason">EnablementStatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.issues">Issues</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList">SecurityhubConnectorV2IssuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lastCheckedAt">LastCheckedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.providerName">ProviderName</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference">SecurityhubConnectorV2ProviderNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.providerNameInput">ProviderNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectorArn`<sup>Required</sup> <a name="ConnectorArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorArn"></a>

```go
func ConnectorArn() *string
```

- *Type:* *string

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorId"></a>

```go
func ConnectorId() *string
```

- *Type:* *string

---

##### `ConnectorStatus`<sup>Required</sup> <a name="ConnectorStatus" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorStatus"></a>

```go
func ConnectorStatus() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `EnablementStatus`<sup>Required</sup> <a name="EnablementStatus" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.enablementStatus"></a>

```go
func EnablementStatus() *string
```

- *Type:* *string

---

##### `EnablementStatusReason`<sup>Required</sup> <a name="EnablementStatusReason" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.enablementStatusReason"></a>

```go
func EnablementStatusReason() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issues`<sup>Required</sup> <a name="Issues" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.issues"></a>

```go
func Issues() SecurityhubConnectorV2IssuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList">SecurityhubConnectorV2IssuesList</a>

---

##### `LastCheckedAt`<sup>Required</sup> <a name="LastCheckedAt" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lastCheckedAt"></a>

```go
func LastCheckedAt() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.providerName"></a>

```go
func ProviderName() SecurityhubConnectorV2ProviderNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference">SecurityhubConnectorV2ProviderNameOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.providerNameInput"></a>

```go
func ProviderNameInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubConnectorV2Config <a name="SecurityhubConnectorV2Config" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

&securityhubconnectorv2.SecurityhubConnectorV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderName: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName,
	Description: *string,
	KmsKeyArn: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.name">Name</a></code> | <code>*string</code> | The name of the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.providerName">ProviderName</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a></code> | The third-party provider configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.description">Description</a></code> | <code>*string</code> | A description of the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | The ARN of KMS key used for the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | A key-value pair to associate with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.providerName"></a>

```go
ProviderName SecurityhubConnectorV2ProviderName
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a>

The third-party provider configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2#provider_name SecurityhubConnectorV2#provider_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

The ARN of KMS key used for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}

---

### SecurityhubConnectorV2Issues <a name="SecurityhubConnectorV2Issues" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Issues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Issues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

&securityhubconnectorv2.SecurityhubConnectorV2Issues {

}
```


### SecurityhubConnectorV2ProviderName <a name="SecurityhubConnectorV2ProviderName" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

&securityhubconnectorv2.SecurityhubConnectorV2ProviderName {
	Azure: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure,
	JiraCloud: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud,
	ServiceNow: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure">SecurityhubConnectorV2ProviderNameAzure</a></code> | The configuration settings required to establish an integration between AWS Security Hub and Azure. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.jiraCloud">JiraCloud</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud">SecurityhubConnectorV2ProviderNameJiraCloud</a></code> | The initial configuration settings required to establish an integration between Security Hub and Jira Cloud. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow">SecurityhubConnectorV2ProviderNameServiceNow</a></code> | The initial configuration settings required to establish an integration between Security Hub and ServiceNow ITSM. |

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.azure"></a>

```go
Azure SecurityhubConnectorV2ProviderNameAzure
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure">SecurityhubConnectorV2ProviderNameAzure</a>

The configuration settings required to establish an integration between AWS Security Hub and Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2#azure SecurityhubConnectorV2#azure}

---

##### `JiraCloud`<sup>Optional</sup> <a name="JiraCloud" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.jiraCloud"></a>

```go
JiraCloud SecurityhubConnectorV2ProviderNameJiraCloud
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud">SecurityhubConnectorV2ProviderNameJiraCloud</a>

The initial configuration settings required to establish an integration between Security Hub and Jira Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2#jira_cloud SecurityhubConnectorV2#jira_cloud}

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.serviceNow"></a>

```go
ServiceNow SecurityhubConnectorV2ProviderNameServiceNow
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow">SecurityhubConnectorV2ProviderNameServiceNow</a>

The initial configuration settings required to establish an integration between Security Hub and ServiceNow ITSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2#service_now SecurityhubConnectorV2#service_now}

---

### SecurityhubConnectorV2ProviderNameAzure <a name="SecurityhubConnectorV2ProviderNameAzure" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

&securityhubconnectorv2.SecurityhubConnectorV2ProviderNameAzure {
	AwsConfigConnectorArn: *string,
	AzureRegions: *[]*string,
	ScopeConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.awsConfigConnectorArn">AwsConfigConnectorArn</a></code> | <code>*string</code> | The ARN of the AWS Config connector used for the Azure integration. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.azureRegions">AzureRegions</a></code> | <code>*[]*string</code> | The list of Azure regions to include in the connector scope. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.scopeConfiguration">ScopeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration">SecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a></code> | The scope configuration for an Azure connector. |

---

##### `AwsConfigConnectorArn`<sup>Optional</sup> <a name="AwsConfigConnectorArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.awsConfigConnectorArn"></a>

```go
AwsConfigConnectorArn *string
```

- *Type:* *string

The ARN of the AWS Config connector used for the Azure integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2#aws_config_connector_arn SecurityhubConnectorV2#aws_config_connector_arn}

---

##### `AzureRegions`<sup>Optional</sup> <a name="AzureRegions" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.azureRegions"></a>

```go
AzureRegions *[]*string
```

- *Type:* *[]*string

The list of Azure regions to include in the connector scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2#azure_regions SecurityhubConnectorV2#azure_regions}

---

##### `ScopeConfiguration`<sup>Optional</sup> <a name="ScopeConfiguration" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.scopeConfiguration"></a>

```go
ScopeConfiguration SecurityhubConnectorV2ProviderNameAzureScopeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration">SecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a>

The scope configuration for an Azure connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2#scope_configuration SecurityhubConnectorV2#scope_configuration}

---

### SecurityhubConnectorV2ProviderNameAzureScopeConfiguration <a name="SecurityhubConnectorV2ProviderNameAzureScopeConfiguration" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

&securityhubconnectorv2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration {
	ScopeType: *string,
	ScopeValues: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration.property.scopeType">ScopeType</a></code> | <code>*string</code> | The scope type for the Azure connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration.property.scopeValues">ScopeValues</a></code> | <code>*[]*string</code> | The list of scope values for the Azure connector. |

---

##### `ScopeType`<sup>Optional</sup> <a name="ScopeType" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration.property.scopeType"></a>

```go
ScopeType *string
```

- *Type:* *string

The scope type for the Azure connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2#scope_type SecurityhubConnectorV2#scope_type}

---

##### `ScopeValues`<sup>Optional</sup> <a name="ScopeValues" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration.property.scopeValues"></a>

```go
ScopeValues *[]*string
```

- *Type:* *[]*string

The list of scope values for the Azure connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2#scope_values SecurityhubConnectorV2#scope_values}

---

### SecurityhubConnectorV2ProviderNameJiraCloud <a name="SecurityhubConnectorV2ProviderNameJiraCloud" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

&securityhubconnectorv2.SecurityhubConnectorV2ProviderNameJiraCloud {
	ProjectKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud.property.projectKey">ProjectKey</a></code> | <code>*string</code> | The project key for a Jira Cloud instance. |

---

##### `ProjectKey`<sup>Optional</sup> <a name="ProjectKey" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud.property.projectKey"></a>

```go
ProjectKey *string
```

- *Type:* *string

The project key for a Jira Cloud instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2#project_key SecurityhubConnectorV2#project_key}

---

### SecurityhubConnectorV2ProviderNameServiceNow <a name="SecurityhubConnectorV2ProviderNameServiceNow" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

&securityhubconnectorv2.SecurityhubConnectorV2ProviderNameServiceNow {
	InstanceName: *string,
	SecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow.property.instanceName">InstanceName</a></code> | <code>*string</code> | The instance name of ServiceNow ITSM. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow.property.secretArn">SecretArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the ServiceNow credentials. |

---

##### `InstanceName`<sup>Optional</sup> <a name="InstanceName" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow.property.instanceName"></a>

```go
InstanceName *string
```

- *Type:* *string

The instance name of ServiceNow ITSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2#instance_name SecurityhubConnectorV2#instance_name}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the ServiceNow credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_connector_v2#secret_arn SecurityhubConnectorV2#secret_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubConnectorV2IssuesList <a name="SecurityhubConnectorV2IssuesList" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

securityhubconnectorv2.NewSecurityhubConnectorV2IssuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityhubConnectorV2IssuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.get"></a>

```go
func Get(index *f64) SecurityhubConnectorV2IssuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SecurityhubConnectorV2IssuesOutputReference <a name="SecurityhubConnectorV2IssuesOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

securityhubconnectorv2.NewSecurityhubConnectorV2IssuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityhubConnectorV2IssuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Issues">SecurityhubConnectorV2Issues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityhubConnectorV2Issues
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Issues">SecurityhubConnectorV2Issues</a>

---


### SecurityhubConnectorV2ProviderNameAzureOutputReference <a name="SecurityhubConnectorV2ProviderNameAzureOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

securityhubconnectorv2.NewSecurityhubConnectorV2ProviderNameAzureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConnectorV2ProviderNameAzureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.putScopeConfiguration">PutScopeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetAwsConfigConnectorArn">ResetAwsConfigConnectorArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetAzureRegions">ResetAzureRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetScopeConfiguration">ResetScopeConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScopeConfiguration` <a name="PutScopeConfiguration" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.putScopeConfiguration"></a>

```go
func PutScopeConfiguration(value SecurityhubConnectorV2ProviderNameAzureScopeConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.putScopeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration">SecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a>

---

##### `ResetAwsConfigConnectorArn` <a name="ResetAwsConfigConnectorArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetAwsConfigConnectorArn"></a>

```go
func ResetAwsConfigConnectorArn()
```

##### `ResetAzureRegions` <a name="ResetAzureRegions" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetAzureRegions"></a>

```go
func ResetAzureRegions()
```

##### `ResetScopeConfiguration` <a name="ResetScopeConfiguration" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetScopeConfiguration"></a>

```go
func ResetScopeConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.scopeConfiguration">ScopeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference">SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.awsConfigConnectorArnInput">AwsConfigConnectorArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.azureRegionsInput">AzureRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.scopeConfigurationInput">ScopeConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.awsConfigConnectorArn">AwsConfigConnectorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.azureRegions">AzureRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScopeConfiguration`<sup>Required</sup> <a name="ScopeConfiguration" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.scopeConfiguration"></a>

```go
func ScopeConfiguration() SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference">SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference</a>

---

##### `AwsConfigConnectorArnInput`<sup>Optional</sup> <a name="AwsConfigConnectorArnInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.awsConfigConnectorArnInput"></a>

```go
func AwsConfigConnectorArnInput() *string
```

- *Type:* *string

---

##### `AzureRegionsInput`<sup>Optional</sup> <a name="AzureRegionsInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.azureRegionsInput"></a>

```go
func AzureRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScopeConfigurationInput`<sup>Optional</sup> <a name="ScopeConfigurationInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.scopeConfigurationInput"></a>

```go
func ScopeConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `AwsConfigConnectorArn`<sup>Required</sup> <a name="AwsConfigConnectorArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.awsConfigConnectorArn"></a>

```go
func AwsConfigConnectorArn() *string
```

- *Type:* *string

---

##### `AzureRegions`<sup>Required</sup> <a name="AzureRegions" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.azureRegions"></a>

```go
func AzureRegions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference <a name="SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

securityhubconnectorv2.NewSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resetScopeType">ResetScopeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resetScopeValues">ResetScopeValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScopeType` <a name="ResetScopeType" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resetScopeType"></a>

```go
func ResetScopeType()
```

##### `ResetScopeValues` <a name="ResetScopeValues" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resetScopeValues"></a>

```go
func ResetScopeValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeTypeInput">ScopeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeValuesInput">ScopeValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeType">ScopeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeValues">ScopeValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScopeTypeInput`<sup>Optional</sup> <a name="ScopeTypeInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeTypeInput"></a>

```go
func ScopeTypeInput() *string
```

- *Type:* *string

---

##### `ScopeValuesInput`<sup>Optional</sup> <a name="ScopeValuesInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeValuesInput"></a>

```go
func ScopeValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScopeType`<sup>Required</sup> <a name="ScopeType" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeType"></a>

```go
func ScopeType() *string
```

- *Type:* *string

---

##### `ScopeValues`<sup>Required</sup> <a name="ScopeValues" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeValues"></a>

```go
func ScopeValues() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConnectorV2ProviderNameJiraCloudOutputReference <a name="SecurityhubConnectorV2ProviderNameJiraCloudOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

securityhubconnectorv2.NewSecurityhubConnectorV2ProviderNameJiraCloudOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConnectorV2ProviderNameJiraCloudOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resetProjectKey">ResetProjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectKey` <a name="ResetProjectKey" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resetProjectKey"></a>

```go
func ResetProjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.projectKeyInput">ProjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.projectKey">ProjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.projectKeyInput"></a>

```go
func ProjectKeyInput() *string
```

- *Type:* *string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.projectKey"></a>

```go
func ProjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConnectorV2ProviderNameOutputReference <a name="SecurityhubConnectorV2ProviderNameOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

securityhubconnectorv2.NewSecurityhubConnectorV2ProviderNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConnectorV2ProviderNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putJiraCloud">PutJiraCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putServiceNow">PutServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetJiraCloud">ResetJiraCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzure` <a name="PutAzure" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putAzure"></a>

```go
func PutAzure(value SecurityhubConnectorV2ProviderNameAzure)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure">SecurityhubConnectorV2ProviderNameAzure</a>

---

##### `PutJiraCloud` <a name="PutJiraCloud" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putJiraCloud"></a>

```go
func PutJiraCloud(value SecurityhubConnectorV2ProviderNameJiraCloud)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putJiraCloud.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud">SecurityhubConnectorV2ProviderNameJiraCloud</a>

---

##### `PutServiceNow` <a name="PutServiceNow" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putServiceNow"></a>

```go
func PutServiceNow(value SecurityhubConnectorV2ProviderNameServiceNow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow">SecurityhubConnectorV2ProviderNameServiceNow</a>

---

##### `ResetAzure` <a name="ResetAzure" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetAzure"></a>

```go
func ResetAzure()
```

##### `ResetJiraCloud` <a name="ResetJiraCloud" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetJiraCloud"></a>

```go
func ResetJiraCloud()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetServiceNow"></a>

```go
func ResetServiceNow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference">SecurityhubConnectorV2ProviderNameAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.jiraCloud">JiraCloud</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference">SecurityhubConnectorV2ProviderNameJiraCloudOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference">SecurityhubConnectorV2ProviderNameServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.azureInput">AzureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.jiraCloudInput">JiraCloudInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.azure"></a>

```go
func Azure() SecurityhubConnectorV2ProviderNameAzureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference">SecurityhubConnectorV2ProviderNameAzureOutputReference</a>

---

##### `JiraCloud`<sup>Required</sup> <a name="JiraCloud" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.jiraCloud"></a>

```go
func JiraCloud() SecurityhubConnectorV2ProviderNameJiraCloudOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference">SecurityhubConnectorV2ProviderNameJiraCloudOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.serviceNow"></a>

```go
func ServiceNow() SecurityhubConnectorV2ProviderNameServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference">SecurityhubConnectorV2ProviderNameServiceNowOutputReference</a>

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.azureInput"></a>

```go
func AzureInput() interface{}
```

- *Type:* interface{}

---

##### `JiraCloudInput`<sup>Optional</sup> <a name="JiraCloudInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.jiraCloudInput"></a>

```go
func JiraCloudInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.serviceNowInput"></a>

```go
func ServiceNowInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConnectorV2ProviderNameServiceNowOutputReference <a name="SecurityhubConnectorV2ProviderNameServiceNowOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconnectorv2"

securityhubconnectorv2.NewSecurityhubConnectorV2ProviderNameServiceNowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConnectorV2ProviderNameServiceNowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resetInstanceName">ResetInstanceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceName` <a name="ResetInstanceName" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resetInstanceName"></a>

```go
func ResetInstanceName()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.instanceNameInput">InstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.instanceNameInput"></a>

```go
func InstanceNameInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



