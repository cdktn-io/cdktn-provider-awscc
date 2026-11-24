# `apiportalOrganizationDiscoveryConfiguration` Submodule <a name="`apiportalOrganizationDiscoveryConfiguration` Submodule" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalOrganizationDiscoveryConfiguration <a name="ApiportalOrganizationDiscoveryConfiguration" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration awscc_apiportal_organization_discovery_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalorganizationdiscoveryconfiguration"

apiportalorganizationdiscoveryconfiguration.NewApiportalOrganizationDiscoveryConfiguration(scope Construct, id *string, config ApiportalOrganizationDiscoveryConfigurationConfig) ApiportalOrganizationDiscoveryConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig">ApiportalOrganizationDiscoveryConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig">ApiportalOrganizationDiscoveryConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putDiscoveryFilters">PutDiscoveryFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFeatures">ResetDiscoveryFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFilters">ResetDiscoveryFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDiscoveryFilters` <a name="PutDiscoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putDiscoveryFilters"></a>

```go
func PutDiscoveryFilters(value ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putDiscoveryFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDiscoveryFeatures` <a name="ResetDiscoveryFeatures" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFeatures"></a>

```go
func ResetDiscoveryFeatures()
```

##### `ResetDiscoveryFilters` <a name="ResetDiscoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFilters"></a>

```go
func ResetDiscoveryFilters()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiportalOrganizationDiscoveryConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalorganizationdiscoveryconfiguration"

apiportalorganizationdiscoveryconfiguration.ApiportalOrganizationDiscoveryConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalorganizationdiscoveryconfiguration"

apiportalorganizationdiscoveryconfiguration.ApiportalOrganizationDiscoveryConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalorganizationdiscoveryconfiguration"

apiportalorganizationdiscoveryconfiguration.ApiportalOrganizationDiscoveryConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalorganizationdiscoveryconfiguration"

apiportalorganizationdiscoveryconfiguration.ApiportalOrganizationDiscoveryConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApiportalOrganizationDiscoveryConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiportalOrganizationDiscoveryConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiportalOrganizationDiscoveryConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalOrganizationDiscoveryConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryConfigurationStatus">DiscoveryConfigurationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFilters">DiscoveryFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList">ApiportalOrganizationDiscoveryConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeaturesInput">DiscoveryFeaturesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFiltersInput">DiscoveryFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySourcesInput">DiscoverySourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeatures">DiscoveryFeatures</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySources">DiscoverySources</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DiscoveryConfigurationStatus`<sup>Required</sup> <a name="DiscoveryConfigurationStatus" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryConfigurationStatus"></a>

```go
func DiscoveryConfigurationStatus() *string
```

- *Type:* *string

---

##### `DiscoveryFilters`<sup>Required</sup> <a name="DiscoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFilters"></a>

```go
func DiscoveryFilters() ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tags"></a>

```go
func Tags() ApiportalOrganizationDiscoveryConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList">ApiportalOrganizationDiscoveryConfigurationTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `DiscoveryFeaturesInput`<sup>Optional</sup> <a name="DiscoveryFeaturesInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeaturesInput"></a>

```go
func DiscoveryFeaturesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DiscoveryFiltersInput`<sup>Optional</sup> <a name="DiscoveryFiltersInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFiltersInput"></a>

```go
func DiscoveryFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `DiscoverySourcesInput`<sup>Optional</sup> <a name="DiscoverySourcesInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySourcesInput"></a>

```go
func DiscoverySourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DiscoveryFeatures`<sup>Required</sup> <a name="DiscoveryFeatures" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeatures"></a>

```go
func DiscoveryFeatures() *[]*string
```

- *Type:* *[]*string

---

##### `DiscoverySources`<sup>Required</sup> <a name="DiscoverySources" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySources"></a>

```go
func DiscoverySources() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalOrganizationDiscoveryConfigurationConfig <a name="ApiportalOrganizationDiscoveryConfigurationConfig" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalorganizationdiscoveryconfiguration"

&apiportalorganizationdiscoveryconfiguration.ApiportalOrganizationDiscoveryConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DiscoverySources: *[]*string,
	DiscoveryFeatures: *[]*string,
	DiscoveryFilters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoverySources">DiscoverySources</a></code> | <code>*[]*string</code> | The AWS services whose resources are scanned to discover APIs. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFeatures">DiscoveryFeatures</a></code> | <code>*[]*string</code> | Optional discovery capabilities to enable. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFilters">DiscoveryFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a></code> | Scopes organization-wide discovery. Exactly one of ExclusionFilters or InclusionFilters is set. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with the organization discovery configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DiscoverySources`<sup>Required</sup> <a name="DiscoverySources" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoverySources"></a>

