# `dataAwsccEc2Ec2Fleet` Submodule <a name="`dataAwsccEc2Ec2Fleet` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2Ec2Fleet <a name="DataAwsccEc2Ec2Fleet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_ec2_fleet awscc_ec2_ec2_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2Fleet(scope Construct, id *string, config DataAwsccEc2Ec2FleetConfig) DataAwsccEc2Ec2Fleet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig">DataAwsccEc2Ec2FleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig">DataAwsccEc2Ec2FleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2Ec2Fleet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.DataAwsccEc2Ec2Fleet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.DataAwsccEc2Ec2Fleet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.DataAwsccEc2Ec2Fleet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.DataAwsccEc2Ec2Fleet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEc2Ec2Fleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEc2Ec2Fleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEc2Ec2Fleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_ec2_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2Ec2Fleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.context">Context</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.excessCapacityTerminationPolicy">ExcessCapacityTerminationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.fleetId">FleetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.launchTemplateConfigs">LaunchTemplateConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.onDemandOptions">OnDemandOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference">DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.replaceUnhealthyInstances">ReplaceUnhealthyInstances</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.reservedCapacityOptions">ReservedCapacityOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference">DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.spotOptions">SpotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference">DataAwsccEc2Ec2FleetSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.tagSpecifications">TagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList">DataAwsccEc2Ec2FleetTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.targetCapacitySpecification">TargetCapacitySpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference">DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.terminateInstancesWithExpiration">TerminateInstancesWithExpiration</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.validFrom">ValidFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.validUntil">ValidUntil</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.context"></a>

```go
func Context() *string
```

- *Type:* *string

---

##### `ExcessCapacityTerminationPolicy`<sup>Required</sup> <a name="ExcessCapacityTerminationPolicy" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.excessCapacityTerminationPolicy"></a>

```go
func ExcessCapacityTerminationPolicy() *string
```

- *Type:* *string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.fleetId"></a>

```go
func FleetId() *string
```

- *Type:* *string

---

##### `LaunchTemplateConfigs`<sup>Required</sup> <a name="LaunchTemplateConfigs" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.launchTemplateConfigs"></a>

```go
func LaunchTemplateConfigs() DataAwsccEc2Ec2FleetLaunchTemplateConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsList</a>

---

##### `OnDemandOptions`<sup>Required</sup> <a name="OnDemandOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.onDemandOptions"></a>

```go
func OnDemandOptions() DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference">DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference</a>

---

##### `ReplaceUnhealthyInstances`<sup>Required</sup> <a name="ReplaceUnhealthyInstances" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.replaceUnhealthyInstances"></a>

```go
func ReplaceUnhealthyInstances() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ReservedCapacityOptions`<sup>Required</sup> <a name="ReservedCapacityOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.reservedCapacityOptions"></a>

```go
func ReservedCapacityOptions() DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference">DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference</a>

---

##### `SpotOptions`<sup>Required</sup> <a name="SpotOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.spotOptions"></a>

```go
func SpotOptions() DataAwsccEc2Ec2FleetSpotOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference">DataAwsccEc2Ec2FleetSpotOptionsOutputReference</a>

---

##### `TagSpecifications`<sup>Required</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.tagSpecifications"></a>

```go
func TagSpecifications() DataAwsccEc2Ec2FleetTagSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList">DataAwsccEc2Ec2FleetTagSpecificationsList</a>

---

##### `TargetCapacitySpecification`<sup>Required</sup> <a name="TargetCapacitySpecification" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.targetCapacitySpecification"></a>

```go
func TargetCapacitySpecification() DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference">DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference</a>

---

##### `TerminateInstancesWithExpiration`<sup>Required</sup> <a name="TerminateInstancesWithExpiration" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.terminateInstancesWithExpiration"></a>

```go
func TerminateInstancesWithExpiration() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValidFrom`<sup>Required</sup> <a name="ValidFrom" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.validFrom"></a>

```go
func ValidFrom() *string
```

- *Type:* *string

---

##### `ValidUntil`<sup>Required</sup> <a name="ValidUntil" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.validUntil"></a>

```go
func ValidUntil() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2Ec2FleetConfig <a name="DataAwsccEc2Ec2FleetConfig" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_ec2_fleet#id DataAwsccEc2Ec2Fleet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2Ec2FleetLaunchTemplateConfigs <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigs" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigs {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses {

}
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement {

}
```


