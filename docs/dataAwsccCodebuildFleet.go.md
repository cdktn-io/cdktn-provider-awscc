# `dataAwsccCodebuildFleet` Submodule <a name="`dataAwsccCodebuildFleet` Submodule" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodebuildFleet <a name="DataAwsccCodebuildFleet" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/codebuild_fleet awscc_codebuild_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

dataawscccodebuildfleet.NewDataAwsccCodebuildFleet(scope Construct, id *string, config DataAwsccCodebuildFleetConfig) DataAwsccCodebuildFleet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig">DataAwsccCodebuildFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig">DataAwsccCodebuildFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCodebuildFleet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

dataawscccodebuildfleet.DataAwsccCodebuildFleet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

dataawscccodebuildfleet.DataAwsccCodebuildFleet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

dataawscccodebuildfleet.DataAwsccCodebuildFleet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

dataawscccodebuildfleet.DataAwsccCodebuildFleet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCodebuildFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCodebuildFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCodebuildFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/codebuild_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodebuildFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.baseCapacity">BaseCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.computeConfiguration">ComputeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference">DataAwsccCodebuildFleetComputeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.computeType">ComputeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.environmentType">EnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.fleetProxyConfiguration">FleetProxyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference">DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.fleetServiceRole">FleetServiceRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.fleetVpcConfig">FleetVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference">DataAwsccCodebuildFleetFleetVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.overflowBehavior">OverflowBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.scalingConfiguration">ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference">DataAwsccCodebuildFleetScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList">DataAwsccCodebuildFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `BaseCapacity`<sup>Required</sup> <a name="BaseCapacity" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.baseCapacity"></a>

```go
func BaseCapacity() *f64
```

- *Type:* *f64

---

##### `ComputeConfiguration`<sup>Required</sup> <a name="ComputeConfiguration" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.computeConfiguration"></a>

```go
func ComputeConfiguration() DataAwsccCodebuildFleetComputeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference">DataAwsccCodebuildFleetComputeConfigurationOutputReference</a>

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.computeType"></a>

```go
func ComputeType() *string
```

- *Type:* *string

---

##### `EnvironmentType`<sup>Required</sup> <a name="EnvironmentType" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.environmentType"></a>

```go
func EnvironmentType() *string
```

- *Type:* *string

---

##### `FleetProxyConfiguration`<sup>Required</sup> <a name="FleetProxyConfiguration" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.fleetProxyConfiguration"></a>

```go
func FleetProxyConfiguration() DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference">DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference</a>

---

##### `FleetServiceRole`<sup>Required</sup> <a name="FleetServiceRole" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.fleetServiceRole"></a>

```go
func FleetServiceRole() *string
```

- *Type:* *string

---

##### `FleetVpcConfig`<sup>Required</sup> <a name="FleetVpcConfig" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.fleetVpcConfig"></a>

```go
func FleetVpcConfig() DataAwsccCodebuildFleetFleetVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference">DataAwsccCodebuildFleetFleetVpcConfigOutputReference</a>

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OverflowBehavior`<sup>Required</sup> <a name="OverflowBehavior" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.overflowBehavior"></a>

```go
func OverflowBehavior() *string
```

- *Type:* *string

---

##### `ScalingConfiguration`<sup>Required</sup> <a name="ScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.scalingConfiguration"></a>

```go
func ScalingConfiguration() DataAwsccCodebuildFleetScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference">DataAwsccCodebuildFleetScalingConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.tags"></a>

```go
func Tags() DataAwsccCodebuildFleetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList">DataAwsccCodebuildFleetTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodebuildFleetComputeConfiguration <a name="DataAwsccCodebuildFleetComputeConfiguration" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

&dataawscccodebuildfleet.DataAwsccCodebuildFleetComputeConfiguration {

}
```


### DataAwsccCodebuildFleetConfig <a name="DataAwsccCodebuildFleetConfig" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

&dataawscccodebuildfleet.DataAwsccCodebuildFleetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/codebuild_fleet#id DataAwsccCodebuildFleet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodebuildFleetFleetProxyConfiguration <a name="DataAwsccCodebuildFleetFleetProxyConfiguration" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

&dataawscccodebuildfleet.DataAwsccCodebuildFleetFleetProxyConfiguration {

}
```


### DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRules <a name="DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRules" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

&dataawscccodebuildfleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRules {

}
```


### DataAwsccCodebuildFleetFleetVpcConfig <a name="DataAwsccCodebuildFleetFleetVpcConfig" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

&dataawscccodebuildfleet.DataAwsccCodebuildFleetFleetVpcConfig {

}
```


