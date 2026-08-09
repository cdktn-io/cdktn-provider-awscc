# `dataAwsccEc2Instance` Submodule <a name="`dataAwsccEc2Instance` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2Instance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2Instance <a name="DataAwsccEc2Instance" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_instance awscc_ec2_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2Instance(scope Construct, id *string, config DataAwsccEc2InstanceConfig) DataAwsccEc2Instance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig">DataAwsccEc2InstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig">DataAwsccEc2InstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2Instance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.DataAwsccEc2Instance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.DataAwsccEc2Instance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.DataAwsccEc2Instance_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.DataAwsccEc2Instance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEc2Instance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEc2Instance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEc2Instance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2Instance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.additionalInfo">AdditionalInfo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.affinity">Affinity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList">DataAwsccEc2InstanceBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.cpuOptions">CpuOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference">DataAwsccEc2InstanceCpuOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.creditSpecification">CreditSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference">DataAwsccEc2InstanceCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.disableApiTermination">DisableApiTermination</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.ebsOptimized">EbsOptimized</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.elasticGpuSpecifications">ElasticGpuSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList">DataAwsccEc2InstanceElasticGpuSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.elasticInferenceAccelerators">ElasticInferenceAccelerators</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList">DataAwsccEc2InstanceElasticInferenceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.enclaveOptions">EnclaveOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference">DataAwsccEc2InstanceEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.hibernationOptions">HibernationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference">DataAwsccEc2InstanceHibernationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.hostId">HostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.instanceInitiatedShutdownBehavior">InstanceInitiatedShutdownBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.ipv6Addresses">Ipv6Addresses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList">DataAwsccEc2InstanceIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.kernelId">KernelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference">DataAwsccEc2InstanceLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.licenseSpecifications">LicenseSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList">DataAwsccEc2InstanceLicenseSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference">DataAwsccEc2InstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.monitoring">Monitoring</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList">DataAwsccEc2InstanceNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.placementGroupName">PlacementGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.privateDnsName">PrivateDnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.privateDnsNameOptions">PrivateDnsNameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference">DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.propagateTagsToVolumeOnCreation">PropagateTagsToVolumeOnCreation</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.publicDnsName">PublicDnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.publicIp">PublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.ramdiskId">RamdiskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.sourceDestCheck">SourceDestCheck</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.ssmAssociations">SsmAssociations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList">DataAwsccEc2InstanceSsmAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.state">State</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference">DataAwsccEc2InstanceStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList">DataAwsccEc2InstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.tenancy">Tenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.volumes">Volumes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList">DataAwsccEc2InstanceVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AdditionalInfo`<sup>Required</sup> <a name="AdditionalInfo" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.additionalInfo"></a>

```go
func AdditionalInfo() *string
```

- *Type:* *string

---

##### `Affinity`<sup>Required</sup> <a name="Affinity" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.affinity"></a>

```go
func Affinity() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.blockDeviceMappings"></a>

```go
func BlockDeviceMappings() DataAwsccEc2InstanceBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList">DataAwsccEc2InstanceBlockDeviceMappingsList</a>

---

##### `CpuOptions`<sup>Required</sup> <a name="CpuOptions" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.cpuOptions"></a>

```go
func CpuOptions() DataAwsccEc2InstanceCpuOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference">DataAwsccEc2InstanceCpuOptionsOutputReference</a>

---

##### `CreditSpecification`<sup>Required</sup> <a name="CreditSpecification" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.creditSpecification"></a>

```go
func CreditSpecification() DataAwsccEc2InstanceCreditSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference">DataAwsccEc2InstanceCreditSpecificationOutputReference</a>

---

##### `DisableApiTermination`<sup>Required</sup> <a name="DisableApiTermination" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.disableApiTermination"></a>

```go
func DisableApiTermination() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.ebsOptimized"></a>

```go
func EbsOptimized() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ElasticGpuSpecifications`<sup>Required</sup> <a name="ElasticGpuSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.elasticGpuSpecifications"></a>

```go
func ElasticGpuSpecifications() DataAwsccEc2InstanceElasticGpuSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList">DataAwsccEc2InstanceElasticGpuSpecificationsList</a>

---

##### `ElasticInferenceAccelerators`<sup>Required</sup> <a name="ElasticInferenceAccelerators" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.elasticInferenceAccelerators"></a>