### DataAwsccEc2Ec2FleetOnDemandOptions <a name="DataAwsccEc2Ec2FleetOnDemandOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetOnDemandOptions {

}
```


### DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions <a name="DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions {

}
```


### DataAwsccEc2Ec2FleetReservedCapacityOptions <a name="DataAwsccEc2Ec2FleetReservedCapacityOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetReservedCapacityOptions {

}
```


### DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget <a name="DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget {

}
```


### DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions <a name="DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions {

}
```


### DataAwsccEc2Ec2FleetSpotOptions <a name="DataAwsccEc2Ec2FleetSpotOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetSpotOptions {

}
```


### DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies <a name="DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies {

}
```


### DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance <a name="DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance {

}
```


### DataAwsccEc2Ec2FleetTagSpecifications <a name="DataAwsccEc2Ec2FleetTagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetTagSpecifications {

}
```


### DataAwsccEc2Ec2FleetTagSpecificationsTags <a name="DataAwsccEc2Ec2FleetTagSpecificationsTags" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetTagSpecificationsTags {

}
```


### DataAwsccEc2Ec2FleetTargetCapacitySpecification <a name="DataAwsccEc2Ec2FleetTargetCapacitySpecification" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

&dataawsccec2ec2fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecification {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateName">LaunchTemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateSpecificationUserData">LaunchTemplateSpecificationUserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification">DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateId"></a>

```go
func LaunchTemplateId() *string
```

- *Type:* *string

---

##### `LaunchTemplateName`<sup>Required</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateName"></a>

```go
func LaunchTemplateName() *string
```

- *Type:* *string

---

##### `LaunchTemplateSpecificationUserData`<sup>Required</sup> <a name="LaunchTemplateSpecificationUserData" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateSpecificationUserData"></a>

```go
func LaunchTemplateSpecificationUserData() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification">DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsList <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2Ec2FleetLaunchTemplateConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.launchTemplateSpecification">LaunchTemplateSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigs">DataAwsccEc2Ec2FleetLaunchTemplateConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchTemplateSpecification`<sup>Required</sup> <a name="LaunchTemplateSpecification" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.launchTemplateSpecification"></a>

```go
func LaunchTemplateSpecification() DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference</a>

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.overrides"></a>

```go
func Overrides() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigs">DataAwsccEc2Ec2FleetLaunchTemplateConfigs</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```go
func Encrypted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.noDevice">NoDevice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.virtualName">VirtualName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.ebs"></a>

```go
func Ebs() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference</a>

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.noDevice"></a>

```go
func NoDevice() *string
```

- *Type:* *string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.virtualName"></a>

```go
func VirtualName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.references">References</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `References`<sup>Required</sup> <a name="References" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.references"></a>

```go
func References() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get"></a>

```go
func Get(index *f64) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.instanceFamily">InstanceFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceFamily`<sup>Required</sup> <a name="InstanceFamily" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.instanceFamily"></a>

```go
func InstanceFamily() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.cpu">Cpu</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.cpu"></a>

```go
func Cpu() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturers">AcceleratorManufacturers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorNames">AcceleratorNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMiB">AcceleratorTotalMemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.bareMetal">BareMetal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">BaselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.baselinePerformanceFactors">BaselinePerformanceFactors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.burstablePerformance">BurstablePerformance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.cpuManufacturers">CpuManufacturers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.instanceGenerations">InstanceGenerations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.localStorage">LocalStorage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.localStorageTypes">LocalStorageTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice">MaxSpotPriceAsPercentageOfOptimalOnDemandPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.memoryGiBPerVCpu">MemoryGiBPerVCpu</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.memoryMiB">MemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.networkBandwidthGbps">NetworkBandwidthGbps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.networkInterfaceCount">NetworkInterfaceCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">OnDemandMaxPricePercentageOverLowestPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.requireEncryptionInTransit">RequireEncryptionInTransit</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.requireHibernateSupport">RequireHibernateSupport</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">SpotMaxPricePercentageOverLowestPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGb">TotalLocalStorageGb</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.vCpuCount">VCpuCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference</a>

---

##### `AcceleratorManufacturers`<sup>Required</sup> <a name="AcceleratorManufacturers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```go
func AcceleratorManufacturers() *[]*string
```

- *Type:* *[]*string

---

##### `AcceleratorNames`<sup>Required</sup> <a name="AcceleratorNames" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```go
func AcceleratorNames() *[]*string
```

- *Type:* *[]*string

---

##### `AcceleratorTotalMemoryMiB`<sup>Required</sup> <a name="AcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMiB"></a>

```go
func AcceleratorTotalMemoryMiB() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference</a>

---

##### `AcceleratorTypes`<sup>Required</sup> <a name="AcceleratorTypes" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```go
func AcceleratorTypes() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedInstanceTypes`<sup>Required</sup> <a name="AllowedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```go
func AllowedInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `BareMetal`<sup>Required</sup> <a name="BareMetal" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.bareMetal"></a>

```go
func BareMetal() *string
```

- *Type:* *string

---

##### `BaselineEbsBandwidthMbps`<sup>Required</sup> <a name="BaselineEbsBandwidthMbps" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```go
func BaselineEbsBandwidthMbps() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a>

---

##### `BaselinePerformanceFactors`<sup>Required</sup> <a name="BaselinePerformanceFactors" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.baselinePerformanceFactors"></a>

```go
func BaselinePerformanceFactors() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference</a>

---

##### `BurstablePerformance`<sup>Required</sup> <a name="BurstablePerformance" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```go
func BurstablePerformance() *string
```

- *Type:* *string

---

##### `CpuManufacturers`<sup>Required</sup> <a name="CpuManufacturers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```go
func CpuManufacturers() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedInstanceTypes`<sup>Required</sup> <a name="ExcludedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```go
func ExcludedInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceGenerations`<sup>Required</sup> <a name="InstanceGenerations" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```go
func InstanceGenerations() *[]*string
```

- *Type:* *[]*string

---

##### `LocalStorage`<sup>Required</sup> <a name="LocalStorage" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.localStorage"></a>

```go
func LocalStorage() *string
```

- *Type:* *string

---

##### `LocalStorageTypes`<sup>Required</sup> <a name="LocalStorageTypes" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```go
func LocalStorageTypes() *[]*string
```

- *Type:* *[]*string

---

##### `MaxSpotPriceAsPercentageOfOptimalOnDemandPrice`<sup>Required</sup> <a name="MaxSpotPriceAsPercentageOfOptimalOnDemandPrice" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice"></a>

```go
func MaxSpotPriceAsPercentageOfOptimalOnDemandPrice() *f64
```

- *Type:* *f64

---

##### `MemoryGiBPerVCpu`<sup>Required</sup> <a name="MemoryGiBPerVCpu" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.memoryGiBPerVCpu"></a>

```go
func MemoryGiBPerVCpu() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference</a>

---

##### `MemoryMiB`<sup>Required</sup> <a name="MemoryMiB" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.memoryMiB"></a>

```go
func MemoryMiB() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference</a>

---

##### `NetworkBandwidthGbps`<sup>Required</sup> <a name="NetworkBandwidthGbps" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.networkBandwidthGbps"></a>

```go
func NetworkBandwidthGbps() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference</a>

---

##### `NetworkInterfaceCount`<sup>Required</sup> <a name="NetworkInterfaceCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```go
func NetworkInterfaceCount() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference</a>

---

##### `OnDemandMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="OnDemandMaxPricePercentageOverLowestPrice" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```go
func OnDemandMaxPricePercentageOverLowestPrice() *f64
```

- *Type:* *f64

---

##### `RequireEncryptionInTransit`<sup>Required</sup> <a name="RequireEncryptionInTransit" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.requireEncryptionInTransit"></a>

```go
func RequireEncryptionInTransit() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RequireHibernateSupport`<sup>Required</sup> <a name="RequireHibernateSupport" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```go
func RequireHibernateSupport() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SpotMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="SpotMaxPricePercentageOverLowestPrice" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```go
func SpotMaxPricePercentageOverLowestPrice() *f64
```

- *Type:* *f64

---

##### `TotalLocalStorageGb`<sup>Required</sup> <a name="TotalLocalStorageGb" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```go
func TotalLocalStorageGb() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference</a>

---

##### `VCpuCount`<sup>Required</sup> <a name="VCpuCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.vCpuCount"></a>

```go
func VCpuCount() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.get"></a>

```go
func Get(index *f64) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpEndpoint"></a>

```go
func HttpEndpoint() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```go
func HttpPutResponseHopLimit() *f64
```

- *Type:* *f64

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpTokens"></a>

```go
func HttpTokens() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.get"></a>

```go
func Get(index *f64) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.get"></a>

```go
func Get(index *f64) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.deviceIndex">DeviceIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.groups">Groups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.interfaceType">InterfaceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.ipv6Addresses">Ipv6Addresses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.networkCardIndex">NetworkCardIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount">SecondaryPrivateIpAddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.associatePublicIpAddress"></a>

```go
func AssociatePublicIpAddress() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.deviceIndex"></a>

```go
func DeviceIndex() *f64
```

- *Type:* *f64

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.groups"></a>

```go
func Groups() *[]*string
```

- *Type:* *[]*string

---

##### `InterfaceType`<sup>Required</sup> <a name="InterfaceType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.interfaceType"></a>

```go
func InterfaceType() *string
```

- *Type:* *string

---

##### `Ipv6AddressCount`<sup>Required</sup> <a name="Ipv6AddressCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.ipv6AddressCount"></a>

```go
func Ipv6AddressCount() *f64
```

- *Type:* *f64

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.ipv6Addresses"></a>

```go
func Ipv6Addresses() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList</a>

---

##### `NetworkCardIndex`<sup>Required</sup> <a name="NetworkCardIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.networkCardIndex"></a>

```go
func NetworkCardIndex() *f64
```

- *Type:* *f64

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `PrivateIpAddresses`<sup>Required</sup> <a name="PrivateIpAddresses" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.privateIpAddresses"></a>

```go
func PrivateIpAddresses() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList</a>

---

##### `SecondaryPrivateIpAddressCount`<sup>Required</sup> <a name="SecondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount"></a>

```go
func SecondaryPrivateIpAddressCount() *f64
```

- *Type:* *f64

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.get"></a>

```go
func Get(index *f64) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.primary">Primary</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.primary"></a>

```go
func Primary() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.maxPrice">MaxPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.placement">Placement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.weightedCapacity">WeightedCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.availabilityZoneId"></a>

```go
func AvailabilityZoneId() *string
```

- *Type:* *string

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.blockDeviceMappings"></a>

```go
func BlockDeviceMappings() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList</a>

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.iamInstanceProfile"></a>

```go
func IamInstanceProfile() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference</a>

---

##### `InstanceRequirements`<sup>Required</sup> <a name="InstanceRequirements" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.instanceRequirements"></a>

```go
func InstanceRequirements() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference</a>

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `MaxPrice`<sup>Required</sup> <a name="MaxPrice" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.maxPrice"></a>

```go
func MaxPrice() *string
```

- *Type:* *string

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.metadataOptions"></a>

```go
func MetadataOptions() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference</a>

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.networkInterfaces"></a>

```go
func NetworkInterfaces() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList</a>

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.placement"></a>

```go
func Placement() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference</a>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `WeightedCapacity`<sup>Required</sup> <a name="WeightedCapacity" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.weightedCapacity"></a>

```go
func WeightedCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.affinity">Affinity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.hostId">HostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.partitionNumber">PartitionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.spreadDomain">SpreadDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.tenancy">Tenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Affinity`<sup>Required</sup> <a name="Affinity" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.affinity"></a>

```go
func Affinity() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.hostId"></a>

```go
func HostId() *string
```

- *Type:* *string

---

##### `HostResourceGroupArn`<sup>Required</sup> <a name="HostResourceGroupArn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.hostResourceGroupArn"></a>

```go
func HostResourceGroupArn() *string
```

- *Type:* *string

---

##### `PartitionNumber`<sup>Required</sup> <a name="PartitionNumber" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.partitionNumber"></a>

```go
func PartitionNumber() *f64
```

- *Type:* *f64

---

##### `SpreadDomain`<sup>Required</sup> <a name="SpreadDomain" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.spreadDomain"></a>

```go
func SpreadDomain() *string
```

- *Type:* *string

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.tenancy"></a>

```go
func Tenancy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement</a>

---


### DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference <a name="DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.usageStrategy">UsageStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions">DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UsageStrategy`<sup>Required</sup> <a name="UsageStrategy" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.usageStrategy"></a>

```go
func UsageStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions">DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions</a>

---


### DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference <a name="DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetOnDemandOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.capacityReservationOptions">CapacityReservationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference">DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.maxTotalPrice">MaxTotalPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.minTargetCapacity">MinTargetCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.singleAvailabilityZone">SingleAvailabilityZone</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.singleInstanceType">SingleInstanceType</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptions">DataAwsccEc2Ec2FleetOnDemandOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `CapacityReservationOptions`<sup>Required</sup> <a name="CapacityReservationOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.capacityReservationOptions"></a>

```go
func CapacityReservationOptions() DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference">DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference</a>

---

##### `MaxTotalPrice`<sup>Required</sup> <a name="MaxTotalPrice" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.maxTotalPrice"></a>

```go
func MaxTotalPrice() *string
```

- *Type:* *string

---

##### `MinTargetCapacity`<sup>Required</sup> <a name="MinTargetCapacity" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.minTargetCapacity"></a>

```go
func MinTargetCapacity() *f64
```

- *Type:* *f64

---

##### `SingleAvailabilityZone`<sup>Required</sup> <a name="SingleAvailabilityZone" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.singleAvailabilityZone"></a>

```go
func SingleAvailabilityZone() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SingleInstanceType`<sup>Required</sup> <a name="SingleInstanceType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.singleInstanceType"></a>

```go
func SingleInstanceType() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetOnDemandOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptions">DataAwsccEc2Ec2FleetOnDemandOptions</a>

---


### DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference <a name="DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.capacityReservationIds">CapacityReservationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArns">CapacityReservationResourceGroupArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget">DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationIds`<sup>Required</sup> <a name="CapacityReservationIds" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.capacityReservationIds"></a>

```go
func CapacityReservationIds() *[]*string
```

- *Type:* *[]*string

---

##### `CapacityReservationResourceGroupArns`<sup>Required</sup> <a name="CapacityReservationResourceGroupArns" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArns"></a>

```go
func CapacityReservationResourceGroupArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget">DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget</a>

---


### DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference <a name="DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference">DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.reservationTypes">ReservationTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.reservedCapacityFallbackOptions">ReservedCapacityFallbackOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference">DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptions">DataAwsccEc2Ec2FleetReservedCapacityOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `CapacityReservationTarget`<sup>Required</sup> <a name="CapacityReservationTarget" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.capacityReservationTarget"></a>

```go
func CapacityReservationTarget() DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference">DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference</a>

---

##### `ReservationTypes`<sup>Required</sup> <a name="ReservationTypes" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.reservationTypes"></a>

```go
func ReservationTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ReservedCapacityFallbackOptions`<sup>Required</sup> <a name="ReservedCapacityFallbackOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.reservedCapacityFallbackOptions"></a>

```go
func ReservedCapacityFallbackOptions() DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference">DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetReservedCapacityOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptions">DataAwsccEc2Ec2FleetReservedCapacityOptions</a>

---


### DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference <a name="DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.property.marketTypes">MarketTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions">DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MarketTypes`<sup>Required</sup> <a name="MarketTypes" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.property.marketTypes"></a>

```go
func MarketTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions">DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions</a>

---


### DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference <a name="DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy">ReplacementStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.terminationDelay">TerminationDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReplacementStrategy`<sup>Required</sup> <a name="ReplacementStrategy" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy"></a>

```go
func ReplacementStrategy() *string
```

- *Type:* *string

---

##### `TerminationDelay`<sup>Required</sup> <a name="TerminationDelay" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.terminationDelay"></a>

```go
func TerminationDelay() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

---


### DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference <a name="DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalance">CapacityRebalance</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference">DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies">DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityRebalance`<sup>Required</sup> <a name="CapacityRebalance" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalance"></a>

```go
func CapacityRebalance() DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference">DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies">DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies</a>

---


### DataAwsccEc2Ec2FleetSpotOptionsOutputReference <a name="DataAwsccEc2Ec2FleetSpotOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetSpotOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetSpotOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehavior">InstanceInterruptionBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategies">MaintenanceStrategies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference">DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.maxTotalPrice">MaxTotalPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.minTargetCapacity">MinTargetCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.singleAvailabilityZone">SingleAvailabilityZone</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.singleInstanceType">SingleInstanceType</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptions">DataAwsccEc2Ec2FleetSpotOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `InstanceInterruptionBehavior`<sup>Required</sup> <a name="InstanceInterruptionBehavior" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehavior"></a>

```go
func InstanceInterruptionBehavior() *string
```

- *Type:* *string

---

##### `InstancePoolsToUseCount`<sup>Required</sup> <a name="InstancePoolsToUseCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCount"></a>

```go
func InstancePoolsToUseCount() *f64
```

- *Type:* *f64

---

##### `MaintenanceStrategies`<sup>Required</sup> <a name="MaintenanceStrategies" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategies"></a>

```go
func MaintenanceStrategies() DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference">DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference</a>

---

##### `MaxTotalPrice`<sup>Required</sup> <a name="MaxTotalPrice" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.maxTotalPrice"></a>

```go
func MaxTotalPrice() *string
```

- *Type:* *string

---

##### `MinTargetCapacity`<sup>Required</sup> <a name="MinTargetCapacity" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.minTargetCapacity"></a>

```go
func MinTargetCapacity() *f64
```

- *Type:* *f64

---

##### `SingleAvailabilityZone`<sup>Required</sup> <a name="SingleAvailabilityZone" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.singleAvailabilityZone"></a>

```go
func SingleAvailabilityZone() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SingleInstanceType`<sup>Required</sup> <a name="SingleInstanceType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.singleInstanceType"></a>

```go
func SingleInstanceType() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetSpotOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptions">DataAwsccEc2Ec2FleetSpotOptions</a>

---


### DataAwsccEc2Ec2FleetTagSpecificationsList <a name="DataAwsccEc2Ec2FleetTagSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetTagSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2Ec2FleetTagSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2Ec2FleetTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2Ec2FleetTagSpecificationsOutputReference <a name="DataAwsccEc2Ec2FleetTagSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetTagSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2Ec2FleetTagSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList">DataAwsccEc2Ec2FleetTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecifications">DataAwsccEc2Ec2FleetTagSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.tags"></a>

```go
func Tags() DataAwsccEc2Ec2FleetTagSpecificationsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList">DataAwsccEc2Ec2FleetTagSpecificationsTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetTagSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecifications">DataAwsccEc2Ec2FleetTagSpecifications</a>

---


### DataAwsccEc2Ec2FleetTagSpecificationsTagsList <a name="DataAwsccEc2Ec2FleetTagSpecificationsTagsList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetTagSpecificationsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2Ec2FleetTagSpecificationsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference <a name="DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTags">DataAwsccEc2Ec2FleetTagSpecificationsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetTagSpecificationsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTags">DataAwsccEc2Ec2FleetTagSpecificationsTags</a>

---


### DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference <a name="DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ec2fleet"

dataawsccec2ec2fleet.NewDataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityType">DefaultTargetCapacityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacity">OnDemandTargetCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacity">SpotTargetCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitType">TargetCapacityUnitType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacity">TotalTargetCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecification">DataAwsccEc2Ec2FleetTargetCapacitySpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultTargetCapacityType`<sup>Required</sup> <a name="DefaultTargetCapacityType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityType"></a>

```go
func DefaultTargetCapacityType() *string
```

- *Type:* *string

---

##### `OnDemandTargetCapacity`<sup>Required</sup> <a name="OnDemandTargetCapacity" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacity"></a>

```go
func OnDemandTargetCapacity() *f64
```

- *Type:* *f64

---

##### `SpotTargetCapacity`<sup>Required</sup> <a name="SpotTargetCapacity" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacity"></a>

```go
func SpotTargetCapacity() *f64
```

- *Type:* *f64

---

##### `TargetCapacityUnitType`<sup>Required</sup> <a name="TargetCapacityUnitType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitType"></a>

```go
func TargetCapacityUnitType() *string
```

- *Type:* *string

---

##### `TotalTargetCapacity`<sup>Required</sup> <a name="TotalTargetCapacity" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacity"></a>

```go
func TotalTargetCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2Ec2FleetTargetCapacitySpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecification">DataAwsccEc2Ec2FleetTargetCapacitySpecification</a>

---