```go
DiscoverySources *[]*string
```

- *Type:* *[]*string

The AWS services whose resources are scanned to discover APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_sources ApiportalOrganizationDiscoveryConfiguration#discovery_sources}

---

##### `DiscoveryFeatures`<sup>Optional</sup> <a name="DiscoveryFeatures" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFeatures"></a>

```go
DiscoveryFeatures *[]*string
```

- *Type:* *[]*string

Optional discovery capabilities to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_features ApiportalOrganizationDiscoveryConfiguration#discovery_features}

---

##### `DiscoveryFilters`<sup>Optional</sup> <a name="DiscoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFilters"></a>

```go
DiscoveryFilters ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

Scopes organization-wide discovery. Exactly one of ExclusionFilters or InclusionFilters is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_filters ApiportalOrganizationDiscoveryConfiguration#discovery_filters}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with the organization discovery configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#tags ApiportalOrganizationDiscoveryConfiguration#tags}

---

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalorganizationdiscoveryconfiguration"

&apiportalorganizationdiscoveryconfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters {
	ExclusionFilters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters,
	InclusionFilters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.exclusionFilters">ExclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a></code> | Resources matching any of these filters are excluded from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.inclusionFilters">InclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a></code> | Only resources matching any of these filters are included in discovery. |

---

##### `ExclusionFilters`<sup>Optional</sup> <a name="ExclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.exclusionFilters"></a>

```go
ExclusionFilters ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

Resources matching any of these filters are excluded from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#exclusion_filters ApiportalOrganizationDiscoveryConfiguration#exclusion_filters}

---

##### `InclusionFilters`<sup>Optional</sup> <a name="InclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.inclusionFilters"></a>

```go
InclusionFilters ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

Only resources matching any of these filters are included in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#inclusion_filters ApiportalOrganizationDiscoveryConfiguration#inclusion_filters}

---

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalorganizationdiscoveryconfiguration"

&apiportalorganizationdiscoveryconfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters {
	AccountIds: *[]*string,
	OrganizationalUnitIds: *[]*string,
	ResourceArns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | AWS account IDs to exclude from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.organizationalUnitIds">OrganizationalUnitIds</a></code> | <code>*[]*string</code> | Organizational unit IDs to exclude from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.resourceArns">ResourceArns</a></code> | <code>*[]*string</code> | Resource ARNs to exclude from discovery. |

---

##### `AccountIds`<sup>Optional</sup> <a name="AccountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.accountIds"></a>

```go
AccountIds *[]*string
```

- *Type:* *[]*string

AWS account IDs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#account_ids ApiportalOrganizationDiscoveryConfiguration#account_ids}

---

##### `OrganizationalUnitIds`<sup>Optional</sup> <a name="OrganizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.organizationalUnitIds"></a>

```go
OrganizationalUnitIds *[]*string
```

- *Type:* *[]*string

Organizational unit IDs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#organizational_unit_ids ApiportalOrganizationDiscoveryConfiguration#organizational_unit_ids}

---

##### `ResourceArns`<sup>Optional</sup> <a name="ResourceArns" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.resourceArns"></a>

```go
ResourceArns *[]*string
```

- *Type:* *[]*string

Resource ARNs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#resource_arns ApiportalOrganizationDiscoveryConfiguration#resource_arns}

---

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalorganizationdiscoveryconfiguration"

&apiportalorganizationdiscoveryconfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters {
	AccountIds: *[]*string,
	OrganizationalUnitIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | AWS account IDs to include in discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.organizationalUnitIds">OrganizationalUnitIds</a></code> | <code>*[]*string</code> | Organizational unit IDs to include in discovery. |

---

##### `AccountIds`<sup>Optional</sup> <a name="AccountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.accountIds"></a>

```go
AccountIds *[]*string
```

- *Type:* *[]*string

AWS account IDs to include in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#account_ids ApiportalOrganizationDiscoveryConfiguration#account_ids}

---

##### `OrganizationalUnitIds`<sup>Optional</sup> <a name="OrganizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.organizationalUnitIds"></a>

```go
OrganizationalUnitIds *[]*string
```

- *Type:* *[]*string

Organizational unit IDs to include in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#organizational_unit_ids ApiportalOrganizationDiscoveryConfiguration#organizational_unit_ids}

---

### ApiportalOrganizationDiscoveryConfigurationTags <a name="ApiportalOrganizationDiscoveryConfigurationTags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalorganizationdiscoveryconfiguration"

&apiportalorganizationdiscoveryconfiguration.ApiportalOrganizationDiscoveryConfigurationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#key ApiportalOrganizationDiscoveryConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#value ApiportalOrganizationDiscoveryConfiguration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#key ApiportalOrganizationDiscoveryConfiguration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#value ApiportalOrganizationDiscoveryConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalorganizationdiscoveryconfiguration"

apiportalorganizationdiscoveryconfiguration.NewApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetAccountIds">ResetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetOrganizationalUnitIds">ResetOrganizationalUnitIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetResourceArns">ResetResourceArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountIds` <a name="ResetAccountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetAccountIds"></a>

