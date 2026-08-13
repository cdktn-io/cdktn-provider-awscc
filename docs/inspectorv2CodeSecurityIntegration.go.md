# `inspectorv2CodeSecurityIntegration` Submodule <a name="`inspectorv2CodeSecurityIntegration` Submodule" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspectorv2CodeSecurityIntegration <a name="Inspectorv2CodeSecurityIntegration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration awscc_inspectorv2_code_security_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2codesecurityintegration"

inspectorv2codesecurityintegration.NewInspectorv2CodeSecurityIntegration(scope Construct, id *string, config Inspectorv2CodeSecurityIntegrationConfig) Inspectorv2CodeSecurityIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig">Inspectorv2CodeSecurityIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig">Inspectorv2CodeSecurityIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putCreateIntegrationDetails">PutCreateIntegrationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putUpdateIntegrationDetails">PutUpdateIntegrationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetCreateIntegrationDetails">ResetCreateIntegrationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetUpdateIntegrationDetails">ResetUpdateIntegrationDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCreateIntegrationDetails` <a name="PutCreateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putCreateIntegrationDetails"></a>

```go
func PutCreateIntegrationDetails(value Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putCreateIntegrationDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

---

##### `PutUpdateIntegrationDetails` <a name="PutUpdateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putUpdateIntegrationDetails"></a>

```go
func PutUpdateIntegrationDetails(value Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putUpdateIntegrationDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

---

##### `ResetCreateIntegrationDetails` <a name="ResetCreateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetCreateIntegrationDetails"></a>

```go
func ResetCreateIntegrationDetails()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetTags"></a>

```go
func ResetTags()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetType"></a>

```go
func ResetType()
```

##### `ResetUpdateIntegrationDetails` <a name="ResetUpdateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetUpdateIntegrationDetails"></a>

```go
func ResetUpdateIntegrationDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Inspectorv2CodeSecurityIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2codesecurityintegration"

inspectorv2codesecurityintegration.Inspectorv2CodeSecurityIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2codesecurityintegration"

inspectorv2codesecurityintegration.Inspectorv2CodeSecurityIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2codesecurityintegration"

inspectorv2codesecurityintegration.Inspectorv2CodeSecurityIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2codesecurityintegration"

inspectorv2codesecurityintegration.Inspectorv2CodeSecurityIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Inspectorv2CodeSecurityIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Inspectorv2CodeSecurityIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Inspectorv2CodeSecurityIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Inspectorv2CodeSecurityIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.authorizationUrl">AuthorizationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createIntegrationDetails">CreateIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.updateIntegrationDetails">UpdateIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createIntegrationDetailsInput">CreateIntegrationDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.updateIntegrationDetailsInput">UpdateIntegrationDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.authorizationUrl"></a>

```go
func AuthorizationUrl() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreateIntegrationDetails`<sup>Required</sup> <a name="CreateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createIntegrationDetails"></a>

```go
func CreateIntegrationDetails() Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `UpdateIntegrationDetails`<sup>Required</sup> <a name="UpdateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.updateIntegrationDetails"></a>

```go
func UpdateIntegrationDetails() Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference</a>

---

##### `CreateIntegrationDetailsInput`<sup>Optional</sup> <a name="CreateIntegrationDetailsInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createIntegrationDetailsInput"></a>

```go
func CreateIntegrationDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UpdateIntegrationDetailsInput`<sup>Optional</sup> <a name="UpdateIntegrationDetailsInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.updateIntegrationDetailsInput"></a>

```go
func UpdateIntegrationDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Inspectorv2CodeSecurityIntegrationConfig <a name="Inspectorv2CodeSecurityIntegrationConfig" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2codesecurityintegration"

&inspectorv2codesecurityintegration.Inspectorv2CodeSecurityIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CreateIntegrationDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails,
	Name: *string,
	Tags: *map[string]*string,
	Type: *string,
	UpdateIntegrationDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.createIntegrationDetails">CreateIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a></code> | Create Integration Details. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.name">Name</a></code> | <code>*string</code> | Code Security Integration name. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#tags Inspectorv2CodeSecurityIntegration#tags}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.type">Type</a></code> | <code>*string</code> | Integration Type. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.updateIntegrationDetails">UpdateIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a></code> | Update Integration Details. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateIntegrationDetails`<sup>Optional</sup> <a name="CreateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.createIntegrationDetails"></a>

```go
CreateIntegrationDetails Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

Create Integration Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#create_integration_details Inspectorv2CodeSecurityIntegration#create_integration_details}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Code Security Integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#name Inspectorv2CodeSecurityIntegration#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#tags Inspectorv2CodeSecurityIntegration#tags}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Integration Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#type Inspectorv2CodeSecurityIntegration#type}

---

##### `UpdateIntegrationDetails`<sup>Optional</sup> <a name="UpdateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.updateIntegrationDetails"></a>

```go
UpdateIntegrationDetails Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

Update Integration Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#update_integration_details Inspectorv2CodeSecurityIntegration#update_integration_details}

---

### Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails <a name="Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2codesecurityintegration"

&inspectorv2codesecurityintegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails {
	GitlabSelfManaged: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails.property.gitlabSelfManaged">GitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}. |

---

##### `GitlabSelfManaged`<sup>Optional</sup> <a name="GitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails.property.gitlabSelfManaged"></a>

```go
GitlabSelfManaged Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}.

---

### Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged <a name="Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2codesecurityintegration"

&inspectorv2codesecurityintegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged {
	AccessToken: *string,
	InstanceUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.property.accessToken">AccessToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#access_token Inspectorv2CodeSecurityIntegration#access_token}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.property.instanceUrl">InstanceUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#instance_url Inspectorv2CodeSecurityIntegration#instance_url}. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.property.accessToken"></a>

```go
AccessToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#access_token Inspectorv2CodeSecurityIntegration#access_token}.

---

##### `InstanceUrl`<sup>Optional</sup> <a name="InstanceUrl" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.property.instanceUrl"></a>

```go
InstanceUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#instance_url Inspectorv2CodeSecurityIntegration#instance_url}.

---

### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2codesecurityintegration"

&inspectorv2codesecurityintegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails {
	Github: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub,
	GitlabSelfManaged: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.property.github">Github</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#github Inspectorv2CodeSecurityIntegration#github}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.property.gitlabSelfManaged">GitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}. |

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.property.github"></a>

```go
Github Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#github Inspectorv2CodeSecurityIntegration#github}.

---

##### `GitlabSelfManaged`<sup>Optional</sup> <a name="GitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.property.gitlabSelfManaged"></a>

```go
GitlabSelfManaged Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}.

---

### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2codesecurityintegration"

&inspectorv2codesecurityintegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub {
	Code: *string,
	InstallationId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.property.code">Code</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#code Inspectorv2CodeSecurityIntegration#code}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.property.installationId">InstallationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#installation_id Inspectorv2CodeSecurityIntegration#installation_id}. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.property.code"></a>

```go
Code *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#code Inspectorv2CodeSecurityIntegration#code}.

---

##### `InstallationId`<sup>Optional</sup> <a name="InstallationId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.property.installationId"></a>

```go
InstallationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#installation_id Inspectorv2CodeSecurityIntegration#installation_id}.

---

### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2codesecurityintegration"

&inspectorv2codesecurityintegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged {
	AuthCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged.property.authCode">AuthCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#auth_code Inspectorv2CodeSecurityIntegration#auth_code}. |

---

##### `AuthCode`<sup>Optional</sup> <a name="AuthCode" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged.property.authCode"></a>

```go
AuthCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspectorv2_code_security_integration#auth_code Inspectorv2CodeSecurityIntegration#auth_code}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference <a name="Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2codesecurityintegration"

inspectorv2codesecurityintegration.NewInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resetInstanceUrl">ResetInstanceUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resetAccessToken"></a>

```go
func ResetAccessToken()
```

##### `ResetInstanceUrl` <a name="ResetInstanceUrl" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resetInstanceUrl"></a>

```go
func ResetInstanceUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrlInput">InstanceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrl">InstanceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessTokenInput"></a>

```go
func AccessTokenInput() *string
```

- *Type:* *string

---

##### `InstanceUrlInput`<sup>Optional</sup> <a name="InstanceUrlInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrlInput"></a>

```go
func InstanceUrlInput() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrl"></a>

```go
func InstanceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference <a name="Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2codesecurityintegration"

inspectorv2codesecurityintegration.NewInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.putGitlabSelfManaged">PutGitlabSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resetGitlabSelfManaged">ResetGitlabSelfManaged</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGitlabSelfManaged` <a name="PutGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.putGitlabSelfManaged"></a>

```go
func PutGitlabSelfManaged(value Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.putGitlabSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a>

---

##### `ResetGitlabSelfManaged` <a name="ResetGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resetGitlabSelfManaged"></a>

```go
func ResetGitlabSelfManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManaged">GitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManagedInput">GitlabSelfManagedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GitlabSelfManaged`<sup>Required</sup> <a name="GitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManaged"></a>

```go
func GitlabSelfManaged() Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference</a>

---

##### `GitlabSelfManagedInput`<sup>Optional</sup> <a name="GitlabSelfManagedInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManagedInput"></a>

```go
func GitlabSelfManagedInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2codesecurityintegration"

inspectorv2codesecurityintegration.NewInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resetInstallationId">ResetInstallationId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resetCode"></a>

```go
func ResetCode()
```

##### `ResetInstallationId` <a name="ResetInstallationId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resetInstallationId"></a>

```go
func ResetInstallationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.codeInput">CodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationIdInput">InstallationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationId">InstallationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.codeInput"></a>

```go
func CodeInput() *string
```

- *Type:* *string

---

##### `InstallationIdInput`<sup>Optional</sup> <a name="InstallationIdInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationIdInput"></a>

```go
func InstallationIdInput() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationId"></a>

```go
func InstallationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2codesecurityintegration"

inspectorv2codesecurityintegration.NewInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resetAuthCode">ResetAuthCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthCode` <a name="ResetAuthCode" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resetAuthCode"></a>

```go
func ResetAuthCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCodeInput">AuthCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCode">AuthCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthCodeInput`<sup>Optional</sup> <a name="AuthCodeInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCodeInput"></a>

```go
func AuthCodeInput() *string
```

- *Type:* *string

---

##### `AuthCode`<sup>Required</sup> <a name="AuthCode" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCode"></a>

```go
func AuthCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2codesecurityintegration"

inspectorv2codesecurityintegration.NewInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGitlabSelfManaged">PutGitlabSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resetGitlabSelfManaged">ResetGitlabSelfManaged</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGithub` <a name="PutGithub" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGithub"></a>

```go
func PutGithub(value Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGithub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a>

---

##### `PutGitlabSelfManaged` <a name="PutGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGitlabSelfManaged"></a>

```go
func PutGitlabSelfManaged(value Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGitlabSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a>

---

##### `ResetGithub` <a name="ResetGithub" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resetGithub"></a>

```go
func ResetGithub()
```

##### `ResetGitlabSelfManaged` <a name="ResetGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resetGitlabSelfManaged"></a>

```go
func ResetGitlabSelfManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.github">Github</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManaged">GitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.githubInput">GithubInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManagedInput">GitlabSelfManagedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.github"></a>

```go
func Github() Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference</a>

---

##### `GitlabSelfManaged`<sup>Required</sup> <a name="GitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManaged"></a>

```go
func GitlabSelfManaged() Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference</a>

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.githubInput"></a>

```go
func GithubInput() interface{}
```

- *Type:* interface{}

---

##### `GitlabSelfManagedInput`<sup>Optional</sup> <a name="GitlabSelfManagedInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManagedInput"></a>

```go
func GitlabSelfManagedInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