```go
func ElasticInferenceAccelerators() DataAwsccEc2InstanceElasticInferenceAcceleratorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList">DataAwsccEc2InstanceElasticInferenceAcceleratorsList</a>

---

##### `EnclaveOptions`<sup>Required</sup> <a name="EnclaveOptions" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.enclaveOptions"></a>

```go
func EnclaveOptions() DataAwsccEc2InstanceEnclaveOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference">DataAwsccEc2InstanceEnclaveOptionsOutputReference</a>

---

##### `HibernationOptions`<sup>Required</sup> <a name="HibernationOptions" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.hibernationOptions"></a>

```go
func HibernationOptions() DataAwsccEc2InstanceHibernationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference">DataAwsccEc2InstanceHibernationOptionsOutputReference</a>

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.hostId"></a>

```go
func HostId() *string
```

- *Type:* *string

---

##### `HostResourceGroupArn`<sup>Required</sup> <a name="HostResourceGroupArn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.hostResourceGroupArn"></a>

```go
func HostResourceGroupArn() *string
```

- *Type:* *string

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.iamInstanceProfile"></a>

```go
func IamInstanceProfile() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `InstanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="InstanceInitiatedShutdownBehavior" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.instanceInitiatedShutdownBehavior"></a>

```go
func InstanceInitiatedShutdownBehavior() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `Ipv6AddressCount`<sup>Required</sup> <a name="Ipv6AddressCount" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.ipv6AddressCount"></a>

```go
func Ipv6AddressCount() *f64
```

- *Type:* *f64

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.ipv6Addresses"></a>

```go
func Ipv6Addresses() DataAwsccEc2InstanceIpv6AddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList">DataAwsccEc2InstanceIpv6AddressesList</a>

---

##### `KernelId`<sup>Required</sup> <a name="KernelId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.kernelId"></a>

```go
func KernelId() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.launchTemplate"></a>

```go
func LaunchTemplate() DataAwsccEc2InstanceLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference">DataAwsccEc2InstanceLaunchTemplateOutputReference</a>

---

##### `LicenseSpecifications`<sup>Required</sup> <a name="LicenseSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.licenseSpecifications"></a>

```go
func LicenseSpecifications() DataAwsccEc2InstanceLicenseSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList">DataAwsccEc2InstanceLicenseSpecificationsList</a>

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.metadataOptions"></a>

```go
func MetadataOptions() DataAwsccEc2InstanceMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference">DataAwsccEc2InstanceMetadataOptionsOutputReference</a>

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.monitoring"></a>

```go
func Monitoring() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.networkInterfaces"></a>

```go
func NetworkInterfaces() DataAwsccEc2InstanceNetworkInterfacesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList">DataAwsccEc2InstanceNetworkInterfacesList</a>

---

##### `PlacementGroupName`<sup>Required</sup> <a name="PlacementGroupName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.placementGroupName"></a>

```go
func PlacementGroupName() *string
```

- *Type:* *string

---

##### `PrivateDnsName`<sup>Required</sup> <a name="PrivateDnsName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.privateDnsName"></a>

```go
func PrivateDnsName() *string
```

- *Type:* *string

---

##### `PrivateDnsNameOptions`<sup>Required</sup> <a name="PrivateDnsNameOptions" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.privateDnsNameOptions"></a>

```go
func PrivateDnsNameOptions() DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference">DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference</a>

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `PropagateTagsToVolumeOnCreation`<sup>Required</sup> <a name="PropagateTagsToVolumeOnCreation" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.propagateTagsToVolumeOnCreation"></a>

```go
func PropagateTagsToVolumeOnCreation() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PublicDnsName`<sup>Required</sup> <a name="PublicDnsName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.publicDnsName"></a>

```go
func PublicDnsName() *string
```

- *Type:* *string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.publicIp"></a>

```go
func PublicIp() *string
```

- *Type:* *string

---

##### `RamdiskId`<sup>Required</sup> <a name="RamdiskId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.ramdiskId"></a>

```go
func RamdiskId() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `SourceDestCheck`<sup>Required</sup> <a name="SourceDestCheck" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.sourceDestCheck"></a>

```go
func SourceDestCheck() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SsmAssociations`<sup>Required</sup> <a name="SsmAssociations" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.ssmAssociations"></a>

```go
func SsmAssociations() DataAwsccEc2InstanceSsmAssociationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList">DataAwsccEc2InstanceSsmAssociationsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.state"></a>

```go
func State() DataAwsccEc2InstanceStateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference">DataAwsccEc2InstanceStateOutputReference</a>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.tags"></a>

```go
func Tags() DataAwsccEc2InstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList">DataAwsccEc2InstanceTagsList</a>

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.tenancy"></a>