```go
func ResetAccountIds()
```

##### `ResetOrganizationalUnitIds` <a name="ResetOrganizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetOrganizationalUnitIds"></a>

```go
func ResetOrganizationalUnitIds()
```

##### `ResetResourceArns` <a name="ResetResourceArns" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetResourceArns"></a>

```go
func ResetResourceArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIdsInput">OrganizationalUnitIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArnsInput">ResourceArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIds">OrganizationalUnitIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArns">ResourceArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIdsInput"></a>

```go
func AccountIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationalUnitIdsInput`<sup>Optional</sup> <a name="OrganizationalUnitIdsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIdsInput"></a>

```go
func OrganizationalUnitIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceArnsInput`<sup>Optional</sup> <a name="ResourceArnsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArnsInput"></a>

```go
func ResourceArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIds"></a>

```go
func AccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationalUnitIds`<sup>Required</sup> <a name="OrganizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIds"></a>

```go
func OrganizationalUnitIds() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceArns`<sup>Required</sup> <a name="ResourceArns" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArns"></a>

```go
func ResourceArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalorganizationdiscoveryconfiguration"

apiportalorganizationdiscoveryconfiguration.NewApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetAccountIds">ResetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetOrganizationalUnitIds">ResetOrganizationalUnitIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountIds` <a name="ResetAccountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetAccountIds"></a>

```go
func ResetAccountIds()
```

##### `ResetOrganizationalUnitIds` <a name="ResetOrganizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetOrganizationalUnitIds"></a>

```go
func ResetOrganizationalUnitIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIdsInput">OrganizationalUnitIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIds">OrganizationalUnitIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIdsInput"></a>

```go
func AccountIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationalUnitIdsInput`<sup>Optional</sup> <a name="OrganizationalUnitIdsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIdsInput"></a>

```go
func OrganizationalUnitIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIds"></a>

```go
func AccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationalUnitIds`<sup>Required</sup> <a name="OrganizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIds"></a>

```go
func OrganizationalUnitIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalorganizationdiscoveryconfiguration"

apiportalorganizationdiscoveryconfiguration.NewApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putExclusionFilters">PutExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putInclusionFilters">PutInclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetExclusionFilters">ResetExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetInclusionFilters">ResetInclusionFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusionFilters` <a name="PutExclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putExclusionFilters"></a>

```go
func PutExclusionFilters(value ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putExclusionFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

---

##### `PutInclusionFilters` <a name="PutInclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putInclusionFilters"></a>

```go
func PutInclusionFilters(value ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putInclusionFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

---

##### `ResetExclusionFilters` <a name="ResetExclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetExclusionFilters"></a>

```go
func ResetExclusionFilters()
```

##### `ResetInclusionFilters` <a name="ResetInclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetInclusionFilters"></a>

```go
func ResetInclusionFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFilters">ExclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFilters">InclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFiltersInput">ExclusionFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFiltersInput">InclusionFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExclusionFilters`<sup>Required</sup> <a name="ExclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFilters"></a>

```go
func ExclusionFilters() ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference</a>

---

##### `InclusionFilters`<sup>Required</sup> <a name="InclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFilters"></a>

```go
func InclusionFilters() ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference</a>

---

##### `ExclusionFiltersInput`<sup>Optional</sup> <a name="ExclusionFiltersInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFiltersInput"></a>

```go
func ExclusionFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `InclusionFiltersInput`<sup>Optional</sup> <a name="InclusionFiltersInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFiltersInput"></a>

```go
func InclusionFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiportalOrganizationDiscoveryConfigurationTagsList <a name="ApiportalOrganizationDiscoveryConfigurationTagsList" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalorganizationdiscoveryconfiguration"

apiportalorganizationdiscoveryconfiguration.NewApiportalOrganizationDiscoveryConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiportalOrganizationDiscoveryConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.get"></a>

```go
func Get(index *f64) ApiportalOrganizationDiscoveryConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiportalOrganizationDiscoveryConfigurationTagsOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationTagsOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalorganizationdiscoveryconfiguration"

apiportalorganizationdiscoveryconfiguration.NewApiportalOrganizationDiscoveryConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiportalOrganizationDiscoveryConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