### DataAwsccCodebuildFleetScalingConfiguration <a name="DataAwsccCodebuildFleetScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

&dataawscccodebuildfleet.DataAwsccCodebuildFleetScalingConfiguration {

}
```


### DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs <a name="DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

&dataawscccodebuildfleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs {

}
```


### DataAwsccCodebuildFleetTags <a name="DataAwsccCodebuildFleetTags" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

&dataawscccodebuildfleet.DataAwsccCodebuildFleetTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodebuildFleetComputeConfigurationOutputReference <a name="DataAwsccCodebuildFleetComputeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

dataawscccodebuildfleet.NewDataAwsccCodebuildFleetComputeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodebuildFleetComputeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.property.disk">Disk</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.property.vCpu">VCpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfiguration">DataAwsccCodebuildFleetComputeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.property.disk"></a>

```go
func Disk() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `VCpu`<sup>Required</sup> <a name="VCpu" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.property.vCpu"></a>

```go
func VCpu() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodebuildFleetComputeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetComputeConfiguration">DataAwsccCodebuildFleetComputeConfiguration</a>

---


### DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList <a name="DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

dataawscccodebuildfleet.NewDataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.get"></a>

```go
func Get(index *f64) DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference <a name="DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

dataawscccodebuildfleet.NewDataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.entities">Entities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRules">DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.entities"></a>

```go
func Entities() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRules">DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>

---


### DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference <a name="DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

dataawscccodebuildfleet.NewDataAwsccCodebuildFleetFleetProxyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.property.defaultBehavior">DefaultBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.property.orderedProxyRules">OrderedProxyRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList">DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfiguration">DataAwsccCodebuildFleetFleetProxyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultBehavior`<sup>Required</sup> <a name="DefaultBehavior" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.property.defaultBehavior"></a>

```go
func DefaultBehavior() *string
```

- *Type:* *string

---

##### `OrderedProxyRules`<sup>Required</sup> <a name="OrderedProxyRules" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.property.orderedProxyRules"></a>

```go
func OrderedProxyRules() DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList">DataAwsccCodebuildFleetFleetProxyConfigurationOrderedProxyRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodebuildFleetFleetProxyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetProxyConfiguration">DataAwsccCodebuildFleetFleetProxyConfiguration</a>

---


### DataAwsccCodebuildFleetFleetVpcConfigOutputReference <a name="DataAwsccCodebuildFleetFleetVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

dataawscccodebuildfleet.NewDataAwsccCodebuildFleetFleetVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodebuildFleetFleetVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfig">DataAwsccCodebuildFleetFleetVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodebuildFleetFleetVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetFleetVpcConfig">DataAwsccCodebuildFleetFleetVpcConfig</a>

---


### DataAwsccCodebuildFleetScalingConfigurationOutputReference <a name="DataAwsccCodebuildFleetScalingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

dataawscccodebuildfleet.NewDataAwsccCodebuildFleetScalingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodebuildFleetScalingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.property.scalingType">ScalingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigs">TargetTrackingScalingConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList">DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfiguration">DataAwsccCodebuildFleetScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `ScalingType`<sup>Required</sup> <a name="ScalingType" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.property.scalingType"></a>

```go
func ScalingType() *string
```

- *Type:* *string

---

##### `TargetTrackingScalingConfigs`<sup>Required</sup> <a name="TargetTrackingScalingConfigs" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigs"></a>

```go
func TargetTrackingScalingConfigs() DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList">DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodebuildFleetScalingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfiguration">DataAwsccCodebuildFleetScalingConfiguration</a>

---


### DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList <a name="DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

dataawscccodebuildfleet.NewDataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get"></a>

```go
func Get(index *f64) DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference <a name="DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

dataawscccodebuildfleet.NewDataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricType">MetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValue">TargetValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricType"></a>

```go
func MetricType() *string
```

- *Type:* *string

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValue"></a>

```go
func TargetValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">DataAwsccCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>

---


### DataAwsccCodebuildFleetTagsList <a name="DataAwsccCodebuildFleetTagsList" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

dataawscccodebuildfleet.NewDataAwsccCodebuildFleetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodebuildFleetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.get"></a>

```go
func Get(index *f64) DataAwsccCodebuildFleetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodebuildFleetTagsOutputReference <a name="DataAwsccCodebuildFleetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodebuildfleet"

dataawscccodebuildfleet.NewDataAwsccCodebuildFleetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodebuildFleetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTags">DataAwsccCodebuildFleetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodebuildFleetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodebuildFleet.DataAwsccCodebuildFleetTags">DataAwsccCodebuildFleetTags</a>

---



