# `bedrockagentcoreCapacityProvider` Submodule <a name="`bedrockagentcoreCapacityProvider` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreCapacityProvider <a name="BedrockagentcoreCapacityProvider" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider awscc_bedrockagentcore_capacity_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProvider(scope Construct, id *string, config BedrockagentcoreCapacityProviderConfig) BedrockagentcoreCapacityProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig">BedrockagentcoreCapacityProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig">BedrockagentcoreCapacityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.putComputeConfiguration">PutComputeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.putPermissionsConfiguration">PutPermissionsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComputeConfiguration` <a name="PutComputeConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.putComputeConfiguration"></a>

```go
func PutComputeConfiguration(value BedrockagentcoreCapacityProviderComputeConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.putComputeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfiguration">BedrockagentcoreCapacityProviderComputeConfiguration</a>

---

##### `PutPermissionsConfiguration` <a name="PutPermissionsConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.putPermissionsConfiguration"></a>

```go
func PutPermissionsConfiguration(value BedrockagentcoreCapacityProviderPermissionsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.putPermissionsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfiguration">BedrockagentcoreCapacityProviderPermissionsConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreCapacityProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProvider_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BedrockagentcoreCapacityProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockagentcoreCapacityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockagentcoreCapacityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreCapacityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.capacityProviderId">CapacityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.computeConfiguration">ComputeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.permissionsConfiguration">PermissionsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference">BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList">BedrockagentcoreCapacityProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.computeConfigurationInput">ComputeConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.permissionsConfigurationInput">PermissionsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CapacityProviderId`<sup>Required</sup> <a name="CapacityProviderId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.capacityProviderId"></a>

```go
func CapacityProviderId() *string
```

- *Type:* *string

---

##### `ComputeConfiguration`<sup>Required</sup> <a name="ComputeConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.computeConfiguration"></a>

```go
func ComputeConfiguration() BedrockagentcoreCapacityProviderComputeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `PermissionsConfiguration`<sup>Required</sup> <a name="PermissionsConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.permissionsConfiguration"></a>

```go
func PermissionsConfiguration() BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference">BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.tags"></a>

```go
func Tags() BedrockagentcoreCapacityProviderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList">BedrockagentcoreCapacityProviderTagsList</a>

---

##### `ComputeConfigurationInput`<sup>Optional</sup> <a name="ComputeConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.computeConfigurationInput"></a>

```go
func ComputeConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PermissionsConfigurationInput`<sup>Optional</sup> <a name="PermissionsConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.permissionsConfigurationInput"></a>

```go
func PermissionsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreCapacityProviderComputeConfiguration <a name="BedrockagentcoreCapacityProviderComputeConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderComputeConfiguration {
	Ec2Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfiguration.property.ec2Configuration">Ec2Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration">BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration</a></code> | Configuration for EC2-based capacity. |

---

##### `Ec2Configuration`<sup>Required</sup> <a name="Ec2Configuration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfiguration.property.ec2Configuration"></a>

```go
Ec2Configuration BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration">BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration</a>

Configuration for EC2-based capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ec_2_configuration BedrockagentcoreCapacityProvider#ec_2_configuration}

---

### BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration {
	LaunchTemplateSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource,
	VpcConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration,
	LifecycleConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration,
	RootVolume: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume,
	Volumes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration.property.launchTemplateSource">LaunchTemplateSource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource</a></code> | How the launch template is specified. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration</a></code> | VPC configuration for launching EC2 instances. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration</a></code> | Configuration for managing the lifecycle of instances in a capacity provider. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume</a></code> | Customer-facing configuration for the (service-managed) root volume. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration.property.volumes">Volumes</a></code> | <code>interface{}</code> | Named persistent EBS volumes for this capacity provider. |

---

##### `LaunchTemplateSource`<sup>Required</sup> <a name="LaunchTemplateSource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration.property.launchTemplateSource"></a>

```go
LaunchTemplateSource BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource</a>

How the launch template is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#launch_template_source BedrockagentcoreCapacityProvider#launch_template_source}

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration.property.vpcConfiguration"></a>

```go
VpcConfiguration BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration</a>

VPC configuration for launching EC2 instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#vpc_configuration BedrockagentcoreCapacityProvider#vpc_configuration}

---

##### `LifecycleConfiguration`<sup>Optional</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration.property.lifecycleConfiguration"></a>

```go
LifecycleConfiguration BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration</a>

Configuration for managing the lifecycle of instances in a capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#lifecycle_configuration BedrockagentcoreCapacityProvider#lifecycle_configuration}

---

##### `RootVolume`<sup>Optional</sup> <a name="RootVolume" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration.property.rootVolume"></a>

```go
RootVolume BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume</a>

Customer-facing configuration for the (service-managed) root volume.

The service provisions the root volume at its own AMI size estimate plus FreeSpaceGiB, and pins the visible free space to FreeSpaceGiB with a filler file, so the space you are guaranteed does not change as the underlying AMI grows. The device name and the delete-on-termination behavior are service-owned and are not configurable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#root_volume BedrockagentcoreCapacityProvider#root_volume}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration.property.volumes"></a>

```go
Volumes interface{}
```

- *Type:* interface{}

Named persistent EBS volumes for this capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volumes BedrockagentcoreCapacityProvider#volumes}

---

### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource {
	LaunchParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource.property.launchParameters">LaunchParameters</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters</a></code> | Parameters for launching EC2 instances. |

---

##### `LaunchParameters`<sup>Required</sup> <a name="LaunchParameters" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource.property.launchParameters"></a>

```go
LaunchParameters BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters</a>

Parameters for launching EC2 instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#launch_parameters BedrockagentcoreCapacityProvider#launch_parameters}

---

### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters {
	InstanceRequirements: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements,
	OperatingSystem: *string,
	CapacityReservationSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification,
	EphemeralVolumes: interface{},
	InstanceProfileArn: *string,
	LicenseSpecifications: interface{},
	Monitoring: *string,
	PropagatedTags: *map[string]*string,
	SshKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements</a></code> | Requirements for EC2 instance types. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | The operating system and CPU architecture for the instances. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.capacityReservationSpecification">CapacityReservationSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification</a></code> | The Capacity Reservation targeting option. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.ephemeralVolumes">EphemeralVolumes</a></code> | <code>interface{}</code> | The block device mapping for ephemeral (instance store) volumes. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | The ARN of the IAM instance profile to associate with launched instances. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.licenseSpecifications">LicenseSpecifications</a></code> | <code>interface{}</code> | The license configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.monitoring">Monitoring</a></code> | <code>*string</code> | The monitoring level for the instance. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.propagatedTags">PropagatedTags</a></code> | <code>*map[string]*string</code> | Tags to apply to all EC2 resources (instances, volumes, and network interfaces) created by this capacity provider. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.sshKeyName">SshKeyName</a></code> | <code>*string</code> | The name of the SSH key pair to configure on instances for SSH connectivity. |

---

##### `InstanceRequirements`<sup>Required</sup> <a name="InstanceRequirements" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.instanceRequirements"></a>

```go
InstanceRequirements BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements</a>

Requirements for EC2 instance types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#instance_requirements BedrockagentcoreCapacityProvider#instance_requirements}

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.operatingSystem"></a>

```go
OperatingSystem *string
```

- *Type:* *string

The operating system and CPU architecture for the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#operating_system BedrockagentcoreCapacityProvider#operating_system}

---

##### `CapacityReservationSpecification`<sup>Optional</sup> <a name="CapacityReservationSpecification" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.capacityReservationSpecification"></a>

```go
CapacityReservationSpecification BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification</a>

The Capacity Reservation targeting option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_reservation_specification BedrockagentcoreCapacityProvider#capacity_reservation_specification}

---

##### `EphemeralVolumes`<sup>Optional</sup> <a name="EphemeralVolumes" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.ephemeralVolumes"></a>

```go
EphemeralVolumes interface{}
```

- *Type:* interface{}

The block device mapping for ephemeral (instance store) volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ephemeral_volumes BedrockagentcoreCapacityProvider#ephemeral_volumes}

---

##### `InstanceProfileArn`<sup>Optional</sup> <a name="InstanceProfileArn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.instanceProfileArn"></a>

```go
InstanceProfileArn *string
```

- *Type:* *string

The ARN of the IAM instance profile to associate with launched instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#instance_profile_arn BedrockagentcoreCapacityProvider#instance_profile_arn}

---

##### `LicenseSpecifications`<sup>Optional</sup> <a name="LicenseSpecifications" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.licenseSpecifications"></a>

```go
LicenseSpecifications interface{}
```

- *Type:* interface{}

The license configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#license_specifications BedrockagentcoreCapacityProvider#license_specifications}

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.monitoring"></a>

```go
Monitoring *string
```

- *Type:* *string

The monitoring level for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#monitoring BedrockagentcoreCapacityProvider#monitoring}

---

##### `PropagatedTags`<sup>Optional</sup> <a name="PropagatedTags" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.propagatedTags"></a>

```go
PropagatedTags *map[string]*string
```

- *Type:* *map[string]*string

Tags to apply to all EC2 resources (instances, volumes, and network interfaces) created by this capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#propagated_tags BedrockagentcoreCapacityProvider#propagated_tags}

---

##### `SshKeyName`<sup>Optional</sup> <a name="SshKeyName" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters.property.sshKeyName"></a>

```go
SshKeyName *string
```

- *Type:* *string

The name of the SSH key pair to configure on instances for SSH connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ssh_key_name BedrockagentcoreCapacityProvider#ssh_key_name}

---

### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification {
	CapacityReservationPreference: *string,
	CapacityReservationTarget: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>*string</code> | Indicates the instance's Capacity Reservation preferences. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget</a></code> | Information about the target Capacity Reservation or Capacity Reservation group. |

---

##### `CapacityReservationPreference`<sup>Optional</sup> <a name="CapacityReservationPreference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification.property.capacityReservationPreference"></a>

```go
CapacityReservationPreference *string
```

- *Type:* *string

Indicates the instance's Capacity Reservation preferences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_reservation_preference BedrockagentcoreCapacityProvider#capacity_reservation_preference}

---

##### `CapacityReservationTarget`<sup>Optional</sup> <a name="CapacityReservationTarget" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification.property.capacityReservationTarget"></a>

```go
CapacityReservationTarget BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget</a>

Information about the target Capacity Reservation or Capacity Reservation group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_reservation_target BedrockagentcoreCapacityProvider#capacity_reservation_target}

---

### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget {
	CapacityReservationId: *string,
	CapacityReservationResourceGroupArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | The ID of the Capacity Reservation in which to run the instance. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn">CapacityReservationResourceGroupArn</a></code> | <code>*string</code> | The ARN of the Capacity Reservation resource group in which to run the instance. |

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId"></a>

```go
CapacityReservationId *string
```

- *Type:* *string

The ID of the Capacity Reservation in which to run the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_reservation_id BedrockagentcoreCapacityProvider#capacity_reservation_id}

---

##### `CapacityReservationResourceGroupArn`<sup>Optional</sup> <a name="CapacityReservationResourceGroupArn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn"></a>

```go
CapacityReservationResourceGroupArn *string
```

- *Type:* *string

The ARN of the Capacity Reservation resource group in which to run the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_reservation_resource_group_arn BedrockagentcoreCapacityProvider#capacity_reservation_resource_group_arn}

---

### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes {
	DeviceName: *string,
	Ebs: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs,
	VirtualName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes.property.deviceName">DeviceName</a></code> | <code>*string</code> | The device name (for example, /dev/sdh or xvdh). |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs</a></code> | Parameters used to automatically set up EBS volumes when the instance is launched. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes.property.virtualName">VirtualName</a></code> | <code>*string</code> | The virtual device name (ephemeralN). |

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

The device name (for example, /dev/sdh or xvdh).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#device_name BedrockagentcoreCapacityProvider#device_name}

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes.property.ebs"></a>

```go
Ebs BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs</a>

Parameters used to automatically set up EBS volumes when the instance is launched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ebs BedrockagentcoreCapacityProvider#ebs}

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes.property.virtualName"></a>

```go
VirtualName *string
```

- *Type:* *string

The virtual device name (ephemeralN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#virtual_name BedrockagentcoreCapacityProvider#virtual_name}

---

### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs {
	EbsCardIndex: *f64,
	Encrypted: interface{},
	Iops: *f64,
	KmsKeyId: *string,
	SnapshotId: *string,
	Throughput: *f64,
	VolumeInitializationRate: *f64,
	VolumeSize: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.ebsCardIndex">EbsCardIndex</a></code> | <code>*f64</code> | The index of the EBS card. Applies to instances with multiple EBS cards. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Indicates whether the EBS volume is encrypted. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.iops">Iops</a></code> | <code>*f64</code> | The number of I/O operations per second (IOPS). |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Identifier of the customer managed KMS key to use for EBS encryption. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | The ID of the snapshot. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.throughput">Throughput</a></code> | <code>*f64</code> | The throughput to provision for a gp3 volume, in MiB/s. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.volumeInitializationRate">VolumeInitializationRate</a></code> | <code>*f64</code> | The rate at which the volume is initialized after creation, in MiB/s. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | The size of the volume, in GiBs. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.volumeType">VolumeType</a></code> | <code>*string</code> | The volume type. Defaults to gp3 if not specified. |

---

##### `EbsCardIndex`<sup>Optional</sup> <a name="EbsCardIndex" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.ebsCardIndex"></a>

```go
EbsCardIndex *f64
```

- *Type:* *f64

The index of the EBS card. Applies to instances with multiple EBS cards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ebs_card_index BedrockagentcoreCapacityProvider#ebs_card_index}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Indicates whether the EBS volume is encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#encrypted BedrockagentcoreCapacityProvider#encrypted}

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

The number of I/O operations per second (IOPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#iops BedrockagentcoreCapacityProvider#iops}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Identifier of the customer managed KMS key to use for EBS encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#kms_key_id BedrockagentcoreCapacityProvider#kms_key_id}

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.snapshotId"></a>

```go
SnapshotId *string
```

- *Type:* *string

The ID of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#snapshot_id BedrockagentcoreCapacityProvider#snapshot_id}

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

The throughput to provision for a gp3 volume, in MiB/s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#throughput BedrockagentcoreCapacityProvider#throughput}

---

##### `VolumeInitializationRate`<sup>Optional</sup> <a name="VolumeInitializationRate" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.volumeInitializationRate"></a>

```go
VolumeInitializationRate *f64
```

- *Type:* *f64

The rate at which the volume is initialized after creation, in MiB/s.

Supported only for volumes created from snapshots. If the snapshot is enabled for fast snapshot restore and a volume initialization rate is also specified, the volume is initialized at the specified rate instead of by fast snapshot restore. Valid range: 100-300 MiB/s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volume_initialization_rate BedrockagentcoreCapacityProvider#volume_initialization_rate}

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

The size of the volume, in GiBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volume_size BedrockagentcoreCapacityProvider#volume_size}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

The volume type. Defaults to gp3 if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volume_type BedrockagentcoreCapacityProvider#volume_type}

---

### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements {
	AllowedInstanceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>*[]*string</code> | List of allowed instance types. |

---

##### `AllowedInstanceTypes`<sup>Required</sup> <a name="AllowedInstanceTypes" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements.property.allowedInstanceTypes"></a>

```go
AllowedInstanceTypes *[]*string
```

- *Type:* *[]*string

List of allowed instance types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#allowed_instance_types BedrockagentcoreCapacityProvider#allowed_instance_types}

---

### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications {
	LicenseConfigurationArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications.property.licenseConfigurationArn">LicenseConfigurationArn</a></code> | <code>*string</code> | The ARN of the license configuration. |

---

##### `LicenseConfigurationArn`<sup>Optional</sup> <a name="LicenseConfigurationArn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications.property.licenseConfigurationArn"></a>

```go
LicenseConfigurationArn *string
```

- *Type:* *string

The ARN of the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#license_configuration_arn BedrockagentcoreCapacityProvider#license_configuration_arn}

---

### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration {
	IdleInstanceTimeout: *f64,
	MaxLifetime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration.property.idleInstanceTimeout">IdleInstanceTimeout</a></code> | <code>*f64</code> | The number of seconds an instance can remain idle before it is stopped. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration.property.maxLifetime">MaxLifetime</a></code> | <code>*f64</code> | Maximum lifetime for the instance in seconds. |

---

##### `IdleInstanceTimeout`<sup>Optional</sup> <a name="IdleInstanceTimeout" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration.property.idleInstanceTimeout"></a>

```go
IdleInstanceTimeout *f64
```

- *Type:* *f64

The number of seconds an instance can remain idle before it is stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#idle_instance_timeout BedrockagentcoreCapacityProvider#idle_instance_timeout}

---

##### `MaxLifetime`<sup>Optional</sup> <a name="MaxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration.property.maxLifetime"></a>

```go
MaxLifetime *f64
```

- *Type:* *f64

Maximum lifetime for the instance in seconds.

Once reached, instances will be automatically terminated regardless of activity. Default: 28800 seconds (8 hours). Maximum: 1209600 seconds (14 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#max_lifetime BedrockagentcoreCapacityProvider#max_lifetime}

---

### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume {
	Encrypted: interface{},
	FreeSpaceGiB: *f64,
	Iops: *f64,
	KmsKeyId: *string,
	Throughput: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Indicates whether the EBS volume is encrypted. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume.property.freeSpaceGiB">FreeSpaceGiB</a></code> | <code>*f64</code> | The free space guaranteed on the root volume, in GiB. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume.property.iops">Iops</a></code> | <code>*f64</code> | The number of IOPS to provision. Only valid for gp3, io1, and io2 volumes. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Identifier of the customer managed KMS key to use for EBS encryption. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume.property.throughput">Throughput</a></code> | <code>*f64</code> | The throughput to provision for a gp3 volume, in MiB/s. Valid range: 125-2000 MiB/s. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume.property.volumeType">VolumeType</a></code> | <code>*string</code> | The EBS volume type. Defaults to gp3 if not specified. |

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Indicates whether the EBS volume is encrypted.

Encrypted volumes can only be attached to instances that support Amazon EBS encryption. If you are creating a volume from a snapshot, you can't specify an encryption value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#encrypted BedrockagentcoreCapacityProvider#encrypted}

---

##### `FreeSpaceGiB`<sup>Optional</sup> <a name="FreeSpaceGiB" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume.property.freeSpaceGiB"></a>

```go
FreeSpaceGiB *f64
```

- *Type:* *f64

The free space guaranteed on the root volume, in GiB.

The service adds the operating system overhead on top of this value. Defaults to 8 GiB. The maximum is below the 65,536 GiB gp3 ceiling because the service adds the AMI size bucket on top of this value, and the resulting total must still be a provisionable gp3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#free_space_gi_b BedrockagentcoreCapacityProvider#free_space_gi_b}

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

The number of IOPS to provision. Only valid for gp3, io1, and io2 volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#iops BedrockagentcoreCapacityProvider#iops}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Identifier of the customer managed KMS key to use for EBS encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#kms_key_id BedrockagentcoreCapacityProvider#kms_key_id}

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

The throughput to provision for a gp3 volume, in MiB/s. Valid range: 125-2000 MiB/s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#throughput BedrockagentcoreCapacityProvider#throughput}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

The EBS volume type. Defaults to gp3 if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volume_type BedrockagentcoreCapacityProvider#volume_type}

---

### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes {
	EbsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes.property.ebsConfiguration">EbsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration</a></code> | Configuration for an EBS-backed persistent volume. |

---

##### `EbsConfiguration`<sup>Optional</sup> <a name="EbsConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes.property.ebsConfiguration"></a>

```go
EbsConfiguration BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration</a>

Configuration for an EBS-backed persistent volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ebs_configuration BedrockagentcoreCapacityProvider#ebs_configuration}

---

### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration {
	Encrypted: interface{},
	Iops: *f64,
	KmsKeyId: *string,
	Name: *string,
	SizeGiB: *f64,
	SnapshotId: *string,
	Throughput: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Whether to encrypt the volume. Defaults to true. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.property.iops">Iops</a></code> | <code>*f64</code> | The number of IOPS to provision. Only valid for gp3, io1, and io2 volumes. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Identifier of the KMS key to use for encryption. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.property.name">Name</a></code> | <code>*string</code> | The logical name of the volume, used to reference it when mounting. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.property.sizeGiB">SizeGiB</a></code> | <code>*f64</code> | The size of the volume in GiB. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | Optional EBS snapshot ID to initialize the volume from. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.property.throughput">Throughput</a></code> | <code>*f64</code> | The throughput in MiB/s. Only valid for gp3 volumes. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.property.volumeType">VolumeType</a></code> | <code>*string</code> | The EBS volume type. Defaults to gp3 if not specified. |

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Whether to encrypt the volume. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#encrypted BedrockagentcoreCapacityProvider#encrypted}

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

The number of IOPS to provision. Only valid for gp3, io1, and io2 volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#iops BedrockagentcoreCapacityProvider#iops}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Identifier of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#kms_key_id BedrockagentcoreCapacityProvider#kms_key_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.property.name"></a>

```go
Name *string
```

- *Type:* *string

The logical name of the volume, used to reference it when mounting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#name BedrockagentcoreCapacityProvider#name}

---

##### `SizeGiB`<sup>Optional</sup> <a name="SizeGiB" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.property.sizeGiB"></a>

```go
SizeGiB *f64
```

- *Type:* *f64

The size of the volume in GiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#size_gi_b BedrockagentcoreCapacityProvider#size_gi_b}

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.property.snapshotId"></a>

```go
SnapshotId *string
```

- *Type:* *string

Optional EBS snapshot ID to initialize the volume from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#snapshot_id BedrockagentcoreCapacityProvider#snapshot_id}

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

The throughput in MiB/s. Only valid for gp3 volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#throughput BedrockagentcoreCapacityProvider#throughput}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

The EBS volume type. Defaults to gp3 if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volume_type BedrockagentcoreCapacityProvider#volume_type}

---

### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration {
	SecurityGroups: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | The IDs of the security groups to associate with the instances. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration.property.subnets">Subnets</a></code> | <code>*[]*string</code> | The IDs of the subnets in which to launch instances. |

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

The IDs of the security groups to associate with the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#security_groups BedrockagentcoreCapacityProvider#security_groups}

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

The IDs of the subnets in which to launch instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#subnets BedrockagentcoreCapacityProvider#subnets}

---

### BedrockagentcoreCapacityProviderConfig <a name="BedrockagentcoreCapacityProviderConfig" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ComputeConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfiguration,
	Name: *string,
	PermissionsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfiguration,
	Description: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.computeConfiguration">ComputeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfiguration">BedrockagentcoreCapacityProviderComputeConfiguration</a></code> | The capacity configuration for the capacity provider. Defines the compute resources for this capacity provider. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.name">Name</a></code> | <code>*string</code> | The name of the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.permissionsConfiguration">PermissionsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfiguration">BedrockagentcoreCapacityProviderPermissionsConfiguration</a></code> | Configuration for permissions associated with a capacity provider. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to the capacity provider. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComputeConfiguration`<sup>Required</sup> <a name="ComputeConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.computeConfiguration"></a>

```go
ComputeConfiguration BedrockagentcoreCapacityProviderComputeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfiguration">BedrockagentcoreCapacityProviderComputeConfiguration</a>

The capacity configuration for the capacity provider. Defines the compute resources for this capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#compute_configuration BedrockagentcoreCapacityProvider#compute_configuration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#name BedrockagentcoreCapacityProvider#name}

---

##### `PermissionsConfiguration`<sup>Required</sup> <a name="PermissionsConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.permissionsConfiguration"></a>

```go
PermissionsConfiguration BedrockagentcoreCapacityProviderPermissionsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfiguration">BedrockagentcoreCapacityProviderPermissionsConfiguration</a>

Configuration for permissions associated with a capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#permissions_configuration BedrockagentcoreCapacityProvider#permissions_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#description BedrockagentcoreCapacityProvider#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#tags BedrockagentcoreCapacityProvider#tags}

---

### BedrockagentcoreCapacityProviderPermissionsConfiguration <a name="BedrockagentcoreCapacityProviderPermissionsConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderPermissionsConfiguration {
	CapacityProviderOperatorRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfiguration.property.capacityProviderOperatorRoleArn">CapacityProviderOperatorRoleArn</a></code> | <code>*string</code> | The ARN of the IAM role that operators use to manage the capacity provider. |

---

##### `CapacityProviderOperatorRoleArn`<sup>Required</sup> <a name="CapacityProviderOperatorRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfiguration.property.capacityProviderOperatorRoleArn"></a>

```go
CapacityProviderOperatorRoleArn *string
```

- *Type:* *string

The ARN of the IAM role that operators use to manage the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_provider_operator_role_arn BedrockagentcoreCapacityProvider#capacity_provider_operator_role_arn}

---

### BedrockagentcoreCapacityProviderTags <a name="BedrockagentcoreCapacityProviderTags" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

&bedrockagentcorecapacityprovider.BedrockagentcoreCapacityProviderTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTags.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#key BedrockagentcoreCapacityProvider#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#value BedrockagentcoreCapacityProvider#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId">ResetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn">ResetCapacityReservationResourceGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId"></a>

```go
func ResetCapacityReservationId()
```

##### `ResetCapacityReservationResourceGroupArn` <a name="ResetCapacityReservationResourceGroupArn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn"></a>

```go
func ResetCapacityReservationResourceGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput">CapacityReservationResourceGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">CapacityReservationResourceGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput"></a>

```go
func CapacityReservationIdInput() *string
```

- *Type:* *string

---

##### `CapacityReservationResourceGroupArnInput`<sup>Optional</sup> <a name="CapacityReservationResourceGroupArnInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput"></a>

```go
func CapacityReservationResourceGroupArnInput() *string
```

- *Type:* *string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```go
func CapacityReservationId() *string
```

- *Type:* *string

---

##### `CapacityReservationResourceGroupArn`<sup>Required</sup> <a name="CapacityReservationResourceGroupArn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```go
func CapacityReservationResourceGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.putCapacityReservationTarget">PutCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference">ResetCapacityReservationPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget">ResetCapacityReservationTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityReservationTarget` <a name="PutCapacityReservationTarget" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.putCapacityReservationTarget"></a>

```go
func PutCapacityReservationTarget(value BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `ResetCapacityReservationPreference` <a name="ResetCapacityReservationPreference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference"></a>

```go
func ResetCapacityReservationPreference()
```

##### `ResetCapacityReservationTarget` <a name="ResetCapacityReservationTarget" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget"></a>

```go
func ResetCapacityReservationTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput">CapacityReservationPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput">CapacityReservationTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationTarget`<sup>Required</sup> <a name="CapacityReservationTarget" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```go
func CapacityReservationTarget() BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `CapacityReservationPreferenceInput`<sup>Optional</sup> <a name="CapacityReservationPreferenceInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput"></a>

```go
func CapacityReservationPreferenceInput() *string
```

- *Type:* *string

---

##### `CapacityReservationTargetInput`<sup>Optional</sup> <a name="CapacityReservationTargetInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput"></a>

```go
func CapacityReservationTargetInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityReservationPreference`<sup>Required</sup> <a name="CapacityReservationPreference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```go
func CapacityReservationPreference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetEbsCardIndex">ResetEbsCardIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetVolumeInitializationRate">ResetVolumeInitializationRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEbsCardIndex` <a name="ResetEbsCardIndex" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetEbsCardIndex"></a>

```go
func ResetEbsCardIndex()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetSnapshotId"></a>

```go
func ResetSnapshotId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumeInitializationRate` <a name="ResetVolumeInitializationRate" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetVolumeInitializationRate"></a>

```go
func ResetVolumeInitializationRate()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.ebsCardIndexInput">EbsCardIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeInitializationRateInput">VolumeInitializationRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.ebsCardIndex">EbsCardIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeInitializationRate">VolumeInitializationRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EbsCardIndexInput`<sup>Optional</sup> <a name="EbsCardIndexInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.ebsCardIndexInput"></a>

```go
func EbsCardIndexInput() *f64
```

- *Type:* *f64

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.snapshotIdInput"></a>

```go
func SnapshotIdInput() *string
```

- *Type:* *string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `VolumeInitializationRateInput`<sup>Optional</sup> <a name="VolumeInitializationRateInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeInitializationRateInput"></a>

```go
func VolumeInitializationRateInput() *f64
```

- *Type:* *f64

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `EbsCardIndex`<sup>Required</sup> <a name="EbsCardIndex" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.ebsCardIndex"></a>

```go
func EbsCardIndex() *f64
```

- *Type:* *f64

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeInitializationRate`<sup>Required</sup> <a name="VolumeInitializationRate" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeInitializationRate"></a>

```go
func VolumeInitializationRate() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.get"></a>

```go
func Get(index *f64) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.resetVirtualName">ResetVirtualName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.putEbs"></a>

```go
func PutEbs(value BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs</a>

---

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.resetDeviceName"></a>

```go
func ResetDeviceName()
```

##### `ResetEbs` <a name="ResetEbs" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.resetEbs"></a>

```go
func ResetEbs()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.resetVirtualName"></a>

```go
func ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.ebsInput">EbsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.virtualName">VirtualName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.ebs"></a>

```go
func Ebs() BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.ebsInput"></a>

```go
func EbsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.virtualNameInput"></a>

```go
func VirtualNameInput() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.virtualName"></a>

```go
func VirtualName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.allowedInstanceTypesInput">AllowedInstanceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedInstanceTypesInput`<sup>Optional</sup> <a name="AllowedInstanceTypesInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.allowedInstanceTypesInput"></a>

```go
func AllowedInstanceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedInstanceTypes`<sup>Required</sup> <a name="AllowedInstanceTypes" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```go
func AllowedInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.get"></a>

```go
func Get(index *f64) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.resetLicenseConfigurationArn">ResetLicenseConfigurationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLicenseConfigurationArn` <a name="ResetLicenseConfigurationArn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.resetLicenseConfigurationArn"></a>

```go
func ResetLicenseConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.licenseConfigurationArnInput">LicenseConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.licenseConfigurationArn">LicenseConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LicenseConfigurationArnInput`<sup>Optional</sup> <a name="LicenseConfigurationArnInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.licenseConfigurationArnInput"></a>

```go
func LicenseConfigurationArnInput() *string
```

- *Type:* *string

---

##### `LicenseConfigurationArn`<sup>Required</sup> <a name="LicenseConfigurationArn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.licenseConfigurationArn"></a>

```go
func LicenseConfigurationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.putCapacityReservationSpecification">PutCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.putEphemeralVolumes">PutEphemeralVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.putInstanceRequirements">PutInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.putLicenseSpecifications">PutLicenseSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resetCapacityReservationSpecification">ResetCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resetEphemeralVolumes">ResetEphemeralVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resetInstanceProfileArn">ResetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resetLicenseSpecifications">ResetLicenseSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resetPropagatedTags">ResetPropagatedTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resetSshKeyName">ResetSshKeyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityReservationSpecification` <a name="PutCapacityReservationSpecification" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.putCapacityReservationSpecification"></a>

```go
func PutCapacityReservationSpecification(value BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.putCapacityReservationSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification</a>

---

##### `PutEphemeralVolumes` <a name="PutEphemeralVolumes" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.putEphemeralVolumes"></a>

```go
func PutEphemeralVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.putEphemeralVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInstanceRequirements` <a name="PutInstanceRequirements" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.putInstanceRequirements"></a>

```go
func PutInstanceRequirements(value BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.putInstanceRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements</a>

---

##### `PutLicenseSpecifications` <a name="PutLicenseSpecifications" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.putLicenseSpecifications"></a>

```go
func PutLicenseSpecifications(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.putLicenseSpecifications.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCapacityReservationSpecification` <a name="ResetCapacityReservationSpecification" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resetCapacityReservationSpecification"></a>

```go
func ResetCapacityReservationSpecification()
```

##### `ResetEphemeralVolumes` <a name="ResetEphemeralVolumes" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resetEphemeralVolumes"></a>

```go
func ResetEphemeralVolumes()
```

##### `ResetInstanceProfileArn` <a name="ResetInstanceProfileArn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resetInstanceProfileArn"></a>

```go
func ResetInstanceProfileArn()
```

##### `ResetLicenseSpecifications` <a name="ResetLicenseSpecifications" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resetLicenseSpecifications"></a>

```go
func ResetLicenseSpecifications()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resetMonitoring"></a>

```go
func ResetMonitoring()
```

##### `ResetPropagatedTags` <a name="ResetPropagatedTags" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resetPropagatedTags"></a>

```go
func ResetPropagatedTags()
```

##### `ResetSshKeyName` <a name="ResetSshKeyName" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.resetSshKeyName"></a>

```go
func ResetSshKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.capacityReservationSpecification">CapacityReservationSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.ephemeralVolumes">EphemeralVolumes</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.licenseSpecifications">LicenseSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.capacityReservationSpecificationInput">CapacityReservationSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.ephemeralVolumesInput">EphemeralVolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.instanceRequirementsInput">InstanceRequirementsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.licenseSpecificationsInput">LicenseSpecificationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.monitoringInput">MonitoringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.propagatedTagsInput">PropagatedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.sshKeyNameInput">SshKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.monitoring">Monitoring</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.propagatedTags">PropagatedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.sshKeyName">SshKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationSpecification`<sup>Required</sup> <a name="CapacityReservationSpecification" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.capacityReservationSpecification"></a>

```go
func CapacityReservationSpecification() BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference</a>

---

##### `EphemeralVolumes`<sup>Required</sup> <a name="EphemeralVolumes" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.ephemeralVolumes"></a>

```go
func EphemeralVolumes() BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList</a>

---

##### `InstanceRequirements`<sup>Required</sup> <a name="InstanceRequirements" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.instanceRequirements"></a>

```go
func InstanceRequirements() BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference</a>

---

##### `LicenseSpecifications`<sup>Required</sup> <a name="LicenseSpecifications" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.licenseSpecifications"></a>

```go
func LicenseSpecifications() BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList</a>

---

##### `CapacityReservationSpecificationInput`<sup>Optional</sup> <a name="CapacityReservationSpecificationInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.capacityReservationSpecificationInput"></a>

```go
func CapacityReservationSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `EphemeralVolumesInput`<sup>Optional</sup> <a name="EphemeralVolumesInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.ephemeralVolumesInput"></a>

```go
func EphemeralVolumesInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.instanceProfileArnInput"></a>

```go
func InstanceProfileArnInput() *string
```

- *Type:* *string

---

##### `InstanceRequirementsInput`<sup>Optional</sup> <a name="InstanceRequirementsInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.instanceRequirementsInput"></a>

```go
func InstanceRequirementsInput() interface{}
```

- *Type:* interface{}

---

##### `LicenseSpecificationsInput`<sup>Optional</sup> <a name="LicenseSpecificationsInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.licenseSpecificationsInput"></a>

```go
func LicenseSpecificationsInput() interface{}
```

- *Type:* interface{}

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.monitoringInput"></a>

```go
func MonitoringInput() *string
```

- *Type:* *string

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.operatingSystemInput"></a>

```go
func OperatingSystemInput() *string
```

- *Type:* *string

---

##### `PropagatedTagsInput`<sup>Optional</sup> <a name="PropagatedTagsInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.propagatedTagsInput"></a>

```go
func PropagatedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SshKeyNameInput`<sup>Optional</sup> <a name="SshKeyNameInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.sshKeyNameInput"></a>

```go
func SshKeyNameInput() *string
```

- *Type:* *string

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.instanceProfileArn"></a>

```go
func InstanceProfileArn() *string
```

- *Type:* *string

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.monitoring"></a>

```go
func Monitoring() *string
```

- *Type:* *string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.operatingSystem"></a>

```go
func OperatingSystem() *string
```

- *Type:* *string

---

##### `PropagatedTags`<sup>Required</sup> <a name="PropagatedTags" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.propagatedTags"></a>

```go
func PropagatedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SshKeyName`<sup>Required</sup> <a name="SshKeyName" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.sshKeyName"></a>

```go
func SshKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.putLaunchParameters">PutLaunchParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLaunchParameters` <a name="PutLaunchParameters" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.putLaunchParameters"></a>

```go
func PutLaunchParameters(value BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.putLaunchParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.launchParameters">LaunchParameters</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.launchParametersInput">LaunchParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchParameters`<sup>Required</sup> <a name="LaunchParameters" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.launchParameters"></a>

```go
func LaunchParameters() BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference</a>

---

##### `LaunchParametersInput`<sup>Optional</sup> <a name="LaunchParametersInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.launchParametersInput"></a>

```go
func LaunchParametersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.resetIdleInstanceTimeout">ResetIdleInstanceTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.resetMaxLifetime">ResetMaxLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleInstanceTimeout` <a name="ResetIdleInstanceTimeout" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.resetIdleInstanceTimeout"></a>

```go
func ResetIdleInstanceTimeout()
```

##### `ResetMaxLifetime` <a name="ResetMaxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.resetMaxLifetime"></a>

```go
func ResetMaxLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.idleInstanceTimeoutInput">IdleInstanceTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.maxLifetimeInput">MaxLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.idleInstanceTimeout">IdleInstanceTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.maxLifetime">MaxLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdleInstanceTimeoutInput`<sup>Optional</sup> <a name="IdleInstanceTimeoutInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.idleInstanceTimeoutInput"></a>

```go
func IdleInstanceTimeoutInput() *f64
```

- *Type:* *f64

---

##### `MaxLifetimeInput`<sup>Optional</sup> <a name="MaxLifetimeInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.maxLifetimeInput"></a>

```go
func MaxLifetimeInput() *f64
```

- *Type:* *f64

---

##### `IdleInstanceTimeout`<sup>Required</sup> <a name="IdleInstanceTimeout" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.idleInstanceTimeout"></a>

```go
func IdleInstanceTimeout() *f64
```

- *Type:* *f64

---

##### `MaxLifetime`<sup>Required</sup> <a name="MaxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.maxLifetime"></a>

```go
func MaxLifetime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.putLaunchTemplateSource">PutLaunchTemplateSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.putLifecycleConfiguration">PutLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.putRootVolume">PutRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.putVpcConfiguration">PutVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.resetLifecycleConfiguration">ResetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.resetRootVolume">ResetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLaunchTemplateSource` <a name="PutLaunchTemplateSource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.putLaunchTemplateSource"></a>

```go
func PutLaunchTemplateSource(value BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.putLaunchTemplateSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource</a>

---

##### `PutLifecycleConfiguration` <a name="PutLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.putLifecycleConfiguration"></a>

```go
func PutLifecycleConfiguration(value BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.putLifecycleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration</a>

---

##### `PutRootVolume` <a name="PutRootVolume" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.putRootVolume"></a>

```go
func PutRootVolume(value BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume</a>

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.putVolumes"></a>

```go
func PutVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.putVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVpcConfiguration` <a name="PutVpcConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.putVpcConfiguration"></a>

```go
func PutVpcConfiguration(value BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration</a>

---

##### `ResetLifecycleConfiguration` <a name="ResetLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.resetLifecycleConfiguration"></a>

```go
func ResetLifecycleConfiguration()
```

##### `ResetRootVolume` <a name="ResetRootVolume" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.resetRootVolume"></a>

```go
func ResetRootVolume()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.launchTemplateSource">LaunchTemplateSource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.launchTemplateSourceInput">LaunchTemplateSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.lifecycleConfigurationInput">LifecycleConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.rootVolumeInput">RootVolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.volumesInput">VolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.vpcConfigurationInput">VpcConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchTemplateSource`<sup>Required</sup> <a name="LaunchTemplateSource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.launchTemplateSource"></a>

```go
func LaunchTemplateSource() BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference</a>

---

##### `LifecycleConfiguration`<sup>Required</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.lifecycleConfiguration"></a>

```go
func LifecycleConfiguration() BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference</a>

---

##### `RootVolume`<sup>Required</sup> <a name="RootVolume" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.rootVolume"></a>

```go
func RootVolume() BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.volumes"></a>

```go
func Volumes() BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList</a>

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.vpcConfiguration"></a>

```go
func VpcConfiguration() BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference</a>

---

##### `LaunchTemplateSourceInput`<sup>Optional</sup> <a name="LaunchTemplateSourceInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.launchTemplateSourceInput"></a>

```go
func LaunchTemplateSourceInput() interface{}
```

- *Type:* interface{}

---

##### `LifecycleConfigurationInput`<sup>Optional</sup> <a name="LifecycleConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.lifecycleConfigurationInput"></a>

```go
func LifecycleConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RootVolumeInput`<sup>Optional</sup> <a name="RootVolumeInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.rootVolumeInput"></a>

```go
func RootVolumeInput() interface{}
```

- *Type:* interface{}

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.volumesInput"></a>

```go
func VolumesInput() interface{}
```

- *Type:* interface{}

---

##### `VpcConfigurationInput`<sup>Optional</sup> <a name="VpcConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.vpcConfigurationInput"></a>

```go
func VpcConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resetFreeSpaceGiB">ResetFreeSpaceGiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetFreeSpaceGiB` <a name="ResetFreeSpaceGiB" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resetFreeSpaceGiB"></a>

```go
func ResetFreeSpaceGiB()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.freeSpaceGiBInput">FreeSpaceGiBInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.freeSpaceGiB">FreeSpaceGiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `FreeSpaceGiBInput`<sup>Optional</sup> <a name="FreeSpaceGiBInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.freeSpaceGiBInput"></a>

```go
func FreeSpaceGiBInput() *f64
```

- *Type:* *f64

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `FreeSpaceGiB`<sup>Required</sup> <a name="FreeSpaceGiB" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.freeSpaceGiB"></a>

```go
func FreeSpaceGiB() *f64
```

- *Type:* *f64

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resetSizeGiB">ResetSizeGiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetSizeGiB` <a name="ResetSizeGiB" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resetSizeGiB"></a>

```go
func ResetSizeGiB()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resetSnapshotId"></a>

```go
func ResetSnapshotId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.sizeGiBInput">SizeGiBInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.sizeGiB">SizeGiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SizeGiBInput`<sup>Optional</sup> <a name="SizeGiBInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.sizeGiBInput"></a>

```go
func SizeGiBInput() *f64
```

- *Type:* *f64

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.snapshotIdInput"></a>

```go
func SnapshotIdInput() *string
```

- *Type:* *string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SizeGiB`<sup>Required</sup> <a name="SizeGiB" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.sizeGiB"></a>

```go
func SizeGiB() *f64
```

- *Type:* *f64

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.get"></a>

```go
func Get(index *f64) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.putEbsConfiguration">PutEbsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.resetEbsConfiguration">ResetEbsConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbsConfiguration` <a name="PutEbsConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.putEbsConfiguration"></a>

```go
func PutEbsConfiguration(value BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.putEbsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration</a>

---

##### `ResetEbsConfiguration` <a name="ResetEbsConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.resetEbsConfiguration"></a>

```go
func ResetEbsConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.ebsConfiguration">EbsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.ebsConfigurationInput">EbsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EbsConfiguration`<sup>Required</sup> <a name="EbsConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.ebsConfiguration"></a>

```go
func EbsConfiguration() BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference</a>

---

##### `EbsConfigurationInput`<sup>Optional</sup> <a name="EbsConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.ebsConfigurationInput"></a>

```go
func EbsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference <a name="BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderComputeConfigurationOutputReference <a name="BedrockagentcoreCapacityProviderComputeConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderComputeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreCapacityProviderComputeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.putEc2Configuration">PutEc2Configuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEc2Configuration` <a name="PutEc2Configuration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.putEc2Configuration"></a>

```go
func PutEc2Configuration(value BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.putEc2Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration">BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.ec2Configuration">Ec2Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.ec2ConfigurationInput">Ec2ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ec2Configuration`<sup>Required</sup> <a name="Ec2Configuration" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.ec2Configuration"></a>

```go
func Ec2Configuration() BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference">BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference</a>

---

##### `Ec2ConfigurationInput`<sup>Optional</sup> <a name="Ec2ConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.ec2ConfigurationInput"></a>

```go
func Ec2ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderComputeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference <a name="BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.capacityProviderOperatorRoleArnInput">CapacityProviderOperatorRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.capacityProviderOperatorRoleArn">CapacityProviderOperatorRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityProviderOperatorRoleArnInput`<sup>Optional</sup> <a name="CapacityProviderOperatorRoleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.capacityProviderOperatorRoleArnInput"></a>

```go
func CapacityProviderOperatorRoleArnInput() *string
```

- *Type:* *string

---

##### `CapacityProviderOperatorRoleArn`<sup>Required</sup> <a name="CapacityProviderOperatorRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.capacityProviderOperatorRoleArn"></a>

```go
func CapacityProviderOperatorRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderTagsList <a name="BedrockagentcoreCapacityProviderTagsList" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreCapacityProviderTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.get"></a>

```go
func Get(index *f64) BedrockagentcoreCapacityProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCapacityProviderTagsOutputReference <a name="BedrockagentcoreCapacityProviderTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorecapacityprovider"

bedrockagentcorecapacityprovider.NewBedrockagentcoreCapacityProviderTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreCapacityProviderTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCapacityProvider.BedrockagentcoreCapacityProviderTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