```go
func Tenancy() *string
```

- *Type:* *string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.volumes"></a>

```go
func Volumes() DataAwsccEc2InstanceVolumesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList">DataAwsccEc2InstanceVolumesList</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2Instance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2InstanceBlockDeviceMappings <a name="DataAwsccEc2InstanceBlockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceBlockDeviceMappings {

}
```


### DataAwsccEc2InstanceBlockDeviceMappingsEbs <a name="DataAwsccEc2InstanceBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceBlockDeviceMappingsEbs {

}
```


### DataAwsccEc2InstanceConfig <a name="DataAwsccEc2InstanceConfig" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_instance#id DataAwsccEc2Instance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2InstanceCpuOptions <a name="DataAwsccEc2InstanceCpuOptions" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceCpuOptions {

}
```


### DataAwsccEc2InstanceCreditSpecification <a name="DataAwsccEc2InstanceCreditSpecification" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceCreditSpecification {

}
```


### DataAwsccEc2InstanceElasticGpuSpecifications <a name="DataAwsccEc2InstanceElasticGpuSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceElasticGpuSpecifications {

}
```


### DataAwsccEc2InstanceElasticInferenceAccelerators <a name="DataAwsccEc2InstanceElasticInferenceAccelerators" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAccelerators.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceElasticInferenceAccelerators {

}
```


### DataAwsccEc2InstanceEnclaveOptions <a name="DataAwsccEc2InstanceEnclaveOptions" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceEnclaveOptions {

}
```


### DataAwsccEc2InstanceHibernationOptions <a name="DataAwsccEc2InstanceHibernationOptions" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceHibernationOptions {

}
```


### DataAwsccEc2InstanceIpv6Addresses <a name="DataAwsccEc2InstanceIpv6Addresses" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6Addresses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceIpv6Addresses {

}
```


### DataAwsccEc2InstanceLaunchTemplate <a name="DataAwsccEc2InstanceLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceLaunchTemplate {

}
```


### DataAwsccEc2InstanceLicenseSpecifications <a name="DataAwsccEc2InstanceLicenseSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceLicenseSpecifications {

}
```


### DataAwsccEc2InstanceMetadataOptions <a name="DataAwsccEc2InstanceMetadataOptions" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceMetadataOptions {

}
```


### DataAwsccEc2InstanceNetworkInterfaces <a name="DataAwsccEc2InstanceNetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfaces.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceNetworkInterfaces {

}
```


### DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecification <a name="DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecification" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecification {

}
```


### DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification <a name="DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification {

}
```


### DataAwsccEc2InstanceNetworkInterfacesIpv6Addresses <a name="DataAwsccEc2InstanceNetworkInterfacesIpv6Addresses" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6Addresses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceNetworkInterfacesIpv6Addresses {

}
```


### DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddresses <a name="DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddresses" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddresses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddresses {

}
```


### DataAwsccEc2InstancePrivateDnsNameOptions <a name="DataAwsccEc2InstancePrivateDnsNameOptions" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstancePrivateDnsNameOptions {

}
```


### DataAwsccEc2InstanceSsmAssociations <a name="DataAwsccEc2InstanceSsmAssociations" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceSsmAssociations {

}
```


### DataAwsccEc2InstanceSsmAssociationsAssociationParameters <a name="DataAwsccEc2InstanceSsmAssociationsAssociationParameters" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceSsmAssociationsAssociationParameters {

}
```


### DataAwsccEc2InstanceState <a name="DataAwsccEc2InstanceState" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceState.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceState {

}
```


### DataAwsccEc2InstanceTags <a name="DataAwsccEc2InstanceTags" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceTags {

}
```


### DataAwsccEc2InstanceVolumes <a name="DataAwsccEc2InstanceVolumes" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

&dataawsccec2instance.DataAwsccEc2InstanceVolumes {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference <a name="DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbs">DataAwsccEc2InstanceBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```go
func Encrypted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbs">DataAwsccEc2InstanceBlockDeviceMappingsEbs</a>

---


### DataAwsccEc2InstanceBlockDeviceMappingsList <a name="DataAwsccEc2InstanceBlockDeviceMappingsList" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceBlockDeviceMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2InstanceBlockDeviceMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2InstanceBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2InstanceBlockDeviceMappingsOutputReference <a name="DataAwsccEc2InstanceBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceBlockDeviceMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2InstanceBlockDeviceMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference">DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.property.noDevice">NoDevice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.property.virtualName">VirtualName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappings">DataAwsccEc2InstanceBlockDeviceMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.property.ebs"></a>

