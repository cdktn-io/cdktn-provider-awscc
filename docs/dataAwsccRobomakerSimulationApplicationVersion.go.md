# `dataAwsccRobomakerSimulationApplicationVersion` Submodule <a name="`dataAwsccRobomakerSimulationApplicationVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRobomakerSimulationApplicationVersion <a name="DataAwsccRobomakerSimulationApplicationVersion" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/robomaker_simulation_application_version awscc_robomaker_simulation_application_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrobomakersimulationapplicationversion"

dataawsccrobomakersimulationapplicationversion.NewDataAwsccRobomakerSimulationApplicationVersion(scope Construct, id *string, config DataAwsccRobomakerSimulationApplicationVersionConfig) DataAwsccRobomakerSimulationApplicationVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig">DataAwsccRobomakerSimulationApplicationVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig">DataAwsccRobomakerSimulationApplicationVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRobomakerSimulationApplicationVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrobomakersimulationapplicationversion"

dataawsccrobomakersimulationapplicationversion.DataAwsccRobomakerSimulationApplicationVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrobomakersimulationapplicationversion"

dataawsccrobomakersimulationapplicationversion.DataAwsccRobomakerSimulationApplicationVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrobomakersimulationapplicationversion"

dataawsccrobomakersimulationapplicationversion.DataAwsccRobomakerSimulationApplicationVersion_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrobomakersimulationapplicationversion"

dataawsccrobomakersimulationapplicationversion.DataAwsccRobomakerSimulationApplicationVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRobomakerSimulationApplicationVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRobomakerSimulationApplicationVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRobomakerSimulationApplicationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/robomaker_simulation_application_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRobomakerSimulationApplicationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.application">Application</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.applicationVersion">ApplicationVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.currentRevisionId">CurrentRevisionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.application"></a>

```go
func Application() *string
```

- *Type:* *string

---

##### `ApplicationVersion`<sup>Required</sup> <a name="ApplicationVersion" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.applicationVersion"></a>

```go
func ApplicationVersion() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CurrentRevisionId`<sup>Required</sup> <a name="CurrentRevisionId" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.currentRevisionId"></a>

```go
func CurrentRevisionId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRobomakerSimulationApplicationVersionConfig <a name="DataAwsccRobomakerSimulationApplicationVersionConfig" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrobomakersimulationapplicationversion"

&dataawsccrobomakersimulationapplicationversion.DataAwsccRobomakerSimulationApplicationVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRobomakerSimulationApplicationVersion.DataAwsccRobomakerSimulationApplicationVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/robomaker_simulation_application_version#id DataAwsccRobomakerSimulationApplicationVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



