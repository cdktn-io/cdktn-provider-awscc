# `redshiftRedshiftIdcApplication` Submodule <a name="`redshiftRedshiftIdcApplication` Submodule" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftRedshiftIdcApplication <a name="RedshiftRedshiftIdcApplication" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application awscc_redshift_redshift_idc_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.NewRedshiftRedshiftIdcApplication(scope Construct, id *string, config RedshiftRedshiftIdcApplicationConfig) RedshiftRedshiftIdcApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig">RedshiftRedshiftIdcApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig">RedshiftRedshiftIdcApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putAuthorizedTokenIssuerList">PutAuthorizedTokenIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putServiceIntegrations">PutServiceIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetApplicationType">ResetApplicationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetAuthorizedTokenIssuerList">ResetAuthorizedTokenIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetIdentityNamespace">ResetIdentityNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetServiceIntegrations">ResetServiceIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetSsoTagKeys">ResetSsoTagKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorizedTokenIssuerList` <a name="PutAuthorizedTokenIssuerList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putAuthorizedTokenIssuerList"></a>

```go
func PutAuthorizedTokenIssuerList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putAuthorizedTokenIssuerList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutServiceIntegrations` <a name="PutServiceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putServiceIntegrations"></a>

```go
func PutServiceIntegrations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putServiceIntegrations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplicationType` <a name="ResetApplicationType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetApplicationType"></a>

```go
func ResetApplicationType()
```

##### `ResetAuthorizedTokenIssuerList` <a name="ResetAuthorizedTokenIssuerList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetAuthorizedTokenIssuerList"></a>

```go
func ResetAuthorizedTokenIssuerList()
```

##### `ResetIdentityNamespace` <a name="ResetIdentityNamespace" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetIdentityNamespace"></a>

```go
func ResetIdentityNamespace()
```

##### `ResetServiceIntegrations` <a name="ResetServiceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetServiceIntegrations"></a>

```go
func ResetServiceIntegrations()
```

##### `ResetSsoTagKeys` <a name="ResetSsoTagKeys" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetSsoTagKeys"></a>

```go
func ResetSsoTagKeys()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftRedshiftIdcApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.RedshiftRedshiftIdcApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.RedshiftRedshiftIdcApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.RedshiftRedshiftIdcApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.RedshiftRedshiftIdcApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RedshiftRedshiftIdcApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RedshiftRedshiftIdcApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RedshiftRedshiftIdcApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftRedshiftIdcApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.authorizedTokenIssuerList">AuthorizedTokenIssuerList</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcManagedApplicationArn">IdcManagedApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcOnboardStatus">IdcOnboardStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationArn">RedshiftIdcApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.serviceIntegrations">ServiceIntegrations</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList">RedshiftRedshiftIdcApplicationServiceIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList">RedshiftRedshiftIdcApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.applicationTypeInput">ApplicationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.authorizedTokenIssuerListInput">AuthorizedTokenIssuerListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcDisplayNameInput">IdcDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcInstanceArnInput">IdcInstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.identityNamespaceInput">IdentityNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationNameInput">RedshiftIdcApplicationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.serviceIntegrationsInput">ServiceIntegrationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.ssoTagKeysInput">SsoTagKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.applicationType">ApplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcDisplayName">IdcDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.identityNamespace">IdentityNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationName">RedshiftIdcApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.ssoTagKeys">SsoTagKeys</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizedTokenIssuerList`<sup>Required</sup> <a name="AuthorizedTokenIssuerList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.authorizedTokenIssuerList"></a>

```go
func AuthorizedTokenIssuerList() RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcManagedApplicationArn`<sup>Required</sup> <a name="IdcManagedApplicationArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcManagedApplicationArn"></a>

```go
func IdcManagedApplicationArn() *string
```

- *Type:* *string

---

##### `IdcOnboardStatus`<sup>Required</sup> <a name="IdcOnboardStatus" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcOnboardStatus"></a>

```go
func IdcOnboardStatus() *string
```

- *Type:* *string

---

##### `RedshiftIdcApplicationArn`<sup>Required</sup> <a name="RedshiftIdcApplicationArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationArn"></a>

```go
func RedshiftIdcApplicationArn() *string
```