```go
func Ebs() DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference">DataAwsccEc2InstanceBlockDeviceMappingsEbsOutputReference</a>

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.property.noDevice"></a>

```go
func NoDevice() *string
```

- *Type:* *string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.property.virtualName"></a>

```go
func VirtualName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceBlockDeviceMappings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceBlockDeviceMappings">DataAwsccEc2InstanceBlockDeviceMappings</a>

---


### DataAwsccEc2InstanceCpuOptionsOutputReference <a name="DataAwsccEc2InstanceCpuOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceCpuOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2InstanceCpuOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.property.coreCount">CoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptions">DataAwsccEc2InstanceCpuOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.property.coreCount"></a>

```go
func CoreCount() *f64
```

- *Type:* *f64

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.property.threadsPerCore"></a>

```go
func ThreadsPerCore() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceCpuOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCpuOptions">DataAwsccEc2InstanceCpuOptions</a>

---


### DataAwsccEc2InstanceCreditSpecificationOutputReference <a name="DataAwsccEc2InstanceCreditSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceCreditSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2InstanceCreditSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.property.cpuCredits">CpuCredits</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecification">DataAwsccEc2InstanceCreditSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuCredits`<sup>Required</sup> <a name="CpuCredits" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.property.cpuCredits"></a>

```go
func CpuCredits() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceCreditSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceCreditSpecification">DataAwsccEc2InstanceCreditSpecification</a>

---


### DataAwsccEc2InstanceElasticGpuSpecificationsList <a name="DataAwsccEc2InstanceElasticGpuSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceElasticGpuSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2InstanceElasticGpuSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference <a name="DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceElasticGpuSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecifications">DataAwsccEc2InstanceElasticGpuSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceElasticGpuSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticGpuSpecifications">DataAwsccEc2InstanceElasticGpuSpecifications</a>

---


### DataAwsccEc2InstanceElasticInferenceAcceleratorsList <a name="DataAwsccEc2InstanceElasticInferenceAcceleratorsList" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceElasticInferenceAcceleratorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2InstanceElasticInferenceAcceleratorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference <a name="DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAccelerators">DataAwsccEc2InstanceElasticInferenceAccelerators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAcceleratorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceElasticInferenceAccelerators
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceElasticInferenceAccelerators">DataAwsccEc2InstanceElasticInferenceAccelerators</a>

---


### DataAwsccEc2InstanceEnclaveOptionsOutputReference <a name="DataAwsccEc2InstanceEnclaveOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceEnclaveOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2InstanceEnclaveOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptions">DataAwsccEc2InstanceEnclaveOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceEnclaveOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceEnclaveOptions">DataAwsccEc2InstanceEnclaveOptions</a>

---


### DataAwsccEc2InstanceHibernationOptionsOutputReference <a name="DataAwsccEc2InstanceHibernationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceHibernationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2InstanceHibernationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.property.configured">Configured</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptions">DataAwsccEc2InstanceHibernationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Configured`<sup>Required</sup> <a name="Configured" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.property.configured"></a>

```go
func Configured() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceHibernationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceHibernationOptions">DataAwsccEc2InstanceHibernationOptions</a>

---


### DataAwsccEc2InstanceIpv6AddressesList <a name="DataAwsccEc2InstanceIpv6AddressesList" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceIpv6AddressesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2InstanceIpv6AddressesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.get"></a>

```go
func Get(index *f64) DataAwsccEc2InstanceIpv6AddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2InstanceIpv6AddressesOutputReference <a name="DataAwsccEc2InstanceIpv6AddressesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceIpv6AddressesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2InstanceIpv6AddressesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6Addresses">DataAwsccEc2InstanceIpv6Addresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6AddressesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceIpv6Addresses
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceIpv6Addresses">DataAwsccEc2InstanceIpv6Addresses</a>

---


### DataAwsccEc2InstanceLaunchTemplateOutputReference <a name="DataAwsccEc2InstanceLaunchTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceLaunchTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2InstanceLaunchTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.property.launchTemplateName">LaunchTemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplate">DataAwsccEc2InstanceLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.property.launchTemplateId"></a>

```go
func LaunchTemplateId() *string
```

- *Type:* *string

---

##### `LaunchTemplateName`<sup>Required</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.property.launchTemplateName"></a>

```go
func LaunchTemplateName() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceLaunchTemplate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLaunchTemplate">DataAwsccEc2InstanceLaunchTemplate</a>

---


### DataAwsccEc2InstanceLicenseSpecificationsList <a name="DataAwsccEc2InstanceLicenseSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceLicenseSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2InstanceLicenseSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2InstanceLicenseSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2InstanceLicenseSpecificationsOutputReference <a name="DataAwsccEc2InstanceLicenseSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceLicenseSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2InstanceLicenseSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn">LicenseConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecifications">DataAwsccEc2InstanceLicenseSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LicenseConfigurationArn`<sup>Required</sup> <a name="LicenseConfigurationArn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn"></a>

```go
func LicenseConfigurationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceLicenseSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceLicenseSpecifications">DataAwsccEc2InstanceLicenseSpecifications</a>

---


### DataAwsccEc2InstanceMetadataOptionsOutputReference <a name="DataAwsccEc2InstanceMetadataOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceMetadataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2InstanceMetadataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6">HttpProtocolIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptions">DataAwsccEc2InstanceMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.property.httpEndpoint"></a>

```go
func HttpEndpoint() *string
```

- *Type:* *string

---

##### `HttpProtocolIpv6`<sup>Required</sup> <a name="HttpProtocolIpv6" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```go
func HttpProtocolIpv6() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```go
func HttpPutResponseHopLimit() *f64
```

- *Type:* *f64

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```go
func HttpTokens() *string
```

- *Type:* *string

---

##### `InstanceMetadataTags`<sup>Required</sup> <a name="InstanceMetadataTags" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```go
func InstanceMetadataTags() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceMetadataOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceMetadataOptions">DataAwsccEc2InstanceMetadataOptions</a>

---


### DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference <a name="DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled">EnaSrdUdpEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnaSrdUdpEnabled`<sup>Required</sup> <a name="EnaSrdUdpEnabled" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled"></a>

```go
func EnaSrdUdpEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

---


### DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference <a name="DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabled">EnaSrdEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification">EnaSrdUdpSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecification">DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnaSrdEnabled`<sup>Required</sup> <a name="EnaSrdEnabled" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabled"></a>

```go
func EnaSrdEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EnaSrdUdpSpecification`<sup>Required</sup> <a name="EnaSrdUdpSpecification" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification"></a>

```go
func EnaSrdUdpSpecification() DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecification">DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecification</a>

---


### DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList <a name="DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.get"></a>

```go
func Get(index *f64) DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference <a name="DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6Addresses">DataAwsccEc2InstanceNetworkInterfacesIpv6Addresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceNetworkInterfacesIpv6Addresses
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6Addresses">DataAwsccEc2InstanceNetworkInterfacesIpv6Addresses</a>

---


### DataAwsccEc2InstanceNetworkInterfacesList <a name="DataAwsccEc2InstanceNetworkInterfacesList" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceNetworkInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2InstanceNetworkInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.get"></a>

```go
func Get(index *f64) DataAwsccEc2InstanceNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2InstanceNetworkInterfacesOutputReference <a name="DataAwsccEc2InstanceNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceNetworkInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2InstanceNetworkInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddress">AssociateCarrierIpAddress</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.deviceIndex">DeviceIndex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecification">EnaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference">DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.groupSet">GroupSet</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.ipv6Addresses">Ipv6Addresses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList">DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList">DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount">SecondaryPrivateIpAddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfaces">DataAwsccEc2InstanceNetworkInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssociateCarrierIpAddress`<sup>Required</sup> <a name="AssociateCarrierIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddress"></a>

```go
func AssociateCarrierIpAddress() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddress"></a>

```go
func AssociatePublicIpAddress() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.deviceIndex"></a>

```go
func DeviceIndex() *string
```

- *Type:* *string

---

##### `EnaSrdSpecification`<sup>Required</sup> <a name="EnaSrdSpecification" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecification"></a>

```go
func EnaSrdSpecification() DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference">DataAwsccEc2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference</a>

---

##### `GroupSet`<sup>Required</sup> <a name="GroupSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.groupSet"></a>

```go
func GroupSet() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6AddressCount`<sup>Required</sup> <a name="Ipv6AddressCount" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCount"></a>

```go
func Ipv6AddressCount() *f64
```

- *Type:* *f64

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.ipv6Addresses"></a>

```go
func Ipv6Addresses() DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList">DataAwsccEc2InstanceNetworkInterfacesIpv6AddressesList</a>

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `PrivateIpAddresses`<sup>Required</sup> <a name="PrivateIpAddresses" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.privateIpAddresses"></a>