- *Type:* *string

---

##### `ServiceIntegrations`<sup>Required</sup> <a name="ServiceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.serviceIntegrations"></a>

```go
func ServiceIntegrations() RedshiftRedshiftIdcApplicationServiceIntegrationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList">RedshiftRedshiftIdcApplicationServiceIntegrationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tags"></a>

```go
func Tags() RedshiftRedshiftIdcApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList">RedshiftRedshiftIdcApplicationTagsList</a>

---

##### `ApplicationTypeInput`<sup>Optional</sup> <a name="ApplicationTypeInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.applicationTypeInput"></a>

```go
func ApplicationTypeInput() *string
```

- *Type:* *string

---

##### `AuthorizedTokenIssuerListInput`<sup>Optional</sup> <a name="AuthorizedTokenIssuerListInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.authorizedTokenIssuerListInput"></a>

```go
func AuthorizedTokenIssuerListInput() interface{}
```

- *Type:* interface{}

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `IdcDisplayNameInput`<sup>Optional</sup> <a name="IdcDisplayNameInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcDisplayNameInput"></a>

```go
func IdcDisplayNameInput() *string
```

- *Type:* *string

---

##### `IdcInstanceArnInput`<sup>Optional</sup> <a name="IdcInstanceArnInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcInstanceArnInput"></a>

```go
func IdcInstanceArnInput() *string
```

- *Type:* *string

---

##### `IdentityNamespaceInput`<sup>Optional</sup> <a name="IdentityNamespaceInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.identityNamespaceInput"></a>

```go
func IdentityNamespaceInput() *string
```

- *Type:* *string

---

##### `RedshiftIdcApplicationNameInput`<sup>Optional</sup> <a name="RedshiftIdcApplicationNameInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationNameInput"></a>

```go
func RedshiftIdcApplicationNameInput() *string
```

- *Type:* *string

---

##### `ServiceIntegrationsInput`<sup>Optional</sup> <a name="ServiceIntegrationsInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.serviceIntegrationsInput"></a>

```go
func ServiceIntegrationsInput() interface{}
```

- *Type:* interface{}

---

##### `SsoTagKeysInput`<sup>Optional</sup> <a name="SsoTagKeysInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.ssoTagKeysInput"></a>

```go
func SsoTagKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.applicationType"></a>

```go
func ApplicationType() *string
```

- *Type:* *string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `IdcDisplayName`<sup>Required</sup> <a name="IdcDisplayName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcDisplayName"></a>

```go
func IdcDisplayName() *string
```

- *Type:* *string

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcInstanceArn"></a>

```go
func IdcInstanceArn() *string
```

- *Type:* *string

---

##### `IdentityNamespace`<sup>Required</sup> <a name="IdentityNamespace" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.identityNamespace"></a>

```go
func IdentityNamespace() *string
```

- *Type:* *string

---

##### `RedshiftIdcApplicationName`<sup>Required</sup> <a name="RedshiftIdcApplicationName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationName"></a>

```go
func RedshiftIdcApplicationName() *string
```

- *Type:* *string

---

##### `SsoTagKeys`<sup>Required</sup> <a name="SsoTagKeys" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.ssoTagKeys"></a>

```go
func SsoTagKeys() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct <a name="RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

&redshiftredshiftidcapplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct {
	AuthorizedAudiencesList: *[]*string,
	TrustedTokenIssuerArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.property.authorizedAudiencesList">AuthorizedAudiencesList</a></code> | <code>*[]*string</code> | The list of audiences for the authorized token issuer. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.property.trustedTokenIssuerArn">TrustedTokenIssuerArn</a></code> | <code>*string</code> | The ARN for the authorized token issuer for integrating Amazon Redshift with IDC Identity Center. |

---

##### `AuthorizedAudiencesList`<sup>Optional</sup> <a name="AuthorizedAudiencesList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.property.authorizedAudiencesList"></a>

```go
AuthorizedAudiencesList *[]*string
```

- *Type:* *[]*string

The list of audiences for the authorized token issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#authorized_audiences_list RedshiftRedshiftIdcApplication#authorized_audiences_list}

---

##### `TrustedTokenIssuerArn`<sup>Optional</sup> <a name="TrustedTokenIssuerArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.property.trustedTokenIssuerArn"></a>

```go
TrustedTokenIssuerArn *string
```

- *Type:* *string

The ARN for the authorized token issuer for integrating Amazon Redshift with IDC Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#trusted_token_issuer_arn RedshiftRedshiftIdcApplication#trusted_token_issuer_arn}

---

### RedshiftRedshiftIdcApplicationConfig <a name="RedshiftRedshiftIdcApplicationConfig" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

&redshiftredshiftidcapplication.RedshiftRedshiftIdcApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IamRoleArn: *string,
	IdcDisplayName: *string,
	IdcInstanceArn: *string,
	RedshiftIdcApplicationName: *string,
	ApplicationType: *string,
	AuthorizedTokenIssuerList: interface{},
	IdentityNamespace: *string,
	ServiceIntegrations: interface{},
	SsoTagKeys: *[]*string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | The IAM role ARN for the Amazon Redshift IAM Identity Center application instance. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.idcDisplayName">IdcDisplayName</a></code> | <code>*string</code> | The display name for the Amazon Redshift IAM Identity Center application instance. It appears in the console. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>*string</code> | The Amazon resource name (ARN) of the IAM Identity Center instance where Amazon Redshift creates a new managed application. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.redshiftIdcApplicationName">RedshiftIdcApplicationName</a></code> | <code>*string</code> | The name of the Redshift application in IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.applicationType">ApplicationType</a></code> | <code>*string</code> | The type of application being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.authorizedTokenIssuerList">AuthorizedTokenIssuerList</a></code> | <code>interface{}</code> | The token issuer list for the Amazon Redshift IAM Identity Center application instance. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.identityNamespace">IdentityNamespace</a></code> | <code>*string</code> | The namespace for the Amazon Redshift IAM Identity Center application instance. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.serviceIntegrations">ServiceIntegrations</a></code> | <code>interface{}</code> | A collection of service integrations for the Redshift IAM Identity Center application. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.ssoTagKeys">SsoTagKeys</a></code> | <code>*[]*string</code> | A list of tag keys that Redshift Identity Center applications copy to IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

The IAM role ARN for the Amazon Redshift IAM Identity Center application instance.

It has the required permissions to be assumed and invoke the IDC Identity Center API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#iam_role_arn RedshiftRedshiftIdcApplication#iam_role_arn}

---

##### `IdcDisplayName`<sup>Required</sup> <a name="IdcDisplayName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.idcDisplayName"></a>

```go
IdcDisplayName *string
```

- *Type:* *string

The display name for the Amazon Redshift IAM Identity Center application instance. It appears in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#idc_display_name RedshiftRedshiftIdcApplication#idc_display_name}

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.idcInstanceArn"></a>

```go
IdcInstanceArn *string
```

- *Type:* *string

The Amazon resource name (ARN) of the IAM Identity Center instance where Amazon Redshift creates a new managed application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#idc_instance_arn RedshiftRedshiftIdcApplication#idc_instance_arn}

---

##### `RedshiftIdcApplicationName`<sup>Required</sup> <a name="RedshiftIdcApplicationName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.redshiftIdcApplicationName"></a>

```go
RedshiftIdcApplicationName *string
```

- *Type:* *string

The name of the Redshift application in IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#redshift_idc_application_name RedshiftRedshiftIdcApplication#redshift_idc_application_name}

---

##### `ApplicationType`<sup>Optional</sup> <a name="ApplicationType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.applicationType"></a>

```go
ApplicationType *string
```

- *Type:* *string

The type of application being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#application_type RedshiftRedshiftIdcApplication#application_type}

---

##### `AuthorizedTokenIssuerList`<sup>Optional</sup> <a name="AuthorizedTokenIssuerList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.authorizedTokenIssuerList"></a>

```go
AuthorizedTokenIssuerList interface{}
```

- *Type:* interface{}

The token issuer list for the Amazon Redshift IAM Identity Center application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#authorized_token_issuer_list RedshiftRedshiftIdcApplication#authorized_token_issuer_list}

---

##### `IdentityNamespace`<sup>Optional</sup> <a name="IdentityNamespace" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.identityNamespace"></a>

```go
IdentityNamespace *string
```

- *Type:* *string

The namespace for the Amazon Redshift IAM Identity Center application instance.

It determines which managed application verifies the connection token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#identity_namespace RedshiftRedshiftIdcApplication#identity_namespace}

---

##### `ServiceIntegrations`<sup>Optional</sup> <a name="ServiceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.serviceIntegrations"></a>

```go
ServiceIntegrations interface{}
```

- *Type:* interface{}

A collection of service integrations for the Redshift IAM Identity Center application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#service_integrations RedshiftRedshiftIdcApplication#service_integrations}

---

##### `SsoTagKeys`<sup>Optional</sup> <a name="SsoTagKeys" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.ssoTagKeys"></a>

```go
SsoTagKeys *[]*string
```

- *Type:* *[]*string

A list of tag keys that Redshift Identity Center applications copy to IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#sso_tag_keys RedshiftRedshiftIdcApplication#sso_tag_keys}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#tags RedshiftRedshiftIdcApplication#tags}

---

### RedshiftRedshiftIdcApplicationServiceIntegrations <a name="RedshiftRedshiftIdcApplicationServiceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

&redshiftredshiftidcapplication.RedshiftRedshiftIdcApplicationServiceIntegrations {
	LakeFormation: interface{},
	Redshift: interface{},
	S3AccessGrants: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.lakeFormation">LakeFormation</a></code> | <code>interface{}</code> | A list of scopes set up for Lake Formation integration. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.redshift">Redshift</a></code> | <code>interface{}</code> | A list of scopes set up for Amazon Redshift integration. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.s3AccessGrants">S3AccessGrants</a></code> | <code>interface{}</code> | A list of scopes set up for S3 Access Grants integration. |

---

##### `LakeFormation`<sup>Optional</sup> <a name="LakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.lakeFormation"></a>

```go
LakeFormation interface{}
```

- *Type:* interface{}

A list of scopes set up for Lake Formation integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#lake_formation RedshiftRedshiftIdcApplication#lake_formation}

---

##### `Redshift`<sup>Optional</sup> <a name="Redshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.redshift"></a>

```go
Redshift interface{}
```

- *Type:* interface{}

A list of scopes set up for Amazon Redshift integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#redshift RedshiftRedshiftIdcApplication#redshift}

---

##### `S3AccessGrants`<sup>Optional</sup> <a name="S3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.s3AccessGrants"></a>

```go
S3AccessGrants interface{}
```

- *Type:* interface{}

A list of scopes set up for S3 Access Grants integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#s3_access_grants RedshiftRedshiftIdcApplication#s3_access_grants}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

&redshiftredshiftidcapplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation {
	LakeFormationQuery: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation.property.lakeFormationQuery">LakeFormationQuery</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a></code> | The Lake Formation scope. |

---

##### `LakeFormationQuery`<sup>Optional</sup> <a name="LakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation.property.lakeFormationQuery"></a>

```go
LakeFormationQuery RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a>

The Lake Formation scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#lake_formation_query RedshiftRedshiftIdcApplication#lake_formation_query}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

&redshiftredshiftidcapplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery {
	Authorization: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery.property.authorization">Authorization</a></code> | <code>*string</code> | Determines whether the query scope is enabled or disabled. |

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Determines whether the query scope is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#authorization RedshiftRedshiftIdcApplication#authorization}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

&redshiftredshiftidcapplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift {
	Connect: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift.property.connect">Connect</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a></code> | The Amazon Redshift connect integration scope. |

---

##### `Connect`<sup>Optional</sup> <a name="Connect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift.property.connect"></a>

```go
Connect RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a>

The Amazon Redshift connect integration scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#connect RedshiftRedshiftIdcApplication#connect}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

&redshiftredshiftidcapplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect {
	Authorization: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect.property.authorization">Authorization</a></code> | <code>*string</code> | Determines whether the Amazon Redshift connect integration is enabled or disabled. |

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Determines whether the Amazon Redshift connect integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#authorization RedshiftRedshiftIdcApplication#authorization}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

&redshiftredshiftidcapplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants {
	ReadWriteAccess: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants.property.readWriteAccess">ReadWriteAccess</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a></code> | The S3 Access Grants scope. |

---

##### `ReadWriteAccess`<sup>Optional</sup> <a name="ReadWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants.property.readWriteAccess"></a>

```go
ReadWriteAccess RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a>

The S3 Access Grants scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#read_write_access RedshiftRedshiftIdcApplication#read_write_access}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

&redshiftredshiftidcapplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess {
	Authorization: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess.property.authorization">Authorization</a></code> | <code>*string</code> | Determines whether the read/write scope is enabled or disabled. |

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Determines whether the read/write scope is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#authorization RedshiftRedshiftIdcApplication#authorization}

---

### RedshiftRedshiftIdcApplicationTags <a name="RedshiftRedshiftIdcApplicationTags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

&redshiftredshiftidcapplication.RedshiftRedshiftIdcApplicationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#key RedshiftRedshiftIdcApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#value RedshiftRedshiftIdcApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList <a name="RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.NewRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get"></a>

```go
func Get(index *f64) RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference <a name="RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.NewRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resetAuthorizedAudiencesList">ResetAuthorizedAudiencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resetTrustedTokenIssuerArn">ResetTrustedTokenIssuerArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizedAudiencesList` <a name="ResetAuthorizedAudiencesList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resetAuthorizedAudiencesList"></a>

```go
func ResetAuthorizedAudiencesList()
```

##### `ResetTrustedTokenIssuerArn` <a name="ResetTrustedTokenIssuerArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resetTrustedTokenIssuerArn"></a>

```go
func ResetTrustedTokenIssuerArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesListInput">AuthorizedAudiencesListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArnInput">TrustedTokenIssuerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesList">AuthorizedAudiencesList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArn">TrustedTokenIssuerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizedAudiencesListInput`<sup>Optional</sup> <a name="AuthorizedAudiencesListInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesListInput"></a>

```go
func AuthorizedAudiencesListInput() *[]*string
```

- *Type:* *[]*string

---

##### `TrustedTokenIssuerArnInput`<sup>Optional</sup> <a name="TrustedTokenIssuerArnInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArnInput"></a>

```go
func TrustedTokenIssuerArnInput() *string
```

- *Type:* *string

---

##### `AuthorizedAudiencesList`<sup>Required</sup> <a name="AuthorizedAudiencesList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesList"></a>

```go
func AuthorizedAudiencesList() *[]*string
```

- *Type:* *[]*string

---

##### `TrustedTokenIssuerArn`<sup>Required</sup> <a name="TrustedTokenIssuerArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArn"></a>

```go
func TrustedTokenIssuerArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.NewRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resetAuthorization">ResetAuthorization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resetAuthorization"></a>

```go
func ResetAuthorization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.NewRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get"></a>

```go
func Get(index *f64) RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.NewRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.putLakeFormationQuery">PutLakeFormationQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resetLakeFormationQuery">ResetLakeFormationQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLakeFormationQuery` <a name="PutLakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.putLakeFormationQuery"></a>

```go
func PutLakeFormationQuery(value RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.putLakeFormationQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a>

---

##### `ResetLakeFormationQuery` <a name="ResetLakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resetLakeFormationQuery"></a>

```go
func ResetLakeFormationQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQuery">LakeFormationQuery</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQueryInput">LakeFormationQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LakeFormationQuery`<sup>Required</sup> <a name="LakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQuery"></a>

```go
func LakeFormationQuery() RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference</a>

---

##### `LakeFormationQueryInput`<sup>Optional</sup> <a name="LakeFormationQueryInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQueryInput"></a>

```go
func LakeFormationQueryInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsList <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.NewRedshiftRedshiftIdcApplicationServiceIntegrationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftRedshiftIdcApplicationServiceIntegrationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.get"></a>

```go
func Get(index *f64) RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.NewRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putLakeFormation">PutLakeFormation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putRedshift">PutRedshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putS3AccessGrants">PutS3AccessGrants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetLakeFormation">ResetLakeFormation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetRedshift">ResetRedshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetS3AccessGrants">ResetS3AccessGrants</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLakeFormation` <a name="PutLakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putLakeFormation"></a>

```go
func PutLakeFormation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putLakeFormation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRedshift` <a name="PutRedshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putRedshift"></a>

```go
func PutRedshift(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putRedshift.parameter.value"></a>

- *Type:* interface{}

---

##### `PutS3AccessGrants` <a name="PutS3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putS3AccessGrants"></a>

```go
func PutS3AccessGrants(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putS3AccessGrants.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLakeFormation` <a name="ResetLakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetLakeFormation"></a>

```go
func ResetLakeFormation()
```

##### `ResetRedshift` <a name="ResetRedshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetRedshift"></a>

```go
func ResetRedshift()
```

##### `ResetS3AccessGrants` <a name="ResetS3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetS3AccessGrants"></a>

```go
func ResetS3AccessGrants()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormation">LakeFormation</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshift">Redshift</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrants">S3AccessGrants</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormationInput">LakeFormationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshiftInput">RedshiftInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrantsInput">S3AccessGrantsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LakeFormation`<sup>Required</sup> <a name="LakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormation"></a>

```go
func LakeFormation() RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList</a>

---

##### `Redshift`<sup>Required</sup> <a name="Redshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshift"></a>

```go
func Redshift() RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList</a>

---

##### `S3AccessGrants`<sup>Required</sup> <a name="S3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrants"></a>

```go
func S3AccessGrants() RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList</a>

---

##### `LakeFormationInput`<sup>Optional</sup> <a name="LakeFormationInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormationInput"></a>

```go
func LakeFormationInput() interface{}
```

- *Type:* interface{}

---

##### `RedshiftInput`<sup>Optional</sup> <a name="RedshiftInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshiftInput"></a>

```go
func RedshiftInput() interface{}
```

- *Type:* interface{}

---

##### `S3AccessGrantsInput`<sup>Optional</sup> <a name="S3AccessGrantsInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrantsInput"></a>

```go
func S3AccessGrantsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.NewRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resetAuthorization">ResetAuthorization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resetAuthorization"></a>

```go
func ResetAuthorization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.NewRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get"></a>

```go
func Get(index *f64) RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.NewRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.putConnect">PutConnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resetConnect">ResetConnect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnect` <a name="PutConnect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.putConnect"></a>

```go
func PutConnect(value RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.putConnect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a>

---

##### `ResetConnect` <a name="ResetConnect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resetConnect"></a>

```go
func ResetConnect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connect">Connect</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connectInput">ConnectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Connect`<sup>Required</sup> <a name="Connect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connect"></a>

```go
func Connect() RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference</a>

---

##### `ConnectInput`<sup>Optional</sup> <a name="ConnectInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connectInput"></a>

```go
func ConnectInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.NewRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get"></a>

```go
func Get(index *f64) RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.NewRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.putReadWriteAccess">PutReadWriteAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resetReadWriteAccess">ResetReadWriteAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReadWriteAccess` <a name="PutReadWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.putReadWriteAccess"></a>

```go
func PutReadWriteAccess(value RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.putReadWriteAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a>

---

##### `ResetReadWriteAccess` <a name="ResetReadWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resetReadWriteAccess"></a>

```go
func ResetReadWriteAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccess">ReadWriteAccess</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccessInput">ReadWriteAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadWriteAccess`<sup>Required</sup> <a name="ReadWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccess"></a>

```go
func ReadWriteAccess() RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference</a>

---

##### `ReadWriteAccessInput`<sup>Optional</sup> <a name="ReadWriteAccessInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccessInput"></a>

```go
func ReadWriteAccessInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.NewRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resetAuthorization">ResetAuthorization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resetAuthorization"></a>

```go
func ResetAuthorization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftRedshiftIdcApplicationTagsList <a name="RedshiftRedshiftIdcApplicationTagsList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.NewRedshiftRedshiftIdcApplicationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftRedshiftIdcApplicationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.get"></a>

```go
func Get(index *f64) RedshiftRedshiftIdcApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftRedshiftIdcApplicationTagsOutputReference <a name="RedshiftRedshiftIdcApplicationTagsOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftredshiftidcapplication"

redshiftredshiftidcapplication.NewRedshiftRedshiftIdcApplicationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftRedshiftIdcApplicationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