```go
func PrivateIpAddresses() DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList">DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList</a>

---

##### `SecondaryPrivateIpAddressCount`<sup>Required</sup> <a name="SecondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount"></a>

```go
func SecondaryPrivateIpAddressCount() *f64
```

- *Type:* *f64

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceNetworkInterfaces
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfaces">DataAwsccEc2InstanceNetworkInterfaces</a>

---


### DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList <a name="DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.get"></a>

```go
func Get(index *f64) DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference <a name="DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primary">Primary</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddresses">DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primary"></a>

```go
func Primary() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddresses
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddresses">DataAwsccEc2InstanceNetworkInterfacesPrivateIpAddresses</a>

---


### DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference <a name="DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstancePrivateDnsNameOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.property.hostnameType">HostnameType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptions">DataAwsccEc2InstancePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```go
func EnableResourceNameDnsAaaaRecord() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EnableResourceNameDnsARecord`<sup>Required</sup> <a name="EnableResourceNameDnsARecord" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```go
func EnableResourceNameDnsARecord() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `HostnameType`<sup>Required</sup> <a name="HostnameType" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```go
func HostnameType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstancePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstancePrivateDnsNameOptions">DataAwsccEc2InstancePrivateDnsNameOptions</a>

---


### DataAwsccEc2InstanceSsmAssociationsAssociationParametersList <a name="DataAwsccEc2InstanceSsmAssociationsAssociationParametersList" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceSsmAssociationsAssociationParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2InstanceSsmAssociationsAssociationParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.get"></a>

```go
func Get(index *f64) DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference <a name="DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.property.value">Value</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParameters">DataAwsccEc2InstanceSsmAssociationsAssociationParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.property.value"></a>

```go
func Value() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceSsmAssociationsAssociationParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParameters">DataAwsccEc2InstanceSsmAssociationsAssociationParameters</a>

---


### DataAwsccEc2InstanceSsmAssociationsList <a name="DataAwsccEc2InstanceSsmAssociationsList" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceSsmAssociationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2InstanceSsmAssociationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2InstanceSsmAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2InstanceSsmAssociationsOutputReference <a name="DataAwsccEc2InstanceSsmAssociationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceSsmAssociationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2InstanceSsmAssociationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.property.associationParameters">AssociationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList">DataAwsccEc2InstanceSsmAssociationsAssociationParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.property.documentName">DocumentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociations">DataAwsccEc2InstanceSsmAssociations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssociationParameters`<sup>Required</sup> <a name="AssociationParameters" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.property.associationParameters"></a>

```go
func AssociationParameters() DataAwsccEc2InstanceSsmAssociationsAssociationParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsAssociationParametersList">DataAwsccEc2InstanceSsmAssociationsAssociationParametersList</a>

---

##### `DocumentName`<sup>Required</sup> <a name="DocumentName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.property.documentName"></a>

```go
func DocumentName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceSsmAssociations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceSsmAssociations">DataAwsccEc2InstanceSsmAssociations</a>

---


### DataAwsccEc2InstanceStateOutputReference <a name="DataAwsccEc2InstanceStateOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2InstanceStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceState">DataAwsccEc2InstanceState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceStateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceState
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceState">DataAwsccEc2InstanceState</a>

---


### DataAwsccEc2InstanceTagsList <a name="DataAwsccEc2InstanceTagsList" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2InstanceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2InstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2InstanceTagsOutputReference <a name="DataAwsccEc2InstanceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2InstanceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTags">DataAwsccEc2InstanceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceTags">DataAwsccEc2InstanceTags</a>

---


### DataAwsccEc2InstanceVolumesList <a name="DataAwsccEc2InstanceVolumesList" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2InstanceVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.get"></a>

```go
func Get(index *f64) DataAwsccEc2InstanceVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2InstanceVolumesOutputReference <a name="DataAwsccEc2InstanceVolumesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instance"

dataawsccec2instance.NewDataAwsccEc2InstanceVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2InstanceVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.property.device">Device</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumes">DataAwsccEc2InstanceVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Device`<sup>Required</sup> <a name="Device" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.property.device"></a>

```go
func Device() *string
```

- *Type:* *string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceVolumes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Instance.DataAwsccEc2InstanceVolumes">DataAwsccEc2InstanceVolumes</a>

---



